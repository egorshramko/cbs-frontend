import { HallObjectFactory } from "../objects/factory/HallObjectFactory";
import { ScreenFactory } from "../objects/factory/ScreenFactory";
import { SeatFactory } from "../objects/factory/SeatFactory";
import { ObjectType } from "../objects/ObjectType";

export class ElementsLibrary {

    private _selectedObjectType: ObjectType | null | undefined;
    private _elementsCount: number;

    constructor() {
        this._selectedObjectType = null;
        this._elementsCount = 1;
    }

    public set selectedObjectType(type: ObjectType | null | undefined) {
        this._selectedObjectType = type;
    }

    public get selectedObjectType(): ObjectType | null {
        if (this._selectedObjectType === undefined) {
            return null;
        }
        return this._selectedObjectType;
    }

    public set elementsCount(count: number) {
        this._elementsCount = count;
    } 

    public get elementsCount(): number {
        return this._elementsCount;
    }

    public getObjectFactory(): HallObjectFactory | null {
        if (!!this._selectedObjectType) {
            switch (this._selectedObjectType) {
                case ObjectType.SCREEN:
                    return new ScreenFactory(this._elementsCount);
                case ObjectType.SEAT:
                    return new SeatFactory(this._elementsCount);
            }
        }
        return null;
    }


}