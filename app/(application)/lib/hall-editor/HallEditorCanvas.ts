import { Canvas } from "fabric";
import type { CanvasOptions, FabricObject, Point, TEvent, TOptions, TPointerEvent, TPointerEventInfo } from 'fabric';
import { IEditorController } from "./controller/IEditorController";
import { EditorEvent } from "./events/EditorEvent";
import { HallObject } from "./objects/HallObject";

export type TCanvasOptions = TOptions<CanvasOptions>;

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
        this.on('mouse:down', this._handleMouseClick);
        this.on('selection:cleared', this._handleClearSelection);
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

    private _handleClearSelection(event: Partial<TEvent<TPointerEvent>> & {deselected: FabricObject[]}) {
        console.debug("selection cleared");
        console.debug("deselected object");
        console.debug(event.deselected[0]);

        //event.deselected.forEach((obj) => this.setActiveObject(obj));
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

}