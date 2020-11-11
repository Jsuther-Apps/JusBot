const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    const userEmbed = new Discord.MessageEmbed()
    .setTitle(`Click here for all commands`)
            .setURL(`https://github.com/Jsuther-Apps/JusBot/tree/main/commands`)
            .setAuthor(`Here is the Avaible Commands to use:`)
            .setDescription('```jsutherxdl```')
            .addField('`Note: Use js!help <COMMAND_NAME> for help on that command`')
            .addFields({ name: 'Prefix', value: '```js!```', inline: true})
            .setColor('#00FFF3')

    message.channel.send(userEmbed);
    }


module.exports.config = {
    name:"Jsuther X Help",
    description:"Shows commands for Jsuther X",
    usage:"?jsxhelp",
    accessableby:"Members",
    aliases:[""]
    }