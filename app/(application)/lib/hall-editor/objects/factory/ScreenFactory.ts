import { Point } from "fabric";
import { HallObject } from "../HallObject";
import { HallScreen } from "../HallScreen";
import { HallObjectFactory } from "./HallObjectFactory";

export class ScreenFactory implements HallObjectFactory {

    public createObject(point: Point): HallObject {
        return new HallScreen(point);
    }

}