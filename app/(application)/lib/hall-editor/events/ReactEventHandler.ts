import { IEditorController } from "../controller/IEditorController";
import { EditorEventData } from "./data/EditorEventData";
import { EditorEvent } from "./EditorEvent";

type EventHandlerRegistry = Record<string, (data?: EditorEventData) => void>;

export class ReactEventHandler implements IEditorController {

    private _handlers: EventHandlerRegistry = {};

    public registerEventHandler(event: EditorEvent, handler: (data?: EditorEventData) => void) {
        this._handlers[event] = handler;
    }

    public handleEvent(event: EditorEvent, data?: EditorEventData): void {
        console.log("calling callback controller");
        const handler = this._handlers[event];

        if (!handler) {
            return;
        }

        handler(data);
    } 

}