import { Actor, Color, Engine, Keys } from "excalibur";

export class Player extends Actor {

    speed = 200

    constructor() {
        super({
            x: 50, y: 50,
            radius: 20,
            color: Color.Cyan
        });
    }

    public update(engine: Engine, delta: number) {
        if (engine.input.keyboard.isHeld(Keys.W)) {
            this.pos.y -= this.speed * (delta / 1000)
        }
        if (engine.input.keyboard.isHeld(Keys.S)) {
            this.pos.y += this.speed * (delta / 1000)
        }
        if (engine.input.keyboard.isHeld(Keys.D)) {
            this.pos.x += this.speed * (delta / 1000)
        }
        if (engine.input.keyboard.isHeld(Keys.A)) {
            this.pos.x -= this.speed * (delta / 1000)
        }
    }
}