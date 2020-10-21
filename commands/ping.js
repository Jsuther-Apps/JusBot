const Discord = require('discord.js');
const moment = require('moment');
const guild = require('../data/guilds');

module.exports.run = async (bot, message, args) => { 
  
}
module.exports.config = {
    name: "ping",
    description: "Shows the guild's ping(Respond time, in milliseconds)",
    usage: "?ping",
    accessableby: "Members",
    aliases: ['ping']
}