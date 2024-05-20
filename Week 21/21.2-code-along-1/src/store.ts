interface Game {
    id: string,
    whitePlayerName: string,
    blackPlayerName: string,
    moves: string[]
}

// export const games : Game[] = [];

class GameManager {
    private games: Game[];
    private static instance: GameManager;

    private constructor() {
        this.games = []
    }

    static getInstance() {
       if(!this.instance){
            this.instance = new GameManager();
       }
       return this.instance;
    }

    createGame(id: string){
        this.games.push({
            id: id,
            whitePlayerName: 'dscsd',
            blackPlayerName: "sdcdsc",
            moves: []
        })
    }

    addMove(gameId: string, move: string){
        const game = this.games.find(game => game.id === gameId)
        if(game){
            game.moves.push(move)
        }
    }

    log() {
        console.log(this.games)
    }
}
