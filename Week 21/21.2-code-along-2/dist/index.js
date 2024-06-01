"use strict";
// import { PubSubManager } from './pubSubManager'
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// setInterval(() => {
//     PubSubManager.getInstance().addUserToStock(Math.random().toString(), "APPL");
// }, 5000)
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        for (let i = 0; i < 10; ++i) {
            const resp = yield fetch("https://leetcode.com/points/api/redeem/", {
                "headers": {
                    "accept": "*/*",
                    "accept-language": "en-GB,en;q=0.5",
                    "content-type": "application/json",
                    "sec-ch-ua": "\"Brave\";v=\"123\", \"Not:A-Brand\";v=\"8\", \"Chromium\";v=\"123\"",
                    "sec-ch-ua-mobile": "?0",
                    "sec-ch-ua-model": "\"\"",
                    "sec-ch-ua-platform": "\"macOS\"",
                    "sec-ch-ua-platform-version": "\"14.3.0\"",
                    "sec-fetch-dest": "empty",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-site": "same-origin",
                    "sec-gpc": "1",
                    "x-csrftoken": "ngF76xCrYWs6Hv4YTDl1ORYbZajRtdz0fhzc93EV1JwZYbZwjji3ETXIFgkBMpDw",
                    "cookie": "csrftoken=ngF76xCrYWs6Hv4YTDl1ORYbZajRtdz0fhzc93EV1JwZYbZwjji3ETXIFgkBMpDw; cf_clearance=tT_gGSGJ8W1UKZobkmteMyxyxXqiOGO8khRZqUSEL2w-1714501234-1.0.1.1-t2ojRJL7.Pa8VPoRvYXR1aeacjqiUUUaFMiyreTJT32S_urMMiazvobCirovP2KuBvjyKB35WDb0DA6pawX0HA; c_a_u=\"aGltYW5zaHUyMTI=:1s7qCH:s480gR8LjPJxe1mC3V8I05l7qRUT9-c5_ppACAf_0hQ\"; INGRESSCOOKIE=52de89d12ef920355ec5f00432061e3e|8e0876c7c1464cc0ac96bc2edceabd27; LEETCODE_SESSION=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfYXV0aF91c2VyX2lkIjoiMjAxMjMzMyIsIl9hdXRoX3VzZXJfYmFja2VuZCI6ImFsbGF1dGguYWNjb3VudC5hdXRoX2JhY2tlbmRzLkF1dGhlbnRpY2F0aW9uQmFja2VuZCIsIl9hdXRoX3VzZXJfaGFzaCI6IjYzNjdkMjhhMTU1ZWViZTgwMmU1MDJhYzI0ZTY5M2E4NzIwNzdhNjAyMWE4MzE5MWZiMGQyOTMzNDlkOTk0ZWIiLCJpZCI6MjAxMjMzMywiZW1haWwiOiJoaW1hbnNodWJodXNoYW43NzVAZ21haWwuY29tIiwidXNlcm5hbWUiOiJoaW1hbnNodTIxMiIsInVzZXJfc2x1ZyI6ImhpbWFuc2h1MjEyIiwiYXZhdGFyIjoiaHR0cHM6Ly9hc3NldHMubGVldGNvZGUuY29tL3VzZXJzL2RlZmF1bHRfYXZhdGFyLmpwZyIsInJlZnJlc2hlZF9hdCI6MTcxNjUyNDM0NCwiaXAiOiIyNDA1OjIwMTo0MDAxOmQxMjI6Y2NjODpiOTgwOmQxNjQ6NTdlZCIsImlkZW50aXR5IjoiMDJhYWFhOTA1MGQ5MmU1ZjVkNmJkMTM1Y2E1YTA2NWMiLCJzZXNzaW9uX2lkIjo1ODI1NjY3NywiX3Nlc3Npb25fZXhwaXJ5IjoxMjA5NjAwfQ.en-my9Ij_zG6N6xi-iBPnM7xdCrklI-ukGNNnBRr4qA; __cf_bm=xoTbpIILGoCtdmohO7yjv55juHdTofy4H.oNkv4NxTA-1716531749-1.0.1.1-ghDys5aWeF0iNiIUqnIIyN29zhZDCC7jrebWWllfi7VxHIdGjBG7vXrhMfjCn_mEydOH5O5E5PnjmCShnp_2Lw; __stripe_mid=b5112896-68dc-4728-8d53-f802e309821db562ec; __stripe_sid=3e0dceb2-e5e6-4cb5-81ea-37297966de800d4e49; _dd_s=rum=0&expire=1716532766256",
                    "Referer": "https://leetcode.com/store/?redeem=time_travel_ticket",
                    "Referrer-Policy": "strict-origin-when-cross-origin"
                },
                "body": "{\"item\":\"time_travel_ticket\"}",
                "method": "POST"
            });
            console.log(resp.body);
        }
    });
}
main();
