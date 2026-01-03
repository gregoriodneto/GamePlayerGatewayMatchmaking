import { WebSocketServer  } from "ws";
import { GatewayHandle } from "./gateway-handle.js";

function onError(ws: any, gt: GatewayHandle, err: any) {
    console.error(`onError: ${err.message}`);
}

function onMessage(ws: any, gt: GatewayHandle, data: any) {
    console.log(`onMessage: ${data}`);
    gt.stateManagement(data);
    ws.send("received!");
}

function onConnection(ws: any, req: any) {
    const gt = GatewayHandle.instance;
    ws.on("message", (data: any) => onMessage(ws, gt, data));
    ws.on("error", (error: any) => onError(ws, gt, error));
    console.log("onConnection");
}

export function wss(server: any) {
    const wss = new WebSocketServer({ server });

    wss.on("connection", onConnection);

    console.log("Websocket Server is running!");
    return wss;
}