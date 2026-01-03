import { TYPES } from "./types.js";

export class GatewayHandle {
    static #instance: GatewayHandle;

    private constructor() {}

    public static get instance(): GatewayHandle {
        if (!GatewayHandle.#instance) {
            GatewayHandle.#instance = new GatewayHandle();
        }
        return GatewayHandle.#instance;
    }

    public async stateManagement(data: { player: string; type: TYPES }) {
        switch (data.type) {
            case "IDENTIFY":
                
                break;

            case "JOIN_LOBBY":
                
                break;

            case "JOIN_QUEUE":
                await this.sendToMatchmaking(data);
                break;

            case "LEAVE":

                break;
        
            default:
                break;
        }
    }

    private async sendToMatchmaking(data: any) {
        await fetch("http://localhost:8000/queue", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        })
    }
}