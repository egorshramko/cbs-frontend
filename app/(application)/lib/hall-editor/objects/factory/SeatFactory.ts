import { Point } from "fabric";
import { HallObject } from "../HallObject";
import { Seat } from "../Seat";
import { HallObjectFactory } from "./HallObjectFactory";

export class SeatFactory implements HallObjectFactory {

    private _count: number;

    constructor(count: number) {
        this._count = count;
    }

    public createObject(point: Point): HallObject {
        return new Seat(point);
    }

    public createObjects(point: Point): HallObject[] {
        return [];
    }

}