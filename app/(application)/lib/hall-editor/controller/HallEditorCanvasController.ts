import { EditorEventData } from "../events/data/EditorEventData";
import { EditorEvent } from "../events/EditorEvent";
import { IEditorController } from "./IEditorController";

export class HallEditorCanvasController implements IEditorController {

    public handleEvent(event: EditorEvent, data: EditorEventData): void {
        console.log(event);
    }

}