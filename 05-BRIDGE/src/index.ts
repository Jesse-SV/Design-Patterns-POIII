import Facebook from "./platforms/Facebook";
import Twitch from "./platforms/Twitch";
import Youtube from "./platforms/Youtube";
import IPlataform from "./platforms/interfaces/IPlatform";
import AdvancedLive from "./transmissions/AdvancedLive";
import Live from "./transmissions/Live";

function startLive(platform : IPlataform){
    console.log("Aguarde...");
    const live = new Live(platform);
    live.broadcasting();
    live.result();
}

function startAdvancedLive(platform : IPlataform){
    startLive(platform);
    const live = new AdvancedLive(platform);
    live.subtitles();
    live.coments();
    console.log("--------------------------------");
}

startAdvancedLive(new Youtube());
startAdvancedLive(new Twitch());
startAdvancedLive(new Facebook());