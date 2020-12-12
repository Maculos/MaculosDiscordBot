const Discord = require('discord.js');
const bot = new Discord.Client();
const token = 'TOKEN-HERE';
const infoEmbed = new Discord.MessageEmbed()
.setColor('#ae00ff')
.setTitle('Nikita Bot v2020.0.0.3')
.setURL('https://github.com/Nikita-Khrushchev')
.setDescription('All hail to the Soviet Union!')
.addField('Commands', 'For a list of commands do "n! commands"', true)
.setImage('https://github.com/Nikita-Khrushchev/hostedImages/blob/master/nikita.jpg?raw=true')
.setFooter('Source code to this bot can be found on Github. Do "n! github" or click the link.')
const githubEmbed = new Discord.MessageEmbed()
.setColor('#ae00ff')
.setTitle('Nikita-Khrushchev On Github')
.setURL('https://github.com/Nikita-Khrushchev')
.setImage('https://avatars0.githubusercontent.com/u/63527367?s=460&u=639462cb6081e5b324d04e60f6ecb1d431bb264c&v=4')
const addEmbed = new Discord.MessageEmbed()
.setColor('#ae00ff')
.setTitle('Add Nikita Khrushchev To Your Server!')
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
.setTitle('Release 4 Updates')
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
    bot.user.setActivity('Release 4 Is Out! Do "n! update" for patch notes.');
})
bot.on('message', message=>{
    if(message.content === "n! info"){
message.channel.send(infoEmbed)
    console.log('Info Embed Sent');
    }
    if(message.content === "n! github"){
message.channel.send(githubEmbed)
    console.log('Github Embed Sent');
    }
    if(message.content === "n! add"){
message.channel.send(addEmbed)
    console.log('Add Embed Sent');
    }
    if(message.content === "n! suggest"){
message.channel.send(suggestEmbed)
    console.log('Suggest Embed Sent');
    }
    if(message.content === "n! commands"){
message.channel.send(commandsEmbed)
    console.log('Commands Embed Sent');
    }
    if(message.content === "n! update"){
message.channel.send(updateEmbed)
    console.log('Update Embed Sent');
    }
})
bot.login(token);
