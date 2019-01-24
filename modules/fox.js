var unirest = require('unirest');
var Discord = require('discord.js');

module.exports = {
    name: 'fox',
    type: 'fun',
    usage: 'fox',
    permission: 1,
    help: 'Returns a random fox picture.',
    main: function(bot, msg) {
      unirest.get("http://randomfox.ca/floof/")
       .end(result => {
                var fox = new Discord.RichEmbed()
                    .setTitle('Random Fox')
                    .setURL(result.body.image)
                    .setImage(result.body.image)
                    .setFooter('Powered by randomfox.ca')
                    .setColor(msg.guild.me.displayColor)
                    .setTimestamp();
                msg.channel.send({ embed: fox });
            });
    },
};