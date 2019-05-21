module.exports = {
    name: 'createrole',
    type: 'moderation',
    usage: 'createrole <rolename>, <color> MUST INCLUDE COMMA',
    permission: 4,
    help: 'Creates a role of the specified name and color.',
    main: function(bot, msg) {
        if (msg.member.hasPermission('MANAGE_ROLES')) {
          const [ducks, ...duck] = msg.content.split(",");
                msg.guild.createRole({
  name: `${ducks}`,
  color: `${duck}`,
})
  .then(role => msg.channel.send(`Created new role with name ${role.name} and color ${role.color}`))
  .catch(console.error)
        }
    },
};