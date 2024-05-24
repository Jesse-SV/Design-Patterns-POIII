import Playstation from "./consoles/Playstation";
import Xbox from "./consoles/Xbox";
import IConsole from "./consoles/interfaces/IConsole";
import AdvancedPlay from "./gameplay/AdvancedPlay";
import Play from "./gameplay/Play";


function startPlay(gameconsole : IConsole){
    console.log("Aguarde...");
    const play = new Play(gameconsole);
    play.playing();
    play.result();
}

function startAdvancedPlay(gameconsole : IConsole){
    startPlay(gameconsole);
    const play = new AdvancedPlay(gameconsole);
    play.chalenge();
    console.log("-------------------------------");
}

startAdvancedPlay(new Xbox());
startAdvancedPlay(new Playstation());