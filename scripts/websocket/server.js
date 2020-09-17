//NodeJs script to start a JSON driven WebSocket
//Author: Felipe Belsholff
//Node v14

const WebSocket = require('ws'); //npm i ws

const data = {};
const gpsWs = new WebSocket.Server({
    port: 8081,
    maxPayload: 96, //bytes
    verifyClient: (info) => { //this method is obsolete but useful when we are handle with sync verifications
        //checking stuff
        return true; //bypassing by default. Check credentials and return true or false
    }
});
gpsWs.on('connection', (ws) => {
    //auth

    //ping responses - heartbeat
    ws.isAlive = true;
    ws.on('pong', () => {
        ws.isAlive = true;
    });

    //here are procedures with received message
    ws.on('message', (message) => {
        let jsonMsg = JSON.parse(message);
        //data manipulation
    });
    //here is successful connection message
    ws.send('Connected to Websocket.');
});

//ping - heartbeat
const interval = setInterval(() => {
    gpsWs.clients.forEach((ws) => {
        if (ws.isAlive === false) return ws.terminate();

        ws.isAlive = false;
        ws.ping(() => {});
    });
}, 15000); //ms

//broadcast data to active users if needed
setInterval(() => {
    gpsWs.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) client.send(JSON.stringify(data));
    });
}, 5000); //ms

//closing connections
gpsWs.on('close', (ws) => {
    ws.send("Disconnected WebSocket.");
    clearInterval(interval);
});

//error treatment
gpsWs.on('error', (err) => {
    console.error(err);
});

// exporting ws singleton and some data if needed
module.exports = {
    module: gpsWs,
    wsData: data,
};
