import { WebSocketServer  } from "ws";

function onError(ws: any, err: any) {
    console.error(`onError: ${err.message}`);
}

function onMessage(ws: any, data: any) {
    console.log(`onMessage: ${data}`);
    ws.send("received!");
}

function onConnection(ws: any, req: any) {
    ws.on("message", (data: any) => onMessage(ws, data));
    ws.on("error", (error: any) => onError(ws, error));
    console.log("onConnection");
}

export function wss(server: any) {
    const wss = new WebSocketServer({ server });

    wss.on("connection", onConnection);

    console.log("Websocket Server is running!");
    return wss;
}