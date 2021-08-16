const botChannelsIDs = ['842112480665665536', '843300016440999969', '874667083001118770', '874667100730437714']
const botChannels = []

const adminRoleName = 'Organizer'
const prefix = 'o.'
var commandList = []

const maxStrikes = 3
var usersCache = []


const deadline = new Date('6 Sep 2021 8:00:00 AM EDT')
//this function is called once on bot connection to correctly initialize the array
function initialize() {
    botChannelsIDs.forEach(ID => { botChannels.push(client.channels.cache.find(channel => channel.id === ID)) })
}
class Command {
    constructor(name, behaviour, allowDM = false, adminOnly = false) {
        this.name = name
        this.behaviour = behaviour
        this.allowDM = allowDM
        this.adminOnly = adminOnly
    }
    execute(msg, commandParams) {
        if (this.allowDM || msg.guild)
            if (!this.adminOnly || (msg.guild && msg.member.roles.cache.find(role => role.name == adminRoleName)))
                this.behaviour(msg, commandParams)
            else
                msg.reply('This command is for admins only!')
        else
            msg.reply('This command is for server only!')
    }
}

//function to execute when a new message recieved
function handle (msg){
    if (msg.content.startsWith(prefix)) //check if starts with prefix
    {
            const command = msg.content.substring(prefix.length) //remove the prefix
            if (command) //if command is valid (not only prefix)
            {
                const commandComponents = command.split(' ', 1) //split the command into components divided with space
                const commandBody = commandComponents[0] //extract the command body
                
                const executable = commandList.find(com => com.name === commandBody) //find an executable command from the array
                if (executable)
                {
                        if (!msg.guild || botChannels.find(channel => channel === msg.channel)) { //check if in the correct channel
                            msg.react('👌') //ok reaction when command is handled. Quite optional but in my humble oppinion looks kinda cool
                            executable.execute(msg, commandComponents.slice(1)) //execute the command, passing message and command parameters in an array
                        }
                        else {
                            const Embed = new Discord.MessageEmbed()
                            .setTitle('Not the correct channel. Please try again in the correct channel.')
                            .setColor(0xFF0000)
                            //.setFooter("Created by the Tech Team") //I don't think we really need to write credits under an error message
                            msg.channel.send(Embed)
                        }
                }
                else
                    msg.reply('Command ' + commandBody + ' is not valid!') //non-valid command error message
                }
            else
                msg.reply('Please enter a valid command') //empty command error message
    }
}

module.exports = {initialize, handle}

//Adding commands
//I did not change the methods themselves, but as you can see, now to create a command you only need to push a new Command object into an array
//Also, in addition to msg parameter, these function also recieve an array of commend params. For example, 'o.question how do I init a repository?' will provide this array: ['how', 'do', 'I', 'init', 'a', 'repository?'] or 'o.setTimer 2' will provide ['2']
//Third and forth parameters are booleans representing whether the command is allowed for DMs and if it is for admins only. Optional
commandList.push(new Command('help', msg => {
    const Embed = new Discord.MessageEmbed()
        .setTitle('Comamnds for the OHacksIO bot:')
        .setColor(0xFF0000)
        .setFooter("Created by the Tech Team")
        .addFields({
            name: 'o.rules',
            value: 'See the list of rules that you must follow in this server.',
            inline: true
        },{
            name: 'o.faq',
            value: 'See our frequently answered questions list.',
            inline: true

        },{
            name: 'o.assist',
            value: 'Send a message to our organizers and team saying you need assistance. They will get back to you ASAP.',
            inline: true
        },{
            name: 'o.mywarnings',
            value: 'Display the amount of warnings (strikes) you\'ve got for breaking the rules.',
            inline: true
        },{
            name: 'o.timeleft',
            value: 'Displays the amount of time due the deadline',
            inline: true
        })
    msg.channel.send(Embed);
}, allowDM=true))

