import { ReactNode } from "react";

export default function LoginPageLayout({ 
  children 
}: { 
  children: ReactNode 
}) {

  return (
    <html lang="en">
      <body>
        This is another layout
        { children }
      </body>
    </html>
  );

} 