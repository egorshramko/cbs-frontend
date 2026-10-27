import { Canvas } from "fabric";
import type { CanvasOptions, TOptions } from 'fabric';

export type TCanvasOptions = TOptions<CanvasOptions>;

export class HallEditorCanvas extends Canvas {
    
    constructor(canvas?: HTMLCanvasElement, options?: TCanvasOptions) {
        super(canvas, options);
    }

}