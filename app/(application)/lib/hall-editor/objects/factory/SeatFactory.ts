import { Point } from "fabric";
import { HallObject } from "../HallObject";
import { Seat } from "../Seat";
import { HallObjectFactory } from "./HallObjectFactory";

export class SeatFactory implements HallObjectFactory {

    public createObject(point: Point): HallObject {
        return new Seat(point);
    }

}