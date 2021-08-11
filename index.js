const Discord = require('discord.js');
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION" ]});
global.client = client;
global.Discord = Discord;
client.login('ODQyMTAxOTUxODU1NzIyNTA3.YJwajg.tJBuSNENbMx0Z7GhYovvZXR7utQ')
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
  let role = msg.guild.roles.cache.find(role => role.id == "857826276751179776")
  const person = msg.member
  if(msg.channel.id === '840055971492921355'){
    if(msg.content === 'I accept'){
      person.roles.add(role);
      msg.delete()
    }
    else {
      msg.delete()
    }
  }
});



/*client.on('guildMemberAdd', guildMember => {
  let role = guildMember.guild.roles.cache.find(role => role.id === '857826276751179776');
  guildMember.roles.add(role);
});*/