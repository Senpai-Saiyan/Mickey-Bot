var unirest = require('unirest');
var Discord = require('discord.js');
const rando_imgs = ['https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2F45e0ea98c98b155d46069c2d7bc97f86cfa562aa_00.jpg',
                    'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2Ftumblr_p5xhmfHvK21udbf49o4_540.png',
                   'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2Fwhen-you-get-a-pet-named-steve.jpg',
                   'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2F1iqhzi.jpg',
                   'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2F5d0462f84e8cb852d51cabda9bd6938d.jpg',
                   'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2F19228247_287917795004790_8506832648474198016_n.jpg',
                   'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2F38913980_2150329481954914_3499073774030946304_n.jpg',
                   'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2F37963426_1923794471246811_3805929331696336896_n.jpg',
                   'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2Ftumblr_p49yu5IiDK1wfkluqo1_400.jpg',
                   'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2F39803299_258394581478354_7311154189842979369_n.jpg',
                   'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2F36161427_637094136659637_8977207833120473088_n.jpg',
                   'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2Flarge.jpg',
                   'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2F5b1818f18517b902d6328b78fe7c0bbef94218fd_00.jpg',
                   'https://i.pinimg.com/originals/f8/3b/90/f83b9089f66f9d2ba0da988dd0d46cc4.gif',
                   'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2Ftenor.gif',
                   'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2Ff23.gif',
                   'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2F51oiD3ayDaL.jpg',
                   'https://i.pinimg.com/originals/73/df/fc/73dffcb183c3e0cbec694367f3a0b558.gif',
                   'https://66.media.tumblr.com/10ace63764eabd5fb7ab4fffeceac098/tumblr_onlfl4jAVB1vs985po1_500.gif',
                   'https://orig00.deviantart.net/6d84/f/2014/258/9/d/markiplier___let_it_go_by_steffieneko-d7zbo6o.gif',
                   'https://media.giphy.com/media/MRuNUOAfF3PYk/giphy.gif',
                   'http://rs1316.pbsrc.com/albums/t620/MissyMeggie21/Markiplier%20Gifs/markipliergif21_zps38720db8.gif',
                   'https://i.makeagif.com/media/10-09-2015/UDVNt3.gif',
                   'http://cdn.funnyisms.com/44b534e0-0d88-48de-aaef-fbb1e8e3fdc1.gif',
                   'https://media1.tenor.com/images/371bd41aa5a0d8168fac6bd67690f743/tenor.gif',
                   'https://media1.tenor.com/images/8c1c65ada89870ba510952db047296c0/tenor.gif',
                   'http://66.media.tumblr.com/f0fb4362cf9357bda814e6d587d6ea29/tumblr_oggbtxcHyc1vk250to2_500.gif',
                    'https://media.giphy.com/media/Em6SoF6sYc0JW/giphy.gif',
                    'http://images6.fanpop.com/image/photos/39400000/-Chica-markiplier-39424860-540-304.gif',
                    'https://i.kym-cdn.com/photos/images/original/001/166/943/51c.gif',
                   ]
module.exports = {
    name: 'markiplier',
    type: 'fun',
    usage: 'markiplier',
    permission: 1,
    help: 'Returns a random markiplier image.',
    main: function(bot, msg) {
      msg.channel.send(`I'm sorry, you're dying.`, {
    file: rando_imgs[Math.floor(Math.random() * rando_imgs.length)]
});
      

    },
};