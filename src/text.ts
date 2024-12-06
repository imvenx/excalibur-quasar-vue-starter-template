import { Actor, Color, Engine, Text, Font, TextAlign, Label, vec, FontUnit, FontStyle, BaseAlign, Direction, DisplayMode } from "excalibur";

export const game = new Engine({
    canvasElementId: 'game',
    width: 1280, height: 720,
    displayMode: DisplayMode.FitScreen,
    backgroundColor: Color.Gray
});
game.start()

const actor = new Actor({
    x: 100,
    y: 200,
    color: Color.Red,
    width: 100,
    height: 100
});

let text = new Text({
    text: 'askldjasdklj jklads jklasldkj sajdlk ❤️',
    font: new Font({
        size: 30,
        textAlign: TextAlign.Left
    }),
})

actor.graphics.use(text);
game.add(actor);

const label = new Label({
    text: 'Some text',
    pos: vec(100, 100),
    font: new Font({
        family: 'impact',
        size: 24,
        unit: FontUnit.Px
    })
});

game.add(label)

let rasterText = new Text({
    text: 'This is raster text ❤️',
    font: new Font({
        size: 30,
        unit: FontUnit.Px,
        family: 'sans-serif',
        style: FontStyle.Normal,
        bold: false,
        textAlign: TextAlign.Left,
        baseAlign: BaseAlign.Alphabetic,
        direction: Direction.LeftToRight,
        shadow: {
            blur: 2,
            offset: vec(2, 2),
            color: Color.Black,
        }
    })
});

let rasterTextActor = new Actor({ width: 100, height: 100, x: 300, y: 100 })
rasterTextActor.graphics.add(rasterText)

game.add(rasterTextActor)