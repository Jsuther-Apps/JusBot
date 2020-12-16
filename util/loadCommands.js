const fs = require('fs');

function loadCommands(bot) {
    fs.readdir('commands/', (err, files) => {

        if (err) console.log(err);
    
        const jsfile = files.filter(f => f.split('.').pop() === 'js');
        if (jsfile.length <= 0) {
            return console.log('Bot Couldn\'t Find Commands in commands Folder.');
        }
    
        jsfile.forEach((f, i) => {
            const pull = require(`../commands/${f}`);
            bot.commands.set(pull.config.name, pull);
            pull.config.aliases.forEach(alias => {
                bot.aliases.set(alias, pull.config.name);
            });
        });
    });
    fs.readdir('commands/Member Commands', (err, files) => {

        if (err) console.log(err);
    
        const jsfile = files.filter(f => f.split('.').pop() === 'js');
        if (jsfile.length <= 0) {
            return console.log('[DISCORDAPI-LOGS] {ERROR 404} NO COMMANDS IN ./Member-Commands');
        }
    
        jsfile.forEach((f, i) => {
            const pull = require(`../commands/Member Commands/${f}`);
            bot.commands.set(pull.config.name, pull);
            pull.config.aliases.forEach(alias => {
                bot.aliases.set(alias, pull.config.name);
            });
        });
    });

    fs.readdir('commands/Admin Commands/', (err, files) => {

        if (err) console.log(err);
    
        const jsfile = files.filter(f => f.split('.').pop() === 'js');
        if (jsfile.length <= 0) {
            return console.log('[DISCORDAPI-LOGS] {ERROR 404} NO COMMANDS IN ./Admin Commands');
        }
    
        jsfile.forEach((f, i) => {
            const pull = require(`../commands/Admin Commands/${f}`);
            bot.commands.set(pull.config.name, pull);
            pull.config.aliases.forEach(alias => {
                bot.aliases.set(alias, pull.config.name);
            });
        });
    });
}

console.log('[DISCORDAPI_LOGS] ALL COMMANDS LOADED UNLESS ERROR 404 SHOWN');

module.exports = {
    loadCommands
}