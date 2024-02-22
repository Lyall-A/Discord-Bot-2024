const fs = require("fs");
const path = require("path");
config = require("./config");
secret = JSON.parse(fs.readFileSync("./.secret", "utf-8"));

// Load utils
fs.readdirSync("./utils").forEach(utilFile => global[path.basename(utilFile, path.extname(utilFile))] = require(`./utils/${utilFile}`));

// Start delay
if (config.startDelay)
    wait(config.startDelay)
        .then(() => start());
else start();

// Start
function start() {
    log("piss")
}