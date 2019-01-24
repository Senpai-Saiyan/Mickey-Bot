var unirest = require('unirest');
var Discord = require('discord.js');
const rando_imgs = ['https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2Fimages.jpeg',
                   'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2F26d2b24d40a8287ff3b1d066903077507dea43cc_00.jpg',
                   'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2F9bb53ce54604a5e998c67df4c789309b.jpg',
                   'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2FCslcwogVYAA8l2v.jpg',
                    'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2F29403359_1849832521981191_4845800798786945024_n.jpg',
                   'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2F228085425026202.jpg',
                   'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2F34325816_230389634220213_1780678395651162112_n.jpg',
                   'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2FC5tCkhRVAAINqr0%20-%20Edited.jpg',
                   'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2F0wpscprw27o01.jpg',
                   'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2FCzmPsaWUsAAJLRQ%20-%20Edited.jpg',
                   'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2FDOJ6QXAVoAACn6_.jpg',
                   'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2F29089409_164142880955037_9214588321928314880_n.jpg',
                   'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2F263656735013212.png',
                   'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2F68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f6873676d734d69694750544861673d3d2d3531373737303030342e313530366433313832316133373730663238333936343434343034362e706e67.png',]
module.exports = {
    name: 'chica',
    type: 'fun',
    usage: 'chica',
    permission: 1,
    help: "Returns a random picture of Markiplier's dog, Chica.",
    main: function(bot, msg) {
      msg.channel.send(`Best girl`, {
    file: rando_imgs[Math.floor(Math.random() * rando_imgs.length)]
});
      

    },
};