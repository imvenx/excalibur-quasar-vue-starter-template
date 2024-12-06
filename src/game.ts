import { Color, DisplayMode, Engine } from "excalibur";

export const game = new Engine({
    width: 800,
    height: 600,
    displayMode: DisplayMode.FillScreen,
    backgroundColor: Color.Gray
});
