module.exports = {
    name: 'ping',
    type: 'core',
    usage: 'ping',
    permission: 1,
    help: 'Tests the bot\'s ping time.',
    main: function(bot, msg) {
        var start = new Date(msg.createdAt).getTime();
        msg.channel.send('Pong!')
            .then(msg2 => msg2.edit("Ping pong song. You're in **" + msg.channel.guild.name + '**.\nTook ' + (msg2.createdAt.getTime() - start) + ' ms to respond.'))
            .catch(console.error);
    },
};
