import { ActiveSelection, Canvas, Group } from "fabric";
import type { CanvasEvents, CanvasOptions, FabricObject, Point, TEvent, TOptions, TPointerEvent, TPointerEventInfo } from 'fabric';
import { IEditorController } from "./controller/IEditorController";
import { EditorEvent } from "./events/EditorEvent";
import { HallObject } from "./objects/HallObject";

export type TCanvasOptions = TOptions<CanvasOptions>;
export type SelectionCreatedEvent = CanvasEvents['selection:created'];
export type ObjectMovingEvent = CanvasEvents['object:moving'];
export type ObjectScalingEvent = CanvasEvents['object:scaling'];
export type SelectionUpdatedEvent = CanvasEvents['selection:updated'];

export class HallEditorCanvas extends Canvas {
    
    private _controller?: IEditorController;
    private _hadSelectionBeforeClick: boolean;

    constructor(
            canvas?: HTMLCanvasElement, 
            options?: TCanvasOptions
    ) {
        if (!options) {
            options = HallEditorCanvas._getDefaultOptions();
        }
        super(canvas, options);

        this._hadSelectionBeforeClick = false;

        this._initializeInternalEvents();
        super.requestRenderAll();
    }

    private static _getDefaultOptions(): TCanvasOptions {
        return {
            width: 800,
            height: 600,
            backgroundColor: "#e8e8e8"
        }
    }

    //Инициализация внутренних событий (клики по canvas, перемещения и пр.)
    private _initializeInternalEvents() {
        this.on('mouse:down:before', () => {
            this._hadSelectionBeforeClick = !!this.getActiveObject();
        });
        this.on('mouse:dblclick', this._handleMouseClick);
        this.on('selection:created', this._handleCreateSelection);
        this.on('selection:updated', this._handleUpdateSelection);
        this.on('selection:cleared', this._handleClearSelection);
        this.on('object:moving', this._handleObjectMoving);
        this.on('object:scaling', this._handleObjectScaling);
    }

    private _handleMouseClick(event: TPointerEventInfo<TPointerEvent>) {
        console.log("canvas clicked");
        const point = event.scenePoint;
        if (!this._isClickedToObject(event)) {
            console.debug("click to empty space");
            if (!this._hadSelectionBeforeClick) {
                console.debug("object not selected");
                this._addHallObject(point);
            }
            else {
                console.debug("object was deselect");
            }
            
        }
    }

    private _handleObjectScaling(event: ObjectScalingEvent) {
        const targetObject = event.target;
        if (!!targetObject) {
            targetObject.setCoords();
            this._pushChangeObjectPropsEvent(targetObject);
        }
    }

    private _handleObjectMoving(event: ObjectMovingEvent) {
        const targetObject = event.target;

        if (!!targetObject) {
            this._pushChangeObjectPropsEvent(targetObject);
        }
        
    }

    private _pushChangeObjectPropsEvent(targetObject: FabricObject) {
        this._controller?.handleEvent(EditorEvent.CHANGE_OBJECT_PROPS, {
            object: targetObject,
            x: Math.floor(targetObject.getX()),
            y: Math.floor(targetObject.getY())
        });
    }

    private _handleCreateSelection(event: SelectionCreatedEvent) {

        console.debug("selection created");

        const activeObject = this.getActiveObject();

        if (activeObject instanceof ActiveSelection) {
            console.log("is active selection");
            activeObject.set({
                borderColor: "red",
                cornerColor: "red",
                lockScalingX: true,
                lockScalingY: true,
                lockRotation: true
            });
            activeObject.setControlVisible('mtr', false);
        }

        if (!!activeObject) {
            this._controller?.handleEvent(EditorEvent.OBJECT_SELECTED, {
                object: activeObject
            });
        }
        
        
    }

    private _handleUpdateSelection(event: SelectionUpdatedEvent) {
        this._controller?.handleEvent(EditorEvent.OBJECT_SELECTED, {
            object: this.getActiveObject()
        });
    }

    private _handleClearSelection(event: Partial<TEvent<TPointerEvent>> & {deselected: FabricObject[]}) {
        console.debug("selection cleared");
        console.debug("deselected object");
        console.debug(event.deselected[0]);

        //event.deselected.forEach((obj) => this.setActiveObject(obj));

        this._controller?.handleEvent(EditorEvent.SELECTION_CLEARED);
    }

    private _isClickedToObject(eventInfo: TPointerEventInfo<TPointerEvent>): boolean {
        const targetInfo = this.findTarget(eventInfo.e);
        console.debug("target")
        console.debug(targetInfo.target);
        return !!targetInfo.target;
    }

    private _addHallObject(point: Point) {
        this._controller?.handleEvent(EditorEvent.OBJECT_ADD, {
            point: point
        });
    }

    public set controller(controller: IEditorController) {
        this._controller = controller;
    }

    public get controller(): IEditorController | undefined {
        return this._controller;
    }

    public addAndRender(...objects: HallObject[]) {
        this.add(...objects);
        this.requestRenderAll();
    }

    public removeAndRender(...objects: FabricObject[]) {

        objects.forEach((obj) => {
            if (obj instanceof ActiveSelection) {
                this.remove(...obj.getObjects());
            }
            else {
                this.remove(obj);
            }
        })

        this.discardActiveObject();
        this.requestRenderAll();
    }

    public moveObject(object: FabricObject, targetPoint: Point) {

        object.set({
            left: targetPoint.x,
            top: targetPoint.y
        });
        object.setCoords();
        this.requestRenderAll();
    }

    public async loadCanvasFromJson(json: string): Promise<void> {
        await this.loadFromJSON(json);
        this.getObjects().forEach(obj => obj.setCoords());
        this.requestRenderAll();
    }

}