import { RefObject } from "react";

export default function HallEditorArea({
  canvasRef
} : {
  canvasRef: RefObject<HTMLCanvasElement | null>
}) {
  return (
    <canvas ref={ canvasRef } />
  );
}