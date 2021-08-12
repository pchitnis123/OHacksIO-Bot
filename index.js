const Discord = require('discord.js');
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION" ]});
global.client = client;
global.Discord = Discord;
client.login('ODQyMTAxOTUxODU1NzIyNTA3.YJwajg.JasBtu3t5zS6oO3cHn8zmJ-HMmA')
const commandHandler = require("./commands");
const { monitor } = require('./messageMonitor');
const firstMessage = require('./first-message')

client.on('ready', () => {
  console.log(`OHacksIO bot online.`); 
  commandHandler.initialize()
  //firstMessage.rules()
  //firstMessage.welcome()
})

client.on("message", commandHandler.handle);

client.on("message", msg => {
  monitor(msg);
});

client.on("message", msg => {
  if(msg.author.bot) return;
  let addrole = msg.guild.roles.cache.find(role => role.id == "857826276751179776")
  let removerole = msg.guild.roles.cache.find(role => role.id == "874839329237762109")
  const person = msg.member
  if(msg.channel.id === '840055971492921355'){
    if(msg.content === 'I accept'){
      person.roles.add(addrole);
      person.roles.remove(removerole)
      msg.delete()
    }
    else {
      msg.delete()
    }
  }
});

client.on('guildMemberAdd', guildMember => {
  let role = guildMember.guild.roles.cache.find(role => role.id === '874839329237762109');
  guildMember.roles.add(role);
});