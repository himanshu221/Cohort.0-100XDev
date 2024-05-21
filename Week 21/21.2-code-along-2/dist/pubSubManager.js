"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PubSubManager = void 0;
const redis_1 = require("redis");
class PubSubManager {
    constructor() {
        this.redisClent = (0, redis_1.createClient)();
        this.redisClent.connect();
        this.stockUserMap = new Map();
    }
    static getInstance() {
        if (!PubSubManager.instance) {
            PubSubManager.instance = new PubSubManager();
        }
        return PubSubManager.instance;
    }
    addUserToStock(userId, stockTicker) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            if (this.stockUserMap.has(stockTicker)) {
                (_a = this.stockUserMap.get(stockTicker)) === null || _a === void 0 ? void 0 : _a.push(userId);
            }
            else {
                this.stockUserMap.set(stockTicker, [userId]);
            }
            if (((_b = this.stockUserMap.get(stockTicker)) === null || _b === void 0 ? void 0 : _b.length) === 1) {
                yield this.redisClent.subscribe(stockTicker, (message) => this.handleMessage(stockTicker, message));
            }
        });
    }
    removeUserFromStock(userId, stockerTicker) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            this.stockUserMap.set(stockerTicker, ((_a = this.stockUserMap.get(stockerTicker)) === null || _a === void 0 ? void 0 : _a.filter(user => user !== userId)) || []);
            if (((_b = this.stockUserMap.get(stockerTicker)) === null || _b === void 0 ? void 0 : _b.length) === 0) {
                yield this.redisClent.unsubscribe(stockerTicker);
            }
        });
    }
    handleMessage(stockerTicker, message) {
        var _a;
        console.log(`New stock price for ${stockerTicker} is ${message}`);
        // send udpated stock price to users
        (_a = this.stockUserMap.get(stockerTicker)) === null || _a === void 0 ? void 0 : _a.forEach(user => {
            console.log(`Send stock price to user: ${user}`);
        });
    }
    disconnect() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.redisClent.quit();
        });
    }
}
exports.PubSubManager = PubSubManager;
