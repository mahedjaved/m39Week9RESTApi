// run the connection file as soon as the app starts
require("./db/connection");

const express = require("express");

// create the web server
const app = express();

// ================================================================ //
// CRUDS and GPPDs must be performed before listening
// ================================================================ //

// ================================================================ //
// Listening to the API
// ================================================================ //
// make the server listen to a port
app.listen(5001, () => {
    console.log("[Info] Listeninng on port 5001");
});
