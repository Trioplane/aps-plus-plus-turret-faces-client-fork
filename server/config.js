module.exports = {
    // Server
    host: "localhost:3000",
    servesStatic: true,
    port: 3000,
    networkUpdateFactor: 24,
    socketWarningLimit: 5,
    networkFrontlog: 1,
    networkFallbackTime: 150,
    visibleListInterval: 250,
    gameSpeed: 3,
    runSpeed: 1.5,
    maxHeartbeatInterval: 300000,
    verbose: true,
    flattenDefintions: false,

    // Room
    WIDTH: 6500,
    HEIGHT: 6500,
    ARENA_TYPE: "rect",
    ROOM_SETUP: [
        [ "norm", "norm", "norm", "norm", "norm", "norm", "roid", "roid", "roid", "norm", "norm", "norm", "norm", "norm", "norm" ],
        [ "norm", "norm", "norm", "norm", "norm", "norm", "norm", "roid", "norm", "norm", "norm", "norm", "norm", "norm", "norm" ],
        [ "norm", "norm", "rock", "rock", "norm", "norm", "norm", "norm", "norm", "rock", "norm", "rock", "rock", "norm", "norm" ],
        [ "norm", "norm", "rock", "rock", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "rock", "rock", "norm", "norm" ],
        [ "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm" ],
        [ "norm", "norm", "norm", "norm", "norm", "nest", "nest", "nest", "nest", "nest", "norm", "norm", "norm", "norm", "norm" ],
        [ "roid", "norm", "norm", "norm", "norm", "nest", "nest", "nest", "nest", "nest", "norm", "norm", "norm", "norm", "roid" ],
        [ "roid", "roid", "norm", "norm", "norm", "nest", "nest", "nest", "nest", "nest", "norm", "norm", "norm", "roid", "roid" ],
        [ "roid", "norm", "norm", "norm", "norm", "nest", "nest", "nest", "nest", "nest", "norm", "norm", "norm", "norm", "roid" ],
        [ "norm", "norm", "norm", "norm", "norm", "nest", "nest", "nest", "nest", "nest", "norm", "norm", "norm", "norm", "norm" ],
        [ "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm" ],
        [ "norm", "norm", "rock", "rock", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "rock", "rock", "norm", "norm" ],
        [ "norm", "norm", "rock", "rock", "norm", "norm", "norm", "norm", "norm", "rock", "norm", "rock", "rock", "norm", "norm" ],
        [ "norm", "norm", "norm", "norm", "norm", "norm", "norm", "roid", "norm", "norm", "norm", "norm", "norm", "norm", "norm" ],
        [ "norm", "norm", "norm", "norm", "norm", "norm", "roid", "roid", "roid", "norm", "norm", "norm", "norm", "norm", "norm" ]
    ],
    X_GRID: 15,
    Y_GRID: 15,

    DAMAGE_CONSTANT: 0.5,
    KNOCKBACK_CONSTANT: 1.5,
    GLASS_HEALTH_FACTOR: 2,
    ROOM_BOUND_FORCE: 0.01,
    GLASS_HEALTH_FACTOR: 2,
    LEVEL_SKILL_POINT_FUNCTION: level => {
        if (level < 2) return 0;
        if (level <= 40) return 1;
        if (level <= 45 && level & 1 == 1) return 1;
        return 0;
    },
    MAX_SKILL: 9,
    SOFT_MAX_SKILL: 0.59,
    MAX_UPGRADE_TIER: 9,
    TIER_MULTIPLIER: 15,
    SKILL_CAP: 45,
    SKILL_SOFT_CAP: 0,
    SKILL_CHEAT_CAP: 45,
    SKILL_LEAK: 0,
    STEALTH: 4, // This does nothing. TODO: Find original purpose
    MIN_SPEED: 0.001,
    SKILL_BOOST: 5,
    BOTS: 24,

    // Food
    FOOD: [0, 0.75, 0.22, 0.1, 0.005, 0, 0],
    FOOD_NEST: [0, 0.0, 0.0, 0.75, 0.23, 0.02, 0],
    SHINY_SCALE: 0,
    FOOD_AMOUNT: 100,
    NEST_FOOD_AMOUNT: 1.5,
    CRASHER_RATIO: 2,

    // Gamemode related
    TEAMS: 4,
    RANDOM_COLORS: false,
    SPECIAL_BOSS_SPAWNS: false,
    MOTHERSHIP_LOOP: false,
    SPACE_PHYSICS: false,
    SPACE_MODE: false,
    MAZE: false,
    TRAIN: false,
    HUNT: false,
    DOMINATOR_LOOP: false,
    GROUPS: false,
    TAG: false,
    secondaryGameMode: "z",
    MODE: "ffa",

    // Miscellaneous
    BANNED_CHARACTER_REGEX: "/[\uFDFD\u200E\u0000]/gi",
    DEFAULT_FILE: 'index.html',
    WELCOME_MESSAGE: "You have spawned! Welcome to the game.\n"
                    +"You will be invulnerable until you move or shoot.\n"
                    +"This is a beta release. Please join the official discord server to report any bugs you encounter!"
}
