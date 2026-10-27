import { EditorEvent } from "../events/EditorEvent";

export interface IEditorController {
    notify(event: EditorEvent): void;
}