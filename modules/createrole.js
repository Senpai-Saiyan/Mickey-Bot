module.exports = {
    name: 'createrole (WIP)',
    type: 'moderation',
    usage: 'createrole <role> <color>',
    permission: 4,
    help: 'Creates a role of the specified name and color.',
    main: function(bot, msg) {
        if (msg.member.hasPermission('MANAGE_ROLES')) {
            try {
                msg.guild.createRole(msg.content, 'text')
                    .then(role => console.log(`Created ${role.name} in the color ${role.color} was created`));
            } catch (err) {
                console.log(err);
                msg.channel.send('ERR: ' + err);
            }
        }
    },
};
