import { gameManager } from "./store"

export const startLogger = () => {
    setInterval(() => {
        gameManager.log()
    }, 5000)
}