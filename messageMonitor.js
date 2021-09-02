const forbiddenWords = ["nigg3r", "nigg4h", "nigga", "niggah", "niggas", "niggaz", "nigger", "niggers"]
//array of bad words taken from https://github.com/MauriceButler/badwords/blob/master/array.js

module.exports = {
    monitor: function (msg) {
        for(var i = 0; i < forbiddenWords.length; i++){
            if(msg.content.toLowerCase().includes(forbiddenWords[i])){
                let user = msg.author
                
                const Embed = new Discord.MessageEmbed()
                    .setColor(0xFF0000)
                    .setTitle('Forbidden Phrase Monitor')
                    .setDescription('Member: ' + user.toString() + 
                    '\n\nWord: "' + forbiddenWords[i] + '" ' +
                    '\n\nPhrase: "' + msg.toString() + '" ' +
                    '\n\nChannel: ' + msg.channel.toString())
                client.channels.cache.find(channel => channel.id === "863215550519574558").send(Embed);

                
                const Embed2 = new Discord.MessageEmbed()
                    .setColor(0xFF0000)
                    .setTitle('Forbidden Phrase Monitor')
                    .setDescription('You have said a forbidden phrase. The organizers have been notified and may reach out to you.')
                    .setFooter("Created by the Tech Team")

                const member = msg.guild.member(user);
                if (!member.dmChannel)
                    member.createDM().then(channel => {
                            channel.send(Embed2).catch(() => console.log('Error sending a warn DM!'))
                    })
                else
                    member.dmChannel.send(Embed2).catch(() => console.log('Error sending a warn DM!'))
                
                msg.delete().catch(error => {
                    if (error.code !== Discord.Constants.APIErrors.UNKNOWN_MESSAGE) {
                        console.error('Failed to delete the message:', error);
                    }
                });
        }
    }
    }
}