import { FabricObject, Group, GroupProps, Point } from "fabric";

export abstract class HallObject extends Group {

    constructor(
        objects: FabricObject[],
        options: Partial<GroupProps>
    ) {
        super(objects, options);
    }

}