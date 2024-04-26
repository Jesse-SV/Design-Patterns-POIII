import GameLocation from "./location/GameLocation";
import MovieLocation from "./location/MovieLocation";
import Location from "./location/Location";

declare var process;
let location : Location;

if(process.argv.includes("game")){
    location = new GameLocation();

}
else if(process.argv.includes("movie")){
    location = new MovieLocation;
}
else{
    console.log("Insira um tipo de locação existente!");
}
if(location){
    location.startItem();
}