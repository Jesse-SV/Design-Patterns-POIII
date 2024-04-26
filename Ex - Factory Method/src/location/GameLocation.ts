import Game from "./items/Game";
import IItems from "./items/interfaces/IItems";
import Location from "./Location";

export default class GameLocation extends Location{

    protected createItem() : IItems{
        return new Game;
    }
}