#==================================================
# Этап 1: Установка зависимостей
#==================================================

ARG NODE_VERSION=24-slim

FROM node:${NODE_VERSION} AS dependencies

# Установка рабочего каталога
WORKDIR /app

# Копирование файлов, относящихся к пакету для начала использования механизма кеширования Docker
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* .npmrc* ./

# Установка зависимостей проекта с замороженным файлом блокировки для воспроизводимости сборки
RUN --mount=type=cache,target=/root/.npm \
    --mount=type=cache,target=/usr/local/share/.cache/yarn \
    --mount=type=cache,target=/root/.local/share/pnpm/store \
    if [ -f package-lock.json ]; then \
        npm ci --no-audit --no-fund; \
    elif [ -f yarn.lock ]; then \
        corepack enable pnpm && pnpm install --frozen-lockfile; \
    else \
        echo "No lockfile found." && exit 1; \
    fi

#======================================================
# Этап 2: Сборка приложения Next.js в standalone mode
#======================================================

FROM node:${NODE_VERSION} AS builder

#Установка рабочей директории
WORKDIR /app

# Копирование зависимостей проекта
COPY --from=dependencies /app/node_modules ./node_modules 

# Копирование исходного кода
COPY . .

ENV NODE_ENV=production

RUN if [ -f package-lock.json ]; then \
        npm run build; \
    elif [ -f yarn.lock ]; then \
        corepack enable yarn && yarn build; \
    elif [ -f pnpm-lock.yaml ]; then \
        corepack enable pnpm && pnpm build; \
    else \
        echo "No lockfile found." && exit 1; \
    fi

#=======================================================
# Этап 3: Запуск приложения Next.js
#=======================================================

FROM node:${NODE_VERSION} AS runner

# Установка рабочей директории
WORKDIR /app

ENV NODE_ENV=production 
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Копирование ресурсов для запуска
COPY --from=builder --chown=node:node /app/public ./public

# Установка правильных прав доступа для предварительной отрисовки
RUN mkdir .next
RUN chown node:node .next 

COPY --from=builder --chown=node:node /app/.next/standalone ./
COPY --from=builder --chown=node:node /app/.next/static ./.next/static

# Переход к не-рут пользователю
USER node 

# Открытие порта 3000 для получения HTTP-трафика
EXPOSE 3000 

# Запуск сервера Next.js в режиме standalone
CMD ["node", "server.js"]