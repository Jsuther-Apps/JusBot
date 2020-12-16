const reqEvent = (event) => require(`../events/${event}`)

module.exports = bot => {
    bot.on("ready", function() {reqEvent("ready") (bot) });
    console.log("[DISCORD-API_LOGS] Status now showing")
 }