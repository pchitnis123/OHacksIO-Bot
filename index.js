const Discord = require('discord.js');
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION" ]});
global.client = client;
global.Discord = Discord;
client.login('ODQyMTAxOTUxODU1NzIyNTA3.YJwajg.mB5T4Wsy6cXeKfwzv2XkZkHgznU')
const commandHandler = require("./commands");
const { monitor } = require('./messageMonitor');
const firstMessage = require('./first-message')

client.on('ready', () => {
  console.log(`OHacksIO bot online.`); 
  commandHandler.initialize()
  firstMessage.rules()
  firstMessage.welcome()
})

client.on("message", commandHandler.handle);

client.on('guildMemberAdd', guildMember => {
  let role = guildMember.guild.roles.cache.find(role => role.id === '857826276751179776');
  guildMember.roles.add(role);
});

client.on("message", msg => {
  monitor(msg);
});