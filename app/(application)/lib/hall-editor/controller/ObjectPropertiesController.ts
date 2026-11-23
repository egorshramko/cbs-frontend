import { Point } from "fabric";
import { EditorEventData } from "../events/data/EditorEventData";
import { EditorEvent } from "../events/EditorEvent";
import { HallEditorCanvas } from "../HallEditorCanvas";
import { IEditorController } from "./IEditorController";
import { HallObject } from "../objects/HallObject";
import { Seat } from "../objects/Seat";

export default class ObjectPropertiesController implements IEditorController {

    private _canvas: HallEditorCanvas;
    private _callbackController: IEditorController;

    constructor(
        canvas: HallEditorCanvas, 
        callbackController: IEditorController
    ) {
        this._canvas = canvas;
        this._callbackController = callbackController;
    }

    public handleEvent(event: EditorEvent, data?: EditorEventData) {
        switch (event) {
            case EditorEvent.CHANGE_OBJECT_PROPS:
                this._handleChangeObjectProps(data);
                break;
            case EditorEvent.REMOVE_OBJECT:
                this._handleRemoveObject(data);
                break;
        }

        this._callbackController.handleEvent(event, data);
    }

    private _handleChangeObjectProps(data?: EditorEventData) {
        this._handleObjectMoving(data);
    }

    private _handleObjectMoving(data?: EditorEventData) {
        console.log("change object props");
        console.log(data);
        if (!!data && !!data.object) {
            const movingObject = data.object;
            const targetPoint = new Point({
                x: data.x !== undefined ? data.x : data.object.getX(),
                y: data.y !== undefined ? data.y : data.object.getY()
            });

            this._canvas.moveObject(movingObject, targetPoint);
        }
    }
    
    private _handleRemoveObject(data?: EditorEventData) {
        if (!!data && !!data.object) {
            const removingObject = data.object;
            this._canvas.removeAndRender(removingObject);
        }
    }

}