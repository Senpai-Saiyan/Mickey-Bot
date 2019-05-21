
if (process.argv[2] && process.argv[2] === '--travis') var config = require('./config-example.json');
else config = require('./config.json');
const Discord = require('discord.js');
const bot = new Discord.Client(config.opts);
bot.config = config;
require('./funcs.js')(bot);
// if (bot.config.musicOpts.youtubeKey) require('discord.js-musicbot-addon')(bot, require('./config.json').musicOpts);
const readdir = require('fs').readdir;

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
bot.events = new Discord.Collection();

const { Client } = require('idiotic-api');
bot.IdioticAPI = new Client(bot.config.idioticapi || 'token', { dev: true });

readdir('./modules/', (err, files) => {
    if (err) throw err;
    bot.log(`Loading ${files.length} commands!`);
    files.forEach(f => {
        try {
            var name = require(`./modules/${f}`).name;
            bot.commands.set(name, require(`./modules/${f}`));
            /* commandFile.aliases.forEach(alias => {
                bot.aliases.set(alias, commandFile.help.name);
            });*/
        } catch (e) {
            bot.log(`Unable to load command ${f}: ${e}`);
        }
      
    });
    bot.log(`Commands loaded!`);
});
/*
bot.on("messageDelete", msg => {
  let logs = msg.guild.fetchAuditLogs({type: 72});
  let entry = logs.entries.first();
  let embed = new Discord.RichEmbed()
    .setTitle("**DELETED MESSAGE**")
    .setColor("#fc3c3c")
    .addField("Author", msg.author.tag, true)
    .addField("Channel", msg.channel, true)
    .addField("Message", msg.content)
   /// .addField("Probably Deleted By:", entry.executor)
   /// .addField("Reason", entry.reason || "Unspecified")
   /// .setFooter(`Message ID: ${msg.id} | Author ID: ${msg.author.id}`);

  let channel = msg.guild.channels.find(x => x.name === 'staff-logs');
  channel.send({embed});
});
*/


readdir('./events/', (err, files) => {
    if (err) throw err;
    bot.log(`Loading ${files.length} events!`);
    files.forEach(file => {
        bot.events.set(file.substring(0, file.length - 3), require(`./events/${file}`));
        bot.on(file.split('.')[0], (...args) => {
            require(`./events/${file}`).run(bot, ...args);
        });
    });
    bot.log(`Events loaded!`);
});

if (bot.config.token) bot.login(bot.config.token);
else if (process.env.TOKEN) bot.login(process.env.TOKEN);
else console.log('no token provided');