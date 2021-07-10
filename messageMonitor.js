const forbiddenWords = ['fuck'];

module.exports = {
    monitor: function (msg) {
        for(var i = 0; i < forbiddenWords.length; i++){
            if(msg.content.includes(forbiddenWords[i])){
                let user = msg.author
                
                const Embed = new Discord.MessageEmbed()
                    .setColor(0xFF0000)
                    .setTitle('Derogatory Phrase Monitor')
                    .setDescription(user.toString() + ' has said the word "' + forbiddenWords[i] + '" in the chat ' + msg.channel.toString())
                client.channels.cache.find(channel => channel.id === "863215550519574558").send(Embed);

                
                const Embed2 = new Discord.MessageEmbed()
                    .setColor(0xFF0000)
                    .setTitle('Derogatory Phrase Monitor')
                    .setDescription('You have said a derogatory phrase. The organizers have been notified and may reach out to you.')
                
                user.send(Embed2)
                msg.delete();
            }
        }
    }
}