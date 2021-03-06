const { Player } = require('discord-player');
const { Client, Intents } = require('discord.js');

global.client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_VOICE_STATES
    ],
    disableMentions: 'everyone',
});

client.config = require('./config');
console.log('Client ready!');
global.player = new Player(client, client.config.opt.discordPlayer);

require('./src/loader');
require('./src/events');
console.log(process.env);
// client.login(client.config.app.token);
client.login(process.env.TOKEN);