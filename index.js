const Discord = require('discord.js');
const botsettings = require('./botsettings.json');
const client = new Discord.Client({
    partials: ['MESSAGE', 'CHANNEL', 'REACTION']
});
const bot = new Discord.Client({disableEveryone: true});

const {
    loadCommands
} = require('./util/loadCommands');
const mongoose = require('mongoose');
//Make sure to require this model in your message event or index.js if you use message event on there. in this case im going to require it here
const prefix = require('./models/prefix');

mongoose.connect(botsettings.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
client.login(botsettings.token);

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

loadCommands(client);
require('./util/eventHandler.js')(client)

client.on('message', async (message) => {
    if (message.author.bot) return;

    //Getting the data from the model
    const data = await prefix.findOne({
        GuildID: message.guild.id
    });

    const messageArray = message.content.split(' ');
    const cmd = messageArray[0];
    const args = messageArray.slice(1);

    //If there was a data, use the database prefix BUT if there is no data, use the default prefix which you have to set!
    if(data) {
        const prefix = data.Prefix;

        if (!message.content.startsWith(prefix)) return;
        const commandfile = client.commands.get(cmd.slice(prefix.length)) || bot.commands.get(bot.aliases.get(cmd.slice(prefix.length)));
        commandfile.run(client, message, args);
    } else if (!data) {
        //set the default prefix here
        const prefix = botsettings.prefix;
        
        if (!message.content.startsWith(prefix)) return;
        const commandfile = client.commands.get(cmd.slice(prefix.length)) || bot.commands.get(bot.aliases.get(cmd.slice(prefix.length)));
        commandfile.run(client, message, args);
    }
})
