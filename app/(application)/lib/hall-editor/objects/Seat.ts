import { Circle, FabricObject, Point } from "fabric";
import { HallObject } from "./HallObject";

export class Seat extends HallObject {
    
    constructor(point: Point) {
        const components: FabricObject[] = [
            new Circle({
                fill: "",
                stroke: "black",
                strokeWidth: 2,
                radius: 10
            })
        ];

        super(components, {
            left: point.x,
            top: point.y,
            lockScalingX: true,
            lockScalingY: true,
            hasControls: false
        });
    }

}