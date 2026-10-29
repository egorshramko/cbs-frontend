import { Point } from "fabric";
import { ObjectType } from "../../objects/ObjectType";

export interface HallObjectData {
    point: Point,
    type: ObjectType
}