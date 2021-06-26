const Discord = require('discord.js');
const client = new Discord.Client();
global.client = client;
global.Discord = Discord;
client.login('ODQyMTAxOTUxODU1NzIyNTA3.YJwajg.dyW1V81hv46AU9CJLoLZsaXYF5k')
const commandHandler = require("./commands");

client.on('ready', () => {
  console.log(`OHacksIO bot online.`); 
  commandHandler.initialize()
})

client.on("message", commandHandler.handle);