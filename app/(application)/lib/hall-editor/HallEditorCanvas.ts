import { Canvas } from "fabric";
import type { CanvasOptions, TOptions } from 'fabric';

export type TCanvasOptions = TOptions<CanvasOptions>;

export class HallEditorCanvas extends Canvas {
    
    constructor(canvas?: HTMLCanvasElement, options?: TCanvasOptions) {
        if (!options) {
            options = HallEditorCanvas.getDefaultOptions();
        }
        super(canvas, options);
        super.requestRenderAll();
    }

    private static getDefaultOptions(): TCanvasOptions {
        return {
            width: 800,
            height: 600,
            backgroundColor: "#e8e8e8"
        }
    }

}