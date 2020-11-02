module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission('KICK_MEMBERS'))
        message.channel.send("Error: You are missing the permission `KICK_MEMBERS` :x:");
    else {
        let member = message.guild.members.cache.get(args);
        if(member) {
        try {
            await member.kick();
            console.log('Kicked');
            message.channel.send(`${member}, Kicked!`)
        }
            catch(err) {
            console.log(err);
        }
    }
}
}

module.exports.config = {
    name: "kick",
    description: "Kicks a user",
    usage: "?kick",
    accessableby: "Admins",
    aliases: []
}