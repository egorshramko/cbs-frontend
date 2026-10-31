import { FabricObject, FabricText, Path, Point } from "fabric";
import { HallObject } from "./HallObject";

export class HallScreen extends HallObject {

    constructor(point: Point) {
        super(HallScreen._getDefaultComponents(), {
            left: point.x,
            top: point.y
        });
    }

    private static _getDefaultComponents(): FabricObject[] {
        const screenLine = HallScreen._createScreenLine();
        const label = HallScreen._createLabel();

        return [screenLine, label];
    }

    private static _createScreenLine(): Path {
        return new Path("M 0 0 Q 50 0 150 0", {
            left: 0,
            top: 10,
            fill: "black",
            stroke: 'red',
            strokeWidth: 2
        });
    }

    private static _createLabel(): FabricText {
        return new FabricText("Экран", {
            left: 50,
            top: 50
        });
    }

}