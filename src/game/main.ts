import { Color, DisplayMode, Engine } from "excalibur";
import { level1 } from "./scenes/scene1";

let engine: Engine

export function startGame(gameCanvas: HTMLCanvasElement) {
    engine = new Engine({
        width: 1280,
        height: 720,
        canvasElement: gameCanvas as HTMLCanvasElement,
        backgroundColor: Color.Gray,
        displayMode: DisplayMode.FitScreen
    });

    engine.addScene('level1', level1)
    engine.start('level1');
}