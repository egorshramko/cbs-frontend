import { FabricObject, Group, GroupProps, ObjectEvents, Point, SerializedGroupProps, TOptions } from "fabric";

export abstract class HallObject extends Group {

    constructor(
        objects: FabricObject[],
        options: Partial<GroupProps>
    ) {
        super(objects, {
            ...options,
            borderColor: "red",
            cornerColor: "red"
        });
    }

    public abstract getType(): string;

}