import { EditorEventData } from "../events/data/EditorEventData";
import RowConfigData from "../events/data/RowConfigData";
import { EditorEvent } from "../events/EditorEvent";
import { ElementsLibrary } from "../model/ElementsLibrary";
import { IEditorController } from "./IEditorController";

export class ElementsLibraryController implements IEditorController {

    private _elementsLibrary: ElementsLibrary;

    constructor(elementsLibrary: ElementsLibrary) {
        this._elementsLibrary = elementsLibrary;
    }

    public handleEvent(event: EditorEvent, data?: EditorEventData): void {
        switch (event) {
            case EditorEvent.CHANGE_SELECTED_ELEMENT:
                if (!!data) {
                    this.handleChangeSelectedElement(data);
                }
                break;
            case EditorEvent.CHANGE_ELEMENTS_COUNT:
                if (!!data) {
                    this.handleChangeElementsCount(data);
                }
                break;
            case EditorEvent.CHANGE_CONFIG:
                if (!!data) {
                    this.handleChangeConfig(data);
                }
        }
    }

    public handleChangeSelectedElement(data: EditorEventData) {
        this._elementsLibrary.selectedObjectType = data.selectedElement; 
    }

    public handleChangeElementsCount(data: EditorEventData) {
        if (data.elementsCount !== undefined) {
            this._elementsLibrary.elementsCount = data.elementsCount;
        }
    }

    public handleChangeConfig(data: EditorEventData) {
        this._elementsLibrary.rowConfig = data as RowConfigData;
    }

}