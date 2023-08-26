// Global Utilities Requires
let EventEmitter = require('events');
global.events = new EventEmitter();
global.c = require("./setup/config.js").output;
global.c.port = process.env.PORT || c.port;
global.ran = require(".././lib/random.js");
global.util = require(".././lib/util.js");
global.hshg = require(".././lib/hshg.js");
global.protocol = require(".././lib/fasttalk.js");

// Global Variables (These must come before we import from the modules folder.)
global.roomSpeed = c.gameSpeed;
global.fps = "Unknown";
global.minimap = [];
global.entities = [];
global.views = [];
global.entitiesToAvoid = [];
global.grid = new hshg.HSHG();
global.arenaClosed = false;
global.mockupsLoaded = false;
global.getWeakestTeam = (type = 0) => { // 0 - Bots only, 1 - Players only, 2 - all
    let teamcounts = {};
    for (let i = 0; i < c.TEAMS; i++) {
        teamcounts[i + 1] = 0;
    }
    if (type !== 1) {
        for (let o of entities) {
            if (o.isBot && -o.team > 0 && -o.team <= c.TEAMS) {
                teamcounts[-o.team]++;
            }
        }
    }
    if (type !== 0) {
        for (let { socket } of sockets.players) {
            if (socket.rememberedTeam > 0 && socket.rememberedTeam <= c.TEAMS) {
                teamcounts[socket.rememberedTeam]++;
            }
        }
    }
    const entries = Object.entries(teamcounts);
    return entries.length === 0 ? Math.ceil(Math.random() * c.TEAMS) : entries.reduce((a, b) => Math.min(a[1], b[1]), Infinity)[0];
};

global.getTeamName = team => ["BLUE", "GREEN", "RED", "PURPLE", "YELLOW", "ORANGE", "BROWN", "CYAN"][-team - 1] || "An unknown team";
global.getTeamColor = team => [10, 11, 12, 15, 25, 26, 27, 28][-team - 1] || 3;
global.isPlayerTeam = team => team < 0 && team > -9;

// Now that we've set up the global variables, we import all the modules, then put them into global varialbles and then export something just so this file is run.
const requires = [
    "./setup/room.js", // These are the basic room functions, set up by config.json
    "./physics/relative.js", // Some basic physics functions that are used across the game.
    "./network/sockets.js", // The networking that helps players interact with the game.
    "./network/webServer.js", // The networking that actually hosts the server.
    "./live/entitySubFunctions.js", // Skill, HealthType and other functions related to entities are here.
    "./live/controllers.js", // The AI of the game.
    "./live/entity.js", // The actual Entity constructor.
    "./setup/mockups.js", // This file loads the mockups.
    "./physics/collisionFunctions.js", // The actual collision functions that make the game work.
    "./debug/logs.js", // The logging pattern for the game. Useful for pinpointing lag.
    "./debug/speedLoop.js", // The speed check loop lmao.
    "./gamemodes/bossRush.js", // Boss Rush
    "./gamemodes/maze.js", // Maze
    "./gamemodes/mothership.js", // The mothership mode
    "./gamemodes/domination.js", // The Domination mode
    "./gamemodes/manhunt.js", // The Manhunt mode
    "./gamemodes/trainwars.js", // The Train Wars mode
    "./gamemodes/moon.js", // The Space mode
    "./gamemodes/gamemodeLoop.js", // The gamemode loop.
    "./gamemodes/groups.js", // Duos/Trios/Squads
    "./gamemodes/tag.js", // Tag
    "./gamemodes/closeArena.js", // Arena Closing mechanics
];

for (let file of requires) {
    const module = require(file);
    if (module.init) module.init(global);
    for (let key in module) {
        if (module.hasOwnProperty(key)) global[key] = module[key];
    }
}

module.exports = { creationDate: new Date() };