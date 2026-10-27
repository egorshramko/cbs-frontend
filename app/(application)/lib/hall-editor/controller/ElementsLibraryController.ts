import { EditorEventData } from "../events/data/EditorEventData";
import { EditorEvent } from "../events/EditorEvent";
import { HallEditorCanvas } from "../HallEditorCanvas";
import { IEditorController } from "./IEditorController";

export class ElementsLibraryController implements IEditorController {

    private _hallEditorCanvas: HallEditorCanvas;

    constructor(hallEditorCanvas: HallEditorCanvas) {
        this._hallEditorCanvas = hallEditorCanvas;
    }

    public handleEvent(event: EditorEvent, data: EditorEventData): void {
        switch (event) {
            case EditorEvent.CHANGE_SELECTED_ELEMENT:
                this.handleChangeSelectedElement(data);
                break;
        }
    }

    public handleChangeSelectedElement(data: EditorEventData) {
        
        this._hallEditorCanvas.selectedLibraryElement = data.selectedElement;
        
    }

}