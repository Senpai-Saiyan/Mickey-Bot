var unirest = require('unirest');
var Discord = require('discord.js');
const rando_imgs = ['https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2Fstire-porc.jpg',
                    'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2FAP_micro_pigs_3_sr_140319_1x1_1600.jpg',
                    'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2FTeacup-Pigs-drink.png',
                    'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2Fthumb-1920-716880.png',
                    'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2Fpiglet-animal-hd-wallpaper-1920x1080-5960.webp',
                    'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2F1.jpg',
                    'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2Ft73n6qg98iiy.jpg',
                    'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2Fmaxresdefault.jpg',
                    'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2F3270545-pig-wallpapers.png',
                    'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2Flittle-piglet-4k-cute-animals-pink-pig-farm.jpg',]
module.exports = {
    name: 'piggy',
    type: 'fun',
    usage: 'piggy',
    permission: 1,
    help: 'Returns a random pig picture.',
    main: function(bot, msg) {
      msg.channel.send(`piggy`, {
    file: rando_imgs[Math.floor(Math.random() * rando_imgs.length)]
});
      

    },
};