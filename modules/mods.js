const Discord = require('discord.js');

module.exports = {
    name: 'mods',
    type: 'informational',
    usage: 'mods',
    permission: 1,
    help: 'Gives you information about the server moderators.',
    main: function(bot, msg) {
        var members = {};

        msg.guild.members.forEach(member => {
            if (member.hasPermission('MANAGE_MESSAGES') && !member.user.bot) {
                if (!members[member.hoistRole ? member.hoistRole.name : 'None']) {
                    members[member.hoistRole ? member.hoistRole.name : 'None'] = [];
                }
                members[member.hoistRole ? member.hoistRole.name : 'None'].push(member);
            }
        });

        var mods = new Discord.RichEmbed()
            .setTitle('Moderators (or anyone with any kind of permissions at all) on ' + msg.guild.name)
            .setThumbnail(msg.guild.iconURL)
            .setFooter("Powered by a company I can't pronounce", bot.user.iconURL)
            .setColor(msg.guild.me.displayColor)
            .setTimestamp();

        for (var role in members) {
            var str = '';
            var arr = members[role];

            for (var i = 0; i < arr.length; i++) {
                var user = arr[i].user;
                if (user.presence.status === 'offline') {
                    str += '<:invisible:499572706103132180> **' + arr[i].displayName + '**\n';
                } else if (user.presence.status === 'idle') {
                    str += '<:idle:499572706048475156> **' + arr[i].displayName + '**\n';
                } else if (user.presence.status === 'online') {
                    str += '<:active:499572705717387269> **' + arr[i].displayName + '**\n';
                } else if (user.presence.status === 'dnd') {
                    str += '<:goaway:499572705809661963> **' + arr[i].displayName + '**\n';
                }
            }

            arr = members[role];
            mods.addField(role, str);
        }

        msg.channel.send({ embed: mods });
    },
};
