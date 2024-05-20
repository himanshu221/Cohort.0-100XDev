import { startLogger } from "./logger";
import { gameManager } from "./store";

startLogger()

setInterval(() => {
    gameManager.createGame(Math.random().toString())
}, 5000)