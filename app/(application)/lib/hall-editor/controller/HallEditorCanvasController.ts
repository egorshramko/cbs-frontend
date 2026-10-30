import { EditorEventData } from "../events/data/EditorEventData";
import { EditorEvent } from "../events/EditorEvent";
import { HallEditorCanvas } from "../HallEditorCanvas";
import { ElementsLibrary } from "../model/ElementsLibrary";
import { IEditorController } from "./IEditorController";

export class HallEditorCanvasController implements IEditorController {

    private _hallEditorCanvas: HallEditorCanvas;
    private _elementsLibrary: ElementsLibrary;

    constructor(
        hallEditorCanvas: HallEditorCanvas,
        elementsLibrary: ElementsLibrary
    ) {
        this._hallEditorCanvas = hallEditorCanvas;
        this._elementsLibrary = elementsLibrary;
    }

    //этот метод нужен для получения событий из холста
    public handleEvent(event: EditorEvent, data?: EditorEventData): void {
        console.log(event);
        switch (event) {
            case EditorEvent.OBJECT_ADD:
                if (!!data?.point) {
                    const objectFactory = this._elementsLibrary.getObjectFactory();
                    const objectForAdd = objectFactory?.createObject(data.point);
                    if (!!objectForAdd) {
                        this._hallEditorCanvas.addAndRender(objectForAdd);
                    }
                }
                break;
        }
    }


}