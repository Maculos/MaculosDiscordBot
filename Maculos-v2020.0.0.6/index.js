const Discord = require('discord.js');
const bot = new Discord.Client();
const token = 'TOKEN-HERE';
const fs = require('fs');
const logfile = "nikita.log"
const moderationlogs = "moderation.log"

//define embeds
const infoEmbed = new Discord.MessageEmbed()
.setColor('#ae00ff')
.setTitle('Maculos Bot v2020.0.0.3')
.setURL('https://github.com/Maculos')
.setDescription('UWU')
.addField('Commands', 'For a list of commands do "n! commands"', true)
.setImage('https://github.com/Maculos/hostedImages/blob/master/nikita.jpg?raw=true')
.setFooter('Source code to this bot can be found on Github. Do "n! github" or click the link.')
const githubEmbed = new Discord.MessageEmbed()
.setColor('#ae00ff')
.setTitle('Maculos On Github')
.setURL('https://github.com/Maculos')
.setImage('https://avatars0.githubusercontent.com/u/63527367?s=460&u=639462cb6081e5b324d04e60f6ecb1d431bb264c&v=4')
const addEmbed = new Discord.MessageEmbed()
.setColor('#ae00ff')
.setTitle('Add Maculos To Your Server!')
.setURL('https://discord.com/oauth2/authorize?client_id=738936373217853450&permissions=0&scope=bot')
const suggestEmbed = new Discord.MessageEmbed()
.setColor('#ae00ff')
.setTitle('Suggest updates for release 5!')
.setURL('https://forms.gle/ZwhCpr79McH6Ryfb6')
const commandsEmbed = new Discord.MessageEmbed()
.setColor('#ae00ff')
.setTitle('Commands')
.setDescription('List of all the commands.')
.addFields(
    { name: 'n! info', value: 'Displays a page about this bot.'},
    { name: 'n! github', value: 'Displays the link to my github page.'},
    { name: 'n! add', value: 'Displays the link to add this bot to your server.'},
    { name: 'n! commands', value: 'Displays the commands list.'},
    { name: 'n! update', value: 'Displays patch notes for the release'},
    { name: 'n! suggest', value: 'Shows the link to suggest new features.'}
)
const updateEmbed = new Discord.MessageEmbed()
.setColor('#ae00ff')
.setTitle('Release 6 Updates')
.setDescription('5 New commands were added this update along with general bug fixes and optimizations.')
.addFields(
    { name: 'n! github', value: 'Displays the link to my github page.'},
    { name: 'n! add', value: 'Displays the link to add this bot to your server.'},
    { name: 'n! commands', value: 'Displays the commands list.'},
    { name: 'n! update', value: 'Displays patch notes for the release'},
    { name: 'n! suggest', value: 'Shows the link to suggest new features.'}
)

bot.on('ready', () =>{
    console.log('This Bot Is Online!');
    bot.user.setActivity("the sweet sound of a server.", { type: "LISTENING"});
})

bot.on('message', message=>{
    switch(message.content) {
    case "n! info":
        message.channel.send(infoEmbed)
        console.log('Info Embed Sent');
        break;
    case "n! github":
        message.channel.send(githubEmbed)
        console.log('Github Embed Sent');
        break;
    case "n! add":
        message.channel.send(addEmbed)
        console.log('Add Embed Sent');
        break;
    case "n! suggest":
        message.channel.send(suggestEmbed)
        console.log('Suggest Embed Sent');
        break;
    case "n! commands":
        message.channel.send(commandsEmbed)
        console.log('Commands Embed Sent');
        break;
    case "n! update":
        message.channel.send(updateEmbed)
        console.log('Update Embed Sent');
        break;
    case "n! write":
        fs.appendFile(logfile, 'UWU', error => { 
            if (error) { 
            console.error(error); return; 
        }})
        break;
    }
})
bot.login(token);
