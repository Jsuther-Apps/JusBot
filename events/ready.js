const Discord = require("discord.js")

module.exports = bot => { 
    console.log(`${bot.user.username} is online`)
    bot.user.setActivity("Jsuther Gaming || Jsuther-Apps/jusbot || js!help", {type: "WATCHING"});
}