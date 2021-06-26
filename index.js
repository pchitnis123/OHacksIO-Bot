const Discord = require('discord.js');
const client = new Discord.Client();
global.client = client;
global.Discord = Discord;
client.login('ODQyMTAxOTUxODU1NzIyNTA3.YJwajg.U_xlbm4YCtxlRoFhk8pID7es3ws');

client.on('ready', checkOn);
function checkOn(){
  console.log(`OHacksIO bot online.`); 
  /*
  const channel01 = client.channels.cache.find(channel => channel.id === "858163151022850049");

    const Embed = new Discord.MessageEmbed()
        .setColor(0xFF0000)
        .setTitle("Welcome to the OHacksIO discord server!")
        .setDescription('OHacksIO is proud to present its first ever virtual hackathon! A Hackathon is a coding competition where competitors use their coding knowledge to accomplish a given task. Our Hackathon will be hosted from September 4th 2021 to September 6th 2021. \n\nThe OHacksIO bot is online and can be used by everyone. To learn about the commands it has, type "!operate" into the bot-commands channel.\n\nIt is vital that you check this server at least twice per day because this is where we will be doing most of the major communication, planning, and organizing.')
    channel01.send(Embed);
    */
    /*
    const channelRules = client.channels.cache.find(channel => channel.id === "840055971492921355");
    const Embed = new Discord.MessageEmbed()
    .setTitle('Rules for the OHacksIO server:')
    .setColor(0xFF0000)
    .setFooter("Created by the Tech Team")
    .setDescription('To join the rest of the server, react to this message by pressing the thumbs up button at the bottom of this message.')
    .addFields({
        name: "Rule 1:",
        value: 'No racism',
        inline: true

    },{
        name: 'Rule 2:',
        value: 'No derogatory comments',
        inline: true
    },{
        name: 'Rule 3',
        value: 'Keep your nickname as your actual name',
        inline: true
    },{
        name: 'Rule 4:',
        value: 'No inappropriate profile pictures',
        inline: true
    },{
        name: 'Rule 5:',
        value: 'Moderators reserve the right to use their own discretion regardless of any rule',
        inline: true
    },{
        name: 'Rule 6:',
        value: 'No bugs, exploits, glitches, hacks, etc.',
        inline: true
    },{
        name: 'Rule 7:',
        value: 'No @everyone/@here mentioning without permission.',
        inline: true
    },)
    channelRules.send(Embed);*/
}


const commandHandler = require("./commands");

client.on("message", commandHandler);