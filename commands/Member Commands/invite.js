const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    const userEmbed = new Discord.MessageEmbed()
    .setAuthor(`JusBot`)
    .setColor('BLUE')
    .addField('Please click this link to add JusBot to your server.')
    .addField('https://discord.com/api/oauth2/authorize?client_id=763752577606615101&permissions=8&redirect_uri=https%3A%2F%2Fwww.discord.gg%2FhJPKQJE&response_type=code&scope=bot%20guilds.join')

    message.channel.send(userEmbed);
    }


module.exports.config = {
       name:"Cmd name",
    description:"Cmd description",
    usage:"?Cmd",
    accessableby:"Who can use",
    aliases:["other ways to execute this command"]
    }