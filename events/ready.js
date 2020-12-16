const Discord = require("discord.js")
const botsettings = require('../botsettings.json')

module.exports = bot => { 
    console.log(`[DISCORD-API_LOGS] ${bot.user.username} is online`)
    bot.user.setActivity("js!help || Jsuther-Apps/JusBot || ", {type: "STREAMING"});
	
}