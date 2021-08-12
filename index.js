const Discord = require('discord.js');
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION" ]});
global.client = client;
global.Discord = Discord;
client.login('ODQyMTAxOTUxODU1NzIyNTA3.YJwajg.JasBtu3t5zS6oO3cHn8zmJ-HMmA')
const { addRole, setCompetitor } = require('./newMember')
const commandHandler = require("./commands");
const { monitor } = require('./messageMonitor');
const firstMessage = require('./first-message')

client.on('ready', () => {
  console.log(`OHacksIO bot online.`); 
  commandHandler.initialize()
  //firstMessage.rules()
  //firstMessage.welcome()
})

client.on('guildMemberAdd', guildMember => {
  addRole(guildMember)
});

client.on("message", commandHandler.handle);

client.on("message", msg => {
  monitor(msg);
  if(msg.channel.id === '875210238050066452') {
    setCompetitor(msg)
  }
});

