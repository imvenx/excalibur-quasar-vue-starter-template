import { Engine, Scene } from "excalibur"
import { Player } from "../gameObjects/player"

class Level1 extends Scene {
    onInitialize(engine: Engine<any>): void {
        this.add(new Player())
    }
}

export const level1 = new Level1()