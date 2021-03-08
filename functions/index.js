const functions = require("firebase-functions");
const express = require('express');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

const app = express();
app.get('/timestamp', (request,response) => {
    response.send(`${Date.now()}`);
});


 exports.helloWorld = functions.https.onRequest((request, response) => {
   response.send("Hello from Firebase!");
 });
