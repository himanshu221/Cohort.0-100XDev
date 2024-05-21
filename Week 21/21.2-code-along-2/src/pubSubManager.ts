import { RedisClientType, createClient}  from 'redis'

export class PubSubManager {
    private stockUserMap: Map<string,string[]>;
    private redisClent: RedisClientType;
    private static instance: PubSubManager;

    private constructor(){
        this.redisClent = createClient();
        this.redisClent.connect();
        this.stockUserMap = new Map();
    }

    static getInstance(){
        if(!PubSubManager.instance){
            PubSubManager.instance = new PubSubManager();
        }
        return PubSubManager.instance;
    }

    async addUserToStock(userId: string, stockTicker: string){
        if(this.stockUserMap.has(stockTicker)){
            this.stockUserMap.get(stockTicker)?.push(userId);
        }else{
            this.stockUserMap.set(stockTicker, [userId]);
        }

        if(this.stockUserMap.get(stockTicker)?.length  === 1){
            await this.redisClent.subscribe(stockTicker, (message) => this.handleMessage(stockTicker, message));
        }
    }

    async removeUserFromStock(userId: string, stockerTicker: string){
       this.stockUserMap.set(stockerTicker, this.stockUserMap.get(stockerTicker)?.filter(user => user !== userId) || [])

       if(this.stockUserMap.get(stockerTicker)?.length === 0){
            await this.redisClent.unsubscribe(stockerTicker); 
       }

    }

    private handleMessage(stockerTicker: string, message: string){
        console.log(`New stock price for ${stockerTicker} is ${message}`)
        // send udpated stock price to users
        this.stockUserMap.get(stockerTicker)?.forEach(user => {
            console.log(`Send stock price to user: ${user}`);
        })
    }

    public async disconnect() {
        await this.redisClent.quit();
    }
}

