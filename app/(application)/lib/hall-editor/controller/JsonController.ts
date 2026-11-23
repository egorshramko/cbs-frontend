import { EditorEventData } from "../events/data/EditorEventData";
import { EditorEvent } from "../events/EditorEvent";
import { HallEditorCanvas } from "../HallEditorCanvas";
import { IEditorController } from "./IEditorController";

export default class JsonController implements IEditorController {

    private _hallEditorCanvas: HallEditorCanvas;

    constructor(hallEditorCanvas: HallEditorCanvas) {
        this._hallEditorCanvas = hallEditorCanvas;
    }

    public handleEvent(event: EditorEvent, data?: EditorEventData) {
        switch (event) {
            case EditorEvent.EXPORT_JSON:
                this._handleExportJsonEvent();
                break;
        }
    }

    private _handleExportJsonEvent() {
        const canvasJsonObject = this._hallEditorCanvas.toJSON();
        const canvasJson = JSON.stringify(canvasJsonObject);

        const blob = new Blob([canvasJson], {type: 'application/json'});
        const url = URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = url;
        link.download = "schema.json";
        document.body.appendChild(link);
        link.click();

        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    }

}