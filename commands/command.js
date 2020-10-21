const Discord = require('discord.js');
const moment = require('moment');
const guild = require('../data/guilds');

module.exports.run = async (bot, message, args) => { 
  name = '';
  category = 'General';
  
  execute(...args); {
    throw new TypeError('Execute not implemented.');
  }
}
module.exports.config = {
    name: "command name",
    description: "Shows if a command is working or invalid",
    usage: "?command",
    accessableby: "Members",
    aliases: ['cmd']
}