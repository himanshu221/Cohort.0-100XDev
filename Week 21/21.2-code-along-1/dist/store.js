"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gameManager = void 0;
// export const games : Game[] = [];
class GameManager {
    constructor() {
        this.games = [];
    }
    createGame(id) {
        this.games.push({
            id: id,
            whitePlayerName: 'dscsd',
            blackPlayerName: "sdcdsc",
            moves: []
        });
    }
    addMove(gameId, move) {
        const game = this.games.find(game => game.id === gameId);
        if (game) {
            game.moves.push(move);
        }
    }
    log() {
        console.log(this.games);
    }
}
exports.gameManager = new GameManager();
