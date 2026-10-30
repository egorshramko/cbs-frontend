import { Circle, FabricObject, Point } from "fabric";
import { HallObject } from "./HallObject";

export class Seat extends HallObject {
    
    constructor(point: Point) {
        const components: FabricObject[] = [
            new Circle()
        ];

        super(components, {
            left: point.x,
            top: point.y
        });
    }

}