import { Circle, classRegistry, FabricObject, GroupProps, Point } from "fabric";
import { HallObject } from "./HallObject";

interface SeatProps extends Partial<GroupProps> {
    row?: number;
    place?: number;
}

export class Seat extends HallObject {
    
    public static readonly baseRadius: number = 10;
    public static readonly baseStrokeWidth: number = 2;

    static type = "Seat";
    static customProperties = ['row', 'place'];

    declare row?: number;
    declare place?: number;


    constructor(pointOrObjects: Point | FabricObject[], options: SeatProps = {}) {

        const isDeserialization = Array.isArray(pointOrObjects);

        const components: FabricObject[] = 
            isDeserialization 
            ? pointOrObjects 
            : [
                new Circle({
                    fill: "",
                    stroke: "black",
                    strokeWidth: Seat.baseStrokeWidth,
                    radius: Seat.baseRadius
                })
            ];

        super(components, 
            isDeserialization 
                ? {
                    ...options,
                    lockScalingX: true,
                    lockScalingY: true,
                    hasControls: false
                } 
                : {
                    left: (pointOrObjects as Point).x,
                    top: (pointOrObjects as Point).y,
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