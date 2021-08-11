module.exports = {
   rules: function() {
        const channelRules = client.channels.cache.find(channel => channel.id === "840055971492921355");
        const Embed = new Discord.MessageEmbed()
            .setTitle('Rules for the OHacksIO discord server:')
            .setColor(0xFF0000)
            .setFooter("Created by the Tech Team")
            .setDescription('To join the rest of the server, type "I accept" in this channel.\n\nBy typing "I accept", you consent to the following rules and agree that a violation of one of these rules could mean being banned from the hackathon.\n')
            .addFields({
                name: "Rule 1:",
                value: 'No racism',
                inline: true

            },{
                name: 'Rule 2:',
                value: 'No derogatory comments or profanity',
                inline: true
            },{
                name: 'Rule 3:',
                value: 'Failure to follow Rules 1 and 2 will automatically prompt the bot to send alerts to the organizers. There may be consequences.',
                inline: true
            },{
                name: 'Rule 4:',
                value: 'Keep your nickname as your actual name',
                inline: true
            },{
                name: 'Rule 5:',
                value: 'No inappropriate profile pictures',
                inline: true
            },{
                name: 'Rule 6:',
                value: 'Moderators reserve the right to use their own discretion regardless of any rule',
                inline: true
            },{
                name: 'Rule 7:',
                value: 'No bugs, exploits, glitches, hacks, etc.',
                inline: true
            },{
                name: 'Rule 8:',
                value: 'Do not ask a question to an organizer without having a specific question in mind. [See here](https://dontasktoask.com)',
                inline: true
            },
            {
                name: 'Rule 9:',
                value: 'No @everyone/@here mentioning without permission.',
                inline: true
            },)
        channelRules.send(Embed);
   },

   welcome: function(){
        const channel01 = client.channels.cache.find(channel => channel.id === "858163151022850049");

        const Embed = new Discord.MessageEmbed()
            .setColor(0xFF0000)
            .setTitle("Welcome to the OHacksIO discord server!")
            .setDescription('OHacksIO is proud to present its first ever virtual hackathon! A Hackathon is a coding competition where competitors use their coding knowledge to accomplish a given task. Our Hackathon will be hosted from September 4th 2021 to September 6th 2021. \n\nThe OHacksIO bot is online and can be used by everyone. To learn about the commands it has, type "o.help" into the bot-commands channel.\n\nIt is vital that you check this server at least twice per day because this is where we will be doing most of the major communication, planning, and organizing.')
        channel01.send(Embed);
   }
}