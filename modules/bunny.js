var unirest = require('unirest');
var Discord = require('discord.js');
const rando_imgs = ['https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2Fphoto-1469532804526-98aa275b657c.jpeg',
                   'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2Fphoto-1478109214826-170faed7985c.jpeg',
                   'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2Fphoto-1509085443839-d64c1b6eb61b.jpeg',
                   'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2Fphoto-1516632664305-eda5d6a5bb99.jpeg',
                   'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2Fphoto-1517750421976-9cf1c2145d4a.jpeg',
                   'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2Fphoto-1535241556859-780cb9f395f2.jpeg',
                   'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2Fphoto-1514917151705-150d9bcf5acd.jpeg',
                   'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2Fphoto-1533514114760-4389f572ae26.jpeg',
                   'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2Fphoto-1452857297128-d9c29adba80b.jpeg',
                   'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2Fcute%20bunny%20rabbit%20pictures-111.jpg',
                   'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2FBunnies-bunny-rabbits-16437997-1280-800.jpg',
                   'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2Fconejo.jpg',
                   'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2FIhMAYSI.jpg',
                   'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2Fcrop.jpeg',
                   'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2Fb6f29ae1b7dcd8fad8100687d5cea2b2.jpg',
                   'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2FRabbits_Closeup_Snout_517737_1365x1024.jpg',
                   'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2Frabbit-bunny-background-hd-2048x1536-249121.jpg',
                   'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2Fwallpaper.wiki-Free-Baby-Bunny-Photo-PIC-WPC0010297.jpg',]

module.exports = {
    name: 'bunny',
    type: 'fun',
    usage: 'bunny',
    permission: 1,
    help: 'Returns a random bunny picture.',
    main: function(bot, msg) {
      msg.channel.send(`bunny`, {
    file: rando_imgs[Math.floor(Math.random() * rando_imgs.length)]
});
      

    },
};