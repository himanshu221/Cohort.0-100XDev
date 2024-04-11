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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const redis_1 = require("redis");
const app = (0, express_1.default)();
const redisClient = (0, redis_1.createClient)();
redisClient.on('error', console.error);
app.use(express_1.default.json());
app.post("/submit", (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.body.userId;
    const problemId = req.body.problemId;
    const code = req.body.code;
    const lang = req.body.language;
    try {
        yield redisClient.LPUSH("problems", JSON.stringify({ userId, problemId, code, lang }));
        resp.json({
            message: "Successfully submited"
        });
    }
    catch (e) {
        console.error("Failed to submit to redis queue", e);
        resp.status(500).json({
            message: "Failed to submit to redis queue"
        });
    }
}));
function connectToRedis() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield redisClient.connect();
            app.listen(3000, () => {
                console.log("Server started on port 3000");
            });
        }
        catch (e) {
            console.error("Failed to connect to redis", e);
        }
    });
}
connectToRedis();
