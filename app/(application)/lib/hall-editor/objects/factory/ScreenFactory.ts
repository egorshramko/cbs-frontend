import { Point } from "fabric";
import { HallObject } from "../HallObject";
import { HallScreen } from "../HallScreen";
import { HallObjectFactory } from "./HallObjectFactory";

export class ScreenFactory implements HallObjectFactory {

    private _count: number;

    constructor(count: number) {
        this._count = count;
    }

    public createObject(point: Point): HallObject {
        return new HallScreen(point);
    }

    public createObjects(point: Point): HallObject[] {
        return [];
    }

}