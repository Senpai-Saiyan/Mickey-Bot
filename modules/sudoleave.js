module.exports = {
    name: 'leave',
    type: 'owner',
    usage: 'leave',
    permission: 6,
    help: 'Makes the bot leave a server.',
    main: function(bot, msg) {
        if (msg.author.id === require('../config.json').owner) {
            msg.channel.send('Leaving this server in 5 seconds :ok_hand:');

            setTimeout(() => { msg.guild.leave(); }, 5000);
        }
    },
};
