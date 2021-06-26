module.exports = function (msg){
    const botCommands = client.channels.cache.find(channel => channel.id === "842112480665665536");
    const botTest = client.channels.cache.find(channel => channel.id === "843300016440999969");

    const arrayCommands = ['!operate', '!rules', '!faq', '!assist']

    if(msg.channel === botCommands || msg.channel === botTest) {
        if(msg.content === arrayCommands[0]){
            operate(msg);
        }
        if(msg.content === arrayCommands[1]){
            rules(msg);
        }
        if(msg.content === arrayCommands[2]){
            faq(msg);
        }
        if(msg.content.startsWith(arrayCommands[3])){
            assist(msg);
        }
    } 
    else if(msg.content === arrayCommands[0] || msg.content === arrayCommands[1] || msg.content === arrayCommands[2] || msg.content.startsWith(arrayCommands[3])){
        const Embed = new Discord.MessageEmbed()
        .setTitle('Not the correct channel. Please try again in the correct channel.')
        .setColor(0xFF0000)
        .setFooter("Created by the Tech Team")
        msg.channel.send(Embed)
    }
}

function operate (msg){
    const Embed = new Discord.MessageEmbed()
        .setTitle('Comamnds for the OHacksIO bot:')
        .setColor(0xFF0000)
        .setFooter("Created by the Tech Team")
        .addFields({
            name: '!rules',
            value: 'See the list of rules that you must follow in this server',
            inline: true
        },{
            name: '!faq',
            value: 'See our frequently answered questions list.',
            inline: true

        },{
            name: '!assist',
            value: 'Send a message to our organizers saying you need assistance. They will get back to you ASAP',
            inline: true
        })
    msg.channel.send(Embed);
}

function rules (msg){
    const Embed = new Discord.MessageEmbed()
    .setTitle('Rules for the OHacksIO server:')
    .setColor(0xFF0000)
    .setFooter("Created by the Tech Team")
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
    })
    msg.channel.send(Embed);
}

function faq(msg) {
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
}

function assist(msg){
    //let message = msg.content.replace('!assist', '');
    let user = msg.member.user.tag;
    user = user.toString();
    const channel01 = client.channels.cache.find(channel => channel.id === "857856329670328370");

    const Embed = new Discord.MessageEmbed()
        .setColor(0xFF0000)
        .setTitle(user)
        .setDescription("Has Requested Assistance.")
    channel01.send(Embed);

    const Embed2 = new Discord.MessageEmbed()
        .setColor(0xFF0000)
        .setDescription("Your message has been sent to the Organizers.\nThey will take note and get back to you as soon as possible.")
    msg.channel.send(Embed2);
}