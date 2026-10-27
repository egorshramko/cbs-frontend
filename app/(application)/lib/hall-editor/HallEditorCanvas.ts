import { Canvas } from "fabric";
import type { CanvasOptions, TOptions } from 'fabric';
import { IEditorController } from "./controller/IEditorController";

export type TCanvasOptions = TOptions<CanvasOptions>;

export class HallEditorCanvas extends Canvas {
    
    private _controller?: IEditorController;

    constructor(
            canvas?: HTMLCanvasElement, 
            options?: TCanvasOptions, 
            controller?: IEditorController
    ) {
        if (!options) {
            options = HallEditorCanvas._getDefaultOptions();
        }
        super(canvas, options);

        if (!!controller) {
            this.controller = controller;
        }

        super.requestRenderAll();
    }

    private static _getDefaultOptions(): TCanvasOptions {
        return {
            width: 800,
            height: 600,
            backgroundColor: "#e8e8e8"
        }
    }

    public set controller(controller: IEditorController) {
        this._controller = controller;
    }

    public get controller(): IEditorController | undefined {
        return this._controller;
    }

}