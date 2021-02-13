const Discord = require('discord.js');
const bot = new Discord.Client();
const token = '[Insert your token here]';//You must replace the placeholder with your token in order for the bot to function.
const prompt require('prompt-sync')();


bot.on('ready', () =>{
    console.log('This Bot Is Online!');
    bot.user.setActivity('Release 4 Is Out! Do "n! update" for patch notes.');
})
bot.on('message', msg=>{
    if(msg.content === "n! test"){
        message.channel.send('NOBODY CAN STOP ME FOOLS!');
        console.log('Test Message Sent');
    }
})
bot.on('message', msg=>{
    if(msg.content === "n! rickroll"){
        message.channel.send('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
        console.log('Rickroll Message Sent');
    }
})
bot.on('message', message=>{
    if(message.content === "n! info"){
const infoEmbed = new Discord.MessageEmbed()
.setColor('#ae00ff')
.setTitle('Maculos Bot v2020.0.0.3')
.setURL('https://github.com/Maculos')
.setDescription('UWU')
.addField('Commands', 'For a list of commands do "n! commands"', true)
.setImage('https://github.com/Maculos/hostedImages/blob/master/nikita.jpg?raw=true')
.setFooter('Source code to this bot can be found on Github. Do "n! github" or click the link.')
message.channel.send(infoEmbed)
    console.log('Info Embed Sent');
    }
})
bot.on('message', message=>{
    if(message.content === "n! hugs"){
const hugsEmbed = new Discord.MessageEmbed()
.setColor('#ae00ff')
.setTitle('Hugs!')
.setImage('https://media.discordyui.net/reactions/hug/2qlVdBY.gif')
message.channel.send(hugsEmbed)
    console.log('Hugs Embed Sent');
    }
})
bot.on('message', message=>{
    if(message.content === "n! gaga"){
const gagaEmbed = new Discord.MessageEmbed()
.setColor('#ae00ff')
.setTitle('Buy Chromatica By Lady Gaga On Amazon Music!')
.setURL('https://www.amazon.com/Chromatica-Lady-Gaga/dp/B0857BHKPW')
.setImage('https://images-na.ssl-images-amazon.com/images/I/81Tijq9CbAL._SL1500_.jpg')
message.channel.send(gagaEmbed)
    console.log('Gaga Embed Sent');
    }
})
bot.on('message', message=>{
    if(message.content === "n! prompt"){
const promptEmbed = new Discord.MessageEmbed()
.setColor('#ae00ff')
.setTitle('Sent Prompt To Console.')
message.channel.send(promptEmbed)
    console.log('Prompt Embed Sent');
    }
    if(message.content === "n! prompt"){
    const prompt = require('prompt-sync')();

    const messageOut = prompt('Say Something: ');
  console.log('Message Received');
  console.log(messageOut);
  message.channel.send(messageOut);
  console.log('Message Sent');
    }
})
bot.on('message', message=>{
    if(message.content === "n! github"){
const githubEmbed = new Discord.MessageEmbed()
.setColor('#ae00ff')
.setTitle('Maculos On Github')
.setURL('https://github.com/Maculos')
.setImage('https://avatars0.githubusercontent.com/u/63527367?s=460&u=639462cb6081e5b324d04e60f6ecb1d431bb264c&v=4')
message.channel.send(githubEmbed)
    console.log('Github Embed Sent');
    }
})
bot.on('message', message=>{
    if(message.content === "n! add"){
const addEmbed = new Discord.MessageEmbed()
.setColor('#ae00ff')
.setTitle('Add Maculos To Your Server!')
.setURL('[Placeholder]')//Replace this placeholder with your own link.
message.channel.send(addEmbed)
    console.log('Add Embed Sent');
    }
})
bot.on('message', message=>{
    if(message.content === "n! commands"){
const commandsEmbed = new Discord.MessageEmbed()
.setColor('#ae00ff')
.setTitle('Commands')
.setDescription('List of all the commands.')
.addFields(
    { name: 'n! test', value: 'Displays a test message.'},
    { name: 'n! info', value: 'Displays a page about this bot.'},
    { name: 'n! hugs', value: 'Displays a hug gif.'},
    { name: 'n! gaga', value: 'Displays the link to the album "Chromatica" by Lady Gaga.'},
    { name: 'n! github', value: 'Displays the link to my github page.'},
    { name: 'n! add', value: 'Displays the link to add this bot to your server.'},
    { name: 'n! rickroll', value: 'Sends the link to Rick Astleys song "Never Gonna Give You Up".'},
    { name: 'n! commands', value: 'Displays the commands list.'},
)
message.channel.send(commandsEmbed)
    console.log('Info Embed Sent');
    }
})
bot.login(token);
