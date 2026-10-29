import { EditorEventData } from "../events/data/EditorEventData";
import { EditorEvent } from "../events/EditorEvent";
import { HallEditorCanvas } from "../HallEditorCanvas";
import { IEditorController } from "./IEditorController";

export class HallEditorCanvasController implements IEditorController {

    private _hallEditorCanvas: HallEditorCanvas;

    constructor(hallEditorCanvas: HallEditorCanvas) {
        this._hallEditorCanvas = hallEditorCanvas;

    }

    //этот метод нужен для получения событий из холста
    public handleEvent(event: EditorEvent, data?: EditorEventData): void {
        console.log(event);
        switch (event) {
            case EditorEvent.OBJECT_ADD:
                
                break;
        }
    }


}