import { EditorEventData } from "../events/data/EditorEventData";
import { EditorEvent } from "../events/EditorEvent";

export interface IEditorController {
    handleEvent(event: EditorEvent, data: EditorEventData): void;
}