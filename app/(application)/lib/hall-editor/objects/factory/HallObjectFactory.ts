import { Point } from "fabric";
import { HallObject } from "../HallObject";

export interface HallObjectFactory {
    createObject(point: Point): HallObject;
}