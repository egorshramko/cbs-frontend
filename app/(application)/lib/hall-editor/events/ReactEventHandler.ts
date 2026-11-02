import { IEditorController } from "../controller/IEditorController";
import { EditorEventData } from "./data/EditorEventData";
import { EditorEvent } from "./EditorEvent";

type EventHandlerRegistry = Record<string, () => void>;

export class ReactEventHandler implements IEditorController {

    private _handlers: EventHandlerRegistry = {};

    public registerEventHandler(event: EditorEvent, handler: () => void) {
        this._handlers[event] = handler;
    }

    public handleEvent(event: EditorEvent, data?: EditorEventData): void {
        const handler = this._handlers[event];

        if (!handler) {
            return;
        }

        handler();
    } 

}