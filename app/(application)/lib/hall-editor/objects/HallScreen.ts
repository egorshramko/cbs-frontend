import { FabricObject, FabricText, Path, Point } from "fabric";
import { HallObject } from "./HallObject";

export class HallScreen extends HallObject {

    constructor(point: Point) {
        const components: FabricObject[] = [
            new Path("M 10 10 Q 50 10 150 10"),
            new FabricText("Экран")
        ];

        super(components, {
            left: point.x,
            top: point.y
        });
    }

}