var unirest = require('unirest');
var Discord = require('discord.js');

module.exports = {
    name: 'duck',
    type: 'fun',
    usage: 'duck',
    permission: 1,
    help: 'Returns a random duck picture.',
    main: function(bot, msg) {
      unirest.get("https://random-d.uk/api/v1/random?type=jpg")
       .end(result => {
                var duck = new Discord.RichEmbed()
                    .setTitle('Random Duck')
                    .setURL(result.body.url)
                    .setImage(result.body.url)
                    .setFooter('Powered by random-d.uk')
                    .setColor(msg.guild.me.displayColor)
                    .setTimestamp();
                msg.channel.send({ embed: duck });
            });
    },
};