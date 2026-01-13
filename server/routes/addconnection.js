const express = require('express');
const connect = require('../models/connections');
const station = require('../models/stations');
const mp = require('../models/map');

const app = express();

app.post('/addconnection', apicall);

function indexof(a, stationList) {
  for (let i = 0; i < stationList.length; i++) {
    if (a === stationList[i].stations) {
      return i;
    }
  }
}

async function apicall(req, res) {
  const data = req.body;
  try {
    const connection = new connect(data);
    await connection.save();

    const distancemap = await createmap();

    // Get all maps
    const allMaps = await mp.find();

    if (allMaps.length > 0) {
      // If map exists, update the first one (based on 0th index)
      allMaps[0].distancemap = distancemap;
      await allMaps[0].save();
    } else {
      // If no map exists, create a new one
      const newMap = new mp({
        distancemap: distancemap
      });
      await newMap.save();
    }

    res.json("Data saved and map updated successfully.");
  } catch (error) {
    console.error(error);
    res.status(500).json("Error while saving connection or updating map.");
  }
}

async function createmap() {
  let stationsList = [];
  let connectionList = [];
  let matrix = [];

  try {
    stationsList = await station.find();
    const n = stationsList.length;

    for (let i = 0; i < n; i++) {
      matrix.push(new Array(n).fill(0));
    }
  } catch (err) {
    console.error("Error fetching stations:", err);
  }

  try {
    connectionList = await connect.find();
  } catch (err) {
    console.error("Error fetching connections:", err);
  }

  for (let i = 0; i < connectionList.length; i++) {
    const a = connectionList[i].sourcestation;
    const b = connectionList[i].destinationstation;
    const c = connectionList[i].distance;

    const indexA = indexof(a, stationsList);
    const indexB = indexof(b, stationsList);
     if (indexA === undefined || indexB === undefined) {
      console.warn(`Skipping connection: "${a}" to "${b}" — station not found.`);
      continue; // skip this iteration
    }
    matrix[indexA][indexB] = c;
    matrix[indexB][indexA] = c;
  }

//   console.log(matrix);
  return matrix;
}

module.exports = app;
