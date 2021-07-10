const Discord = require('discord.js');
const client = new Discord.Client();
global.client = client;
global.Discord = Discord;
client.login('ODQyMTAxOTUxODU1NzIyNTA3.YJwajg._fDIcm-0QjNF4CqpDeSd3mR0qsA')
const commandHandler = require("./commands");
const { monitor } = require('./messageMonitor');
const firstMessage = require('./first-message')

client.on('ready', () => {
  console.log(`OHacksIO bot online.`); 
  commandHandler.initialize()
  /*firstMessage.rules()
  firstMessage.welcome()*/
})

client.on("message", commandHandler.handle);
client.on("message", msg => {
  monitor(msg);
});