const Discord = require('discord.js');
const moment = require('moment');
const guild = require('../data/guilds');

module.exports.run = async (bot, message, args) => { 
  name = 'idle';
  
  execute(msg); {
    const details = msg.guild.members.cache
      .filter(m => m.presence.status === 'idle')
      .map(m => m.id)
      .join('\n');

    return msg.channel.send(`Members: ${details}`);
  }
}

module.exports.config = {
  name: "afk",
  description: "Makes a user idle in the server",
  usage: "?afk",
  accessableby: "Members",
  aliases: ['idle']
}