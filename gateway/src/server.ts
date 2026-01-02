import express from "express";
import http from "http";
import cors from "cors";

import { wss } from "./ws.js";

const app = express();
const server = http.createServer(app);

app.use(express.static("public"));
app.use(cors({ origin: "*" }));

server.listen(3000, () => {
    console.log('Server is running in http://localhost:3000');
});

wss(server);