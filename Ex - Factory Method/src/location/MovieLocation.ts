import Movie from "./items/Movie";
import IItems from "./items/interfaces/IItems";
import Location from "./Location";

export default class MovieLocation extends Location{

    protected createItem() : IItems{
        return new Movie();
    }
}