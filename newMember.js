module.exports = {
    addRole: function(guildMember) {
        let role = guildMember.guild.roles.cache.find(role => role.id === '874839329237762109');
        guildMember.roles.add(role);
        const Embed = new Discord.MessageEmbed()
                .setTitle('Welcome to the OHacksIO discord server!')
                .setDescription('In case you haven\'t read the welcome message, please do so now in the <#858163151022850049> channel!' +
                '\n\nIn order to join the rest of the server, please read the rules listed in the <#840055971492921355> channel and follow the directions given.' +
                '\n\nWe look forward to having a great hackathon with you! Best of luck!')
            if (!guildMember.dmChannel)
                guildMember.createDM().then(channel => {
                channel.send(Embed).catch(() => console.log('Error sending a welcome DM!'))
            })
            
            else {
                guildMember.dmChannel.send(Embed).catch(() => console.log('Error sending a welcome DM!'))
            }
    },

    setCompetitor: function(msg) {
        if(msg.author.bot) return;

        let addrole = msg.guild.roles.cache.find(role => role.id == "857826276751179776")
        let removerole = msg.guild.roles.cache.find(role => role.id == "874839329237762109")

        const person = msg.member

        if(msg.content === 'I accept'){
            person.roles.add(addrole);
            person.roles.remove(removerole)
            
            msg.delete().catch(error => {
                if (error.code !== Discord.Constants.APIErrors.UNKNOWN_MESSAGE) {
                    console.error('Failed to delete the message:', error);
                }
            });
        }

        else {
            msg.delete().catch(error => {
                if (error.code !== Discord.Constants.APIErrors.UNKNOWN_MESSAGE) {
                    console.error('Failed to delete the message:', error);
                }
            });
        }
    }
}
