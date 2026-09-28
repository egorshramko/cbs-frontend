import { Canvas, FabricText, Path } from "fabric";

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

    //Тута будем делать какие-то методы всякие
    test() {
        console.log("Button clicked");
    }

    //Добавление экрана на схему
    addScreen() {
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
        this.canvas.add(this.screenLine);
        this.canvas.requestRenderAll();

    }

    //Изменение изгиба экрана
    changeScreenCurvative(curveLevel: number) {
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
                console.debug(this.screenLine.path);
            }
            
            this.canvas.requestRenderAll();
        }
        
    }

    dispose() {
        this.canvas.dispose();
    }


}

