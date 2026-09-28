import { Canvas, FabricText, Path, TParsedAbsoluteMoveToCommand, TSimpleParsedCommand, TSimplePathData } from "fabric";

interface CanvasPoint {
    x: number,
    y: number
}

export default class HallSchemeEditorManipulator {

    canvas: Canvas;

    //объект экрана
    screenLine?: Path;
    screenLabel?: FabricText;

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = new Canvas(canvas, {
            width: 600,
            height: 600,
            backgroundColor: "#e8e8e8"
        });
        this.canvas.renderAll();
    }

    //Добавление экрана на схему
    public addScreen(): void {
        //Расчет длины экрана
        const canvasWidth = this.canvas.width;
        const canvasHeight = this.canvas.height;

        //Координаты начала линии экрана (отступ по X 5%)
        const startScreenLineX = Math.round(canvasWidth * 0.05);
        const endScreenLineX = Math.round(canvasWidth * 0.95);
        const middleScreenLineX = Math.round((startScreenLineX + endScreenLineX) / 2);
        
        //Координата начала и конца линии экрана по Y
        const screenLineY = Math.round(canvasHeight * 0.1);

        //Задаем путь для линии экрана
        const screenLinePath = `M ${startScreenLineX} ${screenLineY} 
                                Q ${middleScreenLineX} ${screenLineY}, 
                                    ${endScreenLineX} ${screenLineY}`;

        this.screenLine = new Path(screenLinePath, {
            strokeWidth: 2, 
            stroke: "black",
            fill: '',
            selectable: false,
            evented: false
        });

        const labelVerticalPosition: number = this.calculateVerticalScreenLabelPosition();

        //Добавление текста "Экран" на холст
        this.screenLabel = new FabricText("Экран", {
            fontFamily: 'Inter, sans-serif',
            fontSize: 12,
            selectable: false,
            evented: false,
            fill: "black",
            top: labelVerticalPosition
        });

        this.canvas.add(this.screenLine);
        this.canvas.add(this.screenLabel);
        this.canvas.centerObjectH(this.screenLabel);

        this.canvas.requestRenderAll();

    }

    //Изменение изгиба экрана
    public changeScreenCurvative(curveLevel: number): void {
        if (!!this.screenLine) {

            //Основная Y-координата линии экрана, относительно которой считается изгиб
            const screenLineMainY = this.screenLine.path[0][2];

            console.debug("screenLineMainY");
            console.debug(screenLineMainY);

            const screenLineWidth = this.screenLine.strokeWidth;

            if (screenLineMainY !== undefined) {
                const screenPath = this.screenLine.path.map(pathCommand => [...pathCommand]);
                screenPath[1][2] = screenLineMainY - curveLevel * screenLineWidth * 12;
                this.screenLine.set({
                    path: screenPath
                });

                //Перемещение надписи по уровню изгиба
                const labelVerticalPosition = this.calculateVerticalScreenLabelPosition();
                this.screenLabel?.set({
                    top: labelVerticalPosition
                });

                console.debug(this.screenLine.path);
            }
            
            this.canvas.requestRenderAll();
        }
        
    }

    public dispose(): void {
        this.canvas.dispose();
    }

    private calculateVerticalScreenLabelPosition(): number {

        if (!this.screenLine) {
            return 0;
        }

        //Расчет положения надписи экрана (t = 0.5 - это центр кривой)
        const centerScreenLinePoint: CanvasPoint = this.getQuadraticBezierCurvePoint(0.5, this.screenLine.path)
        return centerScreenLinePoint.y + 25

    }

    //Расчет точки на кривой безье в зависимости от параметра t
    private getQuadraticBezierCurvePoint(t: number, path: TSimplePathData): CanvasPoint {
        if (!path || t < 0 || t > 1) {
            throw "Отсутствует path или t вне диапазона";
        }

        //Парсинг опорных точек
        let P1: CanvasPoint | undefined;
        let P2: CanvasPoint | undefined;
        let P3: CanvasPoint | undefined;
        path.forEach(command => {
            const commandType = command[0];
            if (commandType === "M") {
                P1 = {
                    x: command[1],
                    y: command[2]
                };
            }
            else if (commandType === "Q") {
                P2 = {
                    x: command[1],
                    y: command[2]
                };
                P3 = {
                    x: command[3],
                    y: command[4]
                };
            }

        });

        if (P1 === undefined || P2 === undefined || P3 === undefined) {
            console.warn("Расчет точки на квадратичной кривой Безье завершился неудачей!");
            throw "Расчет точки на квадратичной кривой Безье завершился неудачей!";
        }
        return {
            x: Math.pow((1 - t), 2) * P1.x + 2 * (1 - t) * t * P2.x + Math.pow(t, 2) * P3.x,
            y: Math.pow((1 - t), 2) * P1.y + 2 * (1 - t) * t * P2.y + Math.pow(t, 2) * P3.y
        }
    }
}