commandList.push(new Command('rules', msg => {
        const Embed = new Discord.MessageEmbed()
            .setTitle('Rules for the OHacksIO discord server:')
            .setColor(0xFF0000)
            .setFooter("Created by the Tech Team")
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
                value: 'Keep your nickname as your actual name',
                inline: true
            },{
                name: 'Rule 4:',
                value: 'No inappropriate profile pictures',
                inline: true
            },{
                name: 'Rule 5:',
                value: 'No bugs, exploits, glitches, hacks, etc.',
                inline: true
            },{
                name: 'Rule 6:',
                value: 'Do not ask a question to an organizer without having a specific question in mind [See here](https://dontasktoask.com)',
                inline: true
            },
            {
                name: 'Rule 7:',
                value: 'No @everyone/@here mentioning without permission',
                inline: true
            },{
                name: 'Rule 8:',
                value: 'The Major League Hacking [code of conduct](http://mlh.io/code-of-conduct) must always be followed',
                inline: true
            },{
                name: 'Rule 9:',
                value: 'Moderators reserve the right to use their own discretion to ban anyone from this hackathon, regardless of any rule',
                inline: true
            })
        msg.channel.send(Embed);
}, allowDM=true))

commandList.push(new Command('faq', msg => {
    const Embed = new Discord.MessageEmbed()
        .setColor(0xFF0000)
        .setTitle("Frequently Asked Questions:")
        .setFooter('Created by the Tech Team')
        .setDescription("Please do not hesitate to contact an organizer if your question is not here.")
        .addFields({
            name: "Who Can Join This Event?",
            value: "Anyone in Highschool and Middle school!! whether you are a beginner or have experience, there will be prizes for all! The hackathon will have two sections: One for beginners and one for everyone else.",
            inline: true
        },{
            name: "Can I Work by Myself?",
            value: "Absolutely! While we recommend that you find a team if you want one, it is possible to work by yourself",
            inline: true
        },{
            name: "What if I can't code?",
            value: "No coding experience is required for the hackathon! There will be workshops where you can learn and grow as a programmer!",
            inline: true
        },{
            name: 'Does this cost money?',
            value: "Not at all! OHacks.IO is completely free! Everything from shipping to swag is all covered!",
            inline: true
        },{
            name: 'Will this be online?',
            value: 'Yes! We want everyone in the world to enjoy our hackathon! Hence we have made it online for the time being.',
            inline: true
        },{
            name: 'How do I form a team?',
            value: 'At the beginning of the hackathon there will be a session where you can meet new people! We encourage you to do so. Keep in mind, teams can only consist of four people at most.',
            inline: true
        },{
            name: 'When is the competition?',
            value: 'The competition will begin on 9/4/2021 and end on 9/6/2021.',
            inline: true
        },{
            name: 'How do I sign up?',
            value: 'Go to the "Sign up" section on our website, There you will have to fill out a quick form. you will also be required to join the discord after you sign up, as that is where the important announcements regarding the competition will be posted.',
            inline: true
        }, {
            name: "Why Join?",
            value: "We are planning on holding multiple mini-games, as well as having workshops from our sponsors! Top placers in the Hackathon will be receiving prizes, and will be featured on this website! This is also an excellent opportunity to learn and show what you know about everything computer science related.",
            inline: true
        })
    msg.channel.send(Embed);
}, allowDM=true))

commandList.push(new Command('assist', msg => {
    let user = msg.author
    const channel01 = client.channels.cache.find(channel => channel.id === "857856329670328370");

    const Embed = new Discord.MessageEmbed()
        .setColor(0xFF0000)
        .setTitle(user.username + ' needs assistance!')
        .setDescription(user.toString() + ((msg.guild)? (' has requested assistance from the chat ' + msg.channel.toString()):' has requested assistance in the DM'))
        .setURL(msg.url)
    channel01.send(Embed);

    const Embed2 = new Discord.MessageEmbed()
        .setColor(0xFF0000)
        .setDescription(user.toString() + ", your message has been sent to the Organizers.\nThey will take note and get back to you as soon as possible.")
    msg.channel.send(Embed2);
}, allowDM=true))

commandList.push(new Command('timeleft', msg => {
    const timeLeft = deadline - Date.now()
    const days = Math.floor(timeLeft / (24*3600000))
    const hours = Math.floor(timeLeft % (24*3600000) / 3600000)
    const minutes = Math.floor(timeLeft % (3600000) / 60000)
    let message = 'You have ' + days + ' day(s), ' + hours + ' hour(s) and ' + minutes + ' minute(s) left'
    if (!days && !hours)
        message = 'You have ' + minutes + ' minute(s) left'
    else if (!days)
        message = 'You have ' + hours + ' hour(s) and ' + minutes + ' minute(s) left'

    const embed = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTitle(message)
    msg.reply(embed)
}, allowDM=true))



