module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission('BAN_MEMBERS')) 
        message.channel.send("Error: Only Guild Members with the Permission `BAN_MEMBERS` can use this command.");
    else {
        let bannedMember = await message.guild.members.ban(args);
        if(bannedMember){

        try {
            console.log(bannedMember.tag + "Was banned");
            message.channel.send (`${bannedMember} was banned from the server https://i.imgur.com/O3DHIA5.gif`)
        }
            catch(err) {
            console.log(err);
        }
    }
}
}

module.exports.config = {
    name: "ban",
    description: "Bans a User",
    usage: "?ban",
    accessableby: "Admins",
    aliases: []
}
