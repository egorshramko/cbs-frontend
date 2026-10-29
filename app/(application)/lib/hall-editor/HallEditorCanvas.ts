import { Canvas, FabricObject } from "fabric";
import type { CanvasOptions, Point, TOptions, TPointerEvent, TPointerEventInfo } from 'fabric';
import { IEditorController } from "./controller/IEditorController";
import { EditorEvent } from "./events/EditorEvent";
import { ObjectType } from "./objects/ObjectType";

export type TCanvasOptions = TOptions<CanvasOptions>;

export class HallEditorCanvas extends Canvas {
    
    private _controller?: IEditorController;
    private _selectedLibraryElement: ObjectType | null;

    constructor(
            canvas?: HTMLCanvasElement, 
            options?: TCanvasOptions
    ) {
        if (!options) {
            options = HallEditorCanvas._getDefaultOptions();
        }
        super(canvas, options);

        this._selectedLibraryElement = null;
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
        this.on('mouse:up', this._handleMouseClick);
    }

    private _handleMouseClick(event: TPointerEventInfo<TPointerEvent>) {
        console.log("canvas clicked");
        const point = event.scenePoint;
        if (this._isClickedToObject(point)) {

        }
        else {
            this._addHallObject(point);
        }
    }

    private _isClickedToObject(point: Point): boolean {
        return this.getObjects()
            .filter((obj) => obj.left === point.x && obj.top === point.y).length > 0;
    }

    private _addHallObject(point: Point) {
        if (!!this._selectedLibraryElement) {
            this._controller?.handleEvent(EditorEvent.OBJECT_ADD, {
                point: point,
                type: this._selectedLibraryElement
            });
        }
    }

    public set controller(controller: IEditorController) {
        this._controller = controller;
    }

    public get controller(): IEditorController | undefined {
        return this._controller;
    }

    public set selectedLibraryElement(element: ObjectType | null | undefined) {
        
        if (!element) {
            this._selectedLibraryElement = null;
        }
        else {
            this._selectedLibraryElement = element;
        }

        console.debug("HallEditorCanvas: " + this._selectedLibraryElement);
        
    }

    public get selectedLibraryElement(): string | null {
        return this._selectedLibraryElement;
    }

}