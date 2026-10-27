import { EditorEvent } from "../events/EditorEvent";
import { IEditorController } from "./IEditorController";

export class HallEditorCanvasController implements IEditorController {

    public notify(event: EditorEvent) {
        console.log(event);
    }

}