commandList.push(new Command('warn', msg => {
    const user = msg.mentions.users.first()
    if (user && !user.bot) {
        const member = msg.guild.member(user);
            if (member) {
                const memberIndexInUsersCache = usersCache.indexOf(member)
                
                let message
                
                if (memberIndexInUsersCache >= 0)
                {
                    usersCache[memberIndexInUsersCache].strikes++
                    if (usersCache[memberIndexInUsersCache].strikes >= maxStrikes)
                    {
                        message = member.toString() + ', you have ' + usersCache[memberIndexInUsersCache].strikes + ' strikes! You will be banned from the server and disqualified from the event.'
                        usersCache[memberIndexInUsersCache].isBanned = true
                        member.kick('You were kicked because you\'ve reached ' + maxStrikes + 'strikes')
                    }
                    else
                    {
                        message = member.toString() + ', you have ' + usersCache[memberIndexInUsersCache].strikes + ' strikes! You will be banned from the server and disqualified from the event when you get ' + (maxStrikes - usersCache[memberIndexInUsersCache].strikes) + ' more strike(s) and reach ' + maxStrikes + ' strikes.'
                    }
                }
                else {
                    member.strikes = 1
                    usersCache.push(member)
                    message = member.toString() + ', you have 1 strike! You will be banned from the server and disqualified from the event when you reach ' + maxStrikes + ' strikes.'
                }
            
               
                msg.channel.send(message)


                if (!member.dmChannel)
                    member.createDM().then(channel => {
                            channel.send(message).catch(() => console.log('Error sending a warn DM!'))
                    })
                else
                    member.dmChannel.send(message).catch(() => console.log('Error sending a warn DM!'))
            }
            else
                msg.reply('User ' + user + ' not found on this server!')
    }
    else
        msg.reply('Please specify a valid user you want to warn')
}, allowDM=false, adminOnly=true))

commandList.push(new Command('removewarning', msg => {
    const user = msg.mentions.users.first()

    if(user && !user.bot){
        const member = msg.guild.member(user)
            if(member){
                const memberIndexInUsersCache = usersCache.indexOf(member)

                let message

                if (memberIndexInUsersCache >= 0)
                {
                    if (usersCache[memberIndexInUsersCache].strikes > 0)
                    {
                        member.strikes = member.strikes - 1
                        message = member.toString() + ', you now have ' + usersCache[memberIndexInUsersCache].strikes + ' strike(s)! You will be banned from the server and disqualified from the event when you get ' + (maxStrikes - usersCache[memberIndexInUsersCache].strikes) + ' more strike(s) and reach ' + maxStrikes + ' strikes.'
                    }
                    else
                    {
                        message = member.toString() + ' you have no strikes. Strike unable to be removed.'
                    }
                }
                else {
                    message = member.toString() + ' you have no strikes. Strike unable to be removed.'
                }

                msg.channel.send(message)

                if (!member.dmChannel)
                    member.createDM().then(channel => {
                    channel.send(message).catch(() => console.log('Error sending a warn DM!'))
                })
                else
                    member.dmChannel.send(message).catch(() => console.log('Error sending a warn DM!'))
            }
            else
                msg.reply('User ' + user + ' not found on this server!')
    }
    else msg.reply('Please specify a valid user you want to warn')
    
}, allowDM=false, adminOnly=true))

commandList.push(new Command('mywarnings', msg => {
    member = usersCache.find(mem => mem.user.id === msg.author.id)
    if (!member || !member.strikes || member.strikes <= 0)
        msg.reply('you don\'t have any warnings. That\'s awesome, keep it up!')
    else if (member.isBanned)
        msg.reply('you have been banned from the event.')
    else
        msg.reply('you have ' + member.strikes + ' strike(s). ' + (maxStrikes - member.strikes) + ' more and you will be banned')
}, allowDM=true))