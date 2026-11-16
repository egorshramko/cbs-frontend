import { Circle, FabricObject, Point } from "fabric";
import { HallObject } from "./HallObject";

export class Seat extends HallObject {
    
    public static readonly baseRadius: number = 10;
    public static readonly baseStrokeWidth: number = 2;

    constructor(point: Point) {
        const components: FabricObject[] = [
            new Circle({
                fill: "",
                stroke: "black",
                strokeWidth: Seat.baseStrokeWidth,
                radius: Seat.baseRadius
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

    public getType(): string {
        return "Место";
    }

}