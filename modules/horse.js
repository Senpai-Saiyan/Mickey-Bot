var unirest = require('unirest');
var Discord = require('discord.js');
const rando_imgs = ['https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2Fphoto-1469974141264-d428236caf92.jpeg',
                   'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2Fphoto-1509565063302-da4fb6cb32eb.jpeg',
                   'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2Fphoto-1499190179682-c8c4bcc38f49.jpeg',
                   'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2Fphoto-1514821019710-97572b2e9086.jpeg',
                   'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2Fce92d553.jpeg',
                   'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2Fphoto-1468977131529-1e1cdafb50ad.jpeg',
                   'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2Fphoto-1519154251904-7c1225f78a0d.jpeg',
                   'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2Fphoto-1504020853563-338d87e28a89.jpeg',
                   'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2F16ea67e5.jpeg',
                   'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2Fphoto-1497781495506-ce58b286d8f5.jpeg',
                   'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2Fphoto-1463748465553-80db1e6ff830.jpeg',
                   'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2Fphoto-1514861889637-9f51bc99fc19.jpeg',
                   'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2Fphoto-1499013953050-ebad0db5d9c6.jpeg',
                   'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2Fphoto-1526749732257-91f9b4414ee3.jpeg',
                   'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2Fphoto-1443813109109-534a97523f57.jpeg',
                   'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2Fphoto-1509484867460-fd301bb18323.jpeg',
                   'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2Fphoto-1534773721702-a63286d2df6e.jpeg',
                   'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2Fphoto-1529447075760-7d4f8bac0d58.jpeg',
                   'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2Fphoto-1530125835935-b410c536becc.jpeg',]

module.exports = {
    name: 'horse',
    type: 'fun',
    usage: 'horse',
    permission: 1,
    help: 'Returns a random horse picture.',
    main: function(bot, msg) {
      msg.channel.send(`horse`, {
    file: rando_imgs[Math.floor(Math.random() * rando_imgs.length)]
});
      

    },
};