const express = require('express');
const model = require('../models/map');
const model1 = require('../models/stations');

const app = express(); // you wrote `server()` before; it should be express()
app.use(express.json()); // add this if you're sending JSON in the request body

app.post('/findpath', apicall);

async function apicall(req, res) {
    try {
        const data = req.body;
        const id = "686e256cff923c915c747bd6";

        const mapdata = await model.findOne({ _id: id }).lean(); // ✅ use await
        const stationlist= await model1.find();
        // console.log(stationlist);
        if (!mapdata) {
            return res.status(500).json({ error: "Map data not found" });
        }
        

        let path = dijkstra(data,stationlist,mapdata.distancemap);
        res.json(path); 
    } catch (err) {
        console.error("Error in /findpath:", err);
        res.status(500).json({ error: "Internal server error" });
    }
}

// dijkstra's algorithm


function dijkstra(data, stations, mapp) {
    const patth = [];
    const n = stations.length;
    const distances = Array(n).fill(Infinity);
    const visited = Array(n).fill(false);
    const previous = Array(n).fill(null);

    // Convert station names to indices
    const startIndex = stations.findIndex(s => s.stations === data.source);
    const endIndex = stations.findIndex(s => s.stations === data.destination);


    distances[startIndex] = 0;

    for (let i = 0; i < n; i++) {
        let u = -1;
        for (let j = 0; j < n; j++) {
            if (!visited[j] && (u === -1 || distances[j] < distances[u])) {
                u = j;
            }
        }

        if (u === -1 || distances[u] === Infinity) break; // All reachable nodes have been visited
        visited[u] = true;
        console.log(mapp)
        for (let v = 0; v < n; v++) {
            
            if (mapp[u][v] && !visited[v]) {
                const alt = distances[u] + mapp[u][v];
                if (alt < distances[v]) {
                    distances[v] = alt;
                    previous[v] = u; //to track the previous
                }
            }
        }
    }

    // Backtrack to find the path
    let u = endIndex;
    let path = [];
    while (u !== null) {
        path.push(stations[u]);
        u = previous[u];
    }

    // Reverse to get the path from source to destination
    path.reverse();

    // Fill the patth array
    patth.length = 0; // Clear the array
    for (let station of path) {
        patth.push(station);
    }

    return patth;
}
module.exports = app;