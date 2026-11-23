import { EditorEventData } from "../events/data/EditorEventData";
import { EditorEvent } from "../events/EditorEvent";
import { HallEditorCanvas } from "../HallEditorCanvas";
import { IEditorController } from "./IEditorController";

export default class ExportController implements IEditorController {

    private _hallEditorCanvas: HallEditorCanvas;

    constructor(hallEditorCanvas: HallEditorCanvas) {
        this._hallEditorCanvas = hallEditorCanvas;
    }

    public handleEvent(event: EditorEvent, data?: EditorEventData) {
        switch (event) {
            case EditorEvent.EXPORT_JSON:
                break;
        }
    }

}