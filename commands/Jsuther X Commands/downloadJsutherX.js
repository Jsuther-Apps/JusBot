const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    const userEmbed = new Discord.MessageEmbed()
    .setAuthor(`Jsuther X`)
    .setColor('ORANGE')
    .addField('This is the download link for Jsuther X. Please use it to download')
    .addField('https://jsutherxploit.tk/download')
    .setThumbnail('https://semishot-devs.leaked-your-ip.xyz/_3oO4exr3mI')

    message.channel.send(userEmbed);
    }


module.exports.config = {
       name:"Cmd name",
    description:"Recieve the download link for Jsuther X",
    usage:"?jsutherxdl",
    accessableby:"Members",
    aliases:["downloadJsX"]
    }