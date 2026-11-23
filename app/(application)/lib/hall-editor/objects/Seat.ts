import { Circle, classRegistry, FabricObject, Point } from "fabric";
import { HallObject } from "./HallObject";

export class Seat extends HallObject {
    
    public static readonly baseRadius: number = 10;
    public static readonly baseStrokeWidth: number = 2;

    static type = "Seat";
    static customProperties = ['row', 'place'];

    declare row?: number;
    declare place?: number;

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

    public setRow(row: number) {
        this.row = row;
    }

    public getRow(): number | undefined {
        return this.row;
    }

    public setPlace(place: number) {
        this.place = place;
    }

    public getPlace(): number | undefined {
        return this.place;
    }

    public getType(): string {
        return "Место";
    }

}

classRegistry.setClass(Seat);