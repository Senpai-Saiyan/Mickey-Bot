var unirest = require('unirest');
var Discord = require('discord.js');
const rando_imgs = ['https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2Fmaxresdefault%20-%20Edited%20(3)S.jpg',
                    'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2Funknown.png',
                    'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2Ftumblr_mht3q4dUfk1qg1rc2o1_540.png',
                    'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2Ftumblr_op3cv6lUTA1uy7xq7o1_500.jpg',
                    'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2F980dbb2c50681d449230a4134dfd937e2b6f5f7f_00.jpg',
                    'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2F00733f6a047b7cf6742992b3bc640907--posts-band.jpg',
                    'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2F1539017914-5bbb8cba1fccf81c448f9600-image.png',
                    'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2F1539017807-5bbb8c4f1d53e9e80f836200-image.png',
                    'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2F1538502373-5bb3aee536d7309fa3d9f400-image.png',
                    'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2FScreenshot_2018-02-15-16-15-23%20(1).png',
                    'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2F68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f44384647305268444758376b5a513d3d2d3531343135373136392e313530346132333832643563636461653133313731323631393333342e6a7067.jpeg',
                    'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2Fed2770b0-a181-0135-984e-22000a78074f-1509575316-730314-563x361.jpg',
                    'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2Fbdb1af2bef388e3de1ac0b80156c93cb.jpg',
                    'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2FPATRICKPATRICKPATRICK.png',
                    'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2Fjasdljflksjk.png',
                    'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2FTrickisadork.png',
                    'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2FPSMustache.jpg',
                    'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2FStump00.png',
                    'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2FMANIA-Patrick.jpg',
                    'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2FPS2.png',
                    'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2Fe5fa204de0442812fd6fa588abda358d--patrick-obrian-patrick-stump.jpg',
                    'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2Ffall-out-boy-patrick-stump-uma-thurman-Favim.com-2725664%20(1).jpg',
                    'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2F57bab6a1cc4de8db0eb2cf56861bb60e%20(1).png',
                    'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2F1a19c0d4cb67923e65618200e6182529--st-patrick-patrick-martin.jpg',
                    'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2F1523032726-5ac7a2963895a937743bfe00-image.png',
                    'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2F123438734_8.jpg',
                    'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2FPatrick%2BStump%2B22nd%2BAnnual%2BKROQ%2BWeenie%2BRoast%2BDhrUuiI_Xval.jpg',
                    'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2FPatrick%2BStump%2BElijah%2BWood%2BPatrick%2BStump%2BVisit%2B6pnCOfLSaPrl.jpg',
                    'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2FPatrick%2BStump%2BPepsi%2BSmash%2BSuper%2BBowl%2BBash%2BSACE3ht4OJAl.jpg',
                    'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2FPatrick%2BStump%2BLos%2BPremios%2BMTV%2B2009%2BArrivals%2BnUly8VnsMWcl.jpg',
                    'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2Fc063eed9af5987d249f811e209c35e0a%20(1).jpg',
                    'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2Ff4da6dba9295c3f9c4b809959ccc6a25--patrick-obrian-patrick-stump.jpg',
                    'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2FPSGreenElvisDuranShow%20(1).jpg',
                    'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2Fe97e44a6dc02c1eb92aa65115c9f6438%20(1).jpg',
                    'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2Fd364ee3972fe998c1ce4d701583a6138--work-outs-soul-punk%20(1).jpg',
                    'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2F1518113856-5a7c9440896c12d16ee64000-patrick-stump-gym-class-heroes-unplugged-600x413%20(1).jpg',
                    'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2FPSGymClassHeroes.jpg',
                    'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2FSoulPunkBlueSuit.jpg',
                    'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2F210779122_640%20(1).jpg',
                    'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2F1518114158-5a7c956e648fb62040bd1400-577225f29db6a8d40794bf1b129c224a--patrick-martin-patrick-obrian%20(1).jpg',
                    'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2F1518113945-5a7c9499466486391b5b580-86ff4c14322efc4fda4d89bf9d735f10--patrick-obrian-patrick-stump%20(1).jpg',
                    'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2F01acdf2ff77212aaf76bf6b497b67e3c%20(1).jpg',
                    'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2Fpspfca.jpg',
                    'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2F4NxTSr4C%20(1).jpeg',
                    'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2FPSwhiteguitar.png',
                    'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2FZ100%2BJingle%2BBall%2B2017%2BBackstage%2B1TxscS-vm6px%20(1).jpg',
                    'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2F1519836444-5a96dd1ceb6a7642fefff00-image.png',
                    'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2FThisIsOurCulture.png',
                    'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2Ftumblr_mujd97J54z1rqq83yo1_500%20(1).gif',
                    'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2Fpatricks%20(1).gif',
                    'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2FPSBlue.png',
                    'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2F1539011806-5bbb74de5e6b34071a836400-image.png',
                    'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2Ftumblr_p3emoypRKV1vefc9zo1_500.gif',
                    'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2F31163061_1786581084764105_3092276633785073664_n.jpg',
                    'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2Fbf5b679293a54cd653490b4b4bdf861b--patrick-stump-patrick-obrian.jpg',
                    'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2Fsuperthumb.jpg',
                    'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2Ftumblr_nzzfu8u3Ax1ul6hd2o3_250.png',
                    'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2F19584bc150962314dcafae5483b7c19a--patrick-stump-hot-patrick-obrian.jpg',
                    'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2Ftumblr_p352mtbgYA1wnlicco1_500.jpg',
                    'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2F36771108_798131667242486_669869371799109632_n.jpg',
                    'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2F7861e39eeb7d69e6ecf0045807fdf3eb--st-patrick-patrick-stump.jpg',
                    'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2F68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f416d343866727a442d4e463467673d3d2d3437393733313635312e313465626333626335663764386361363530363734363033353930302e6a7067.jpeg',
                    'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2Fdfaceef9d55890be6aee5fab7e0ac4aa.jpg',
                    'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2FCKD8GBzWUAA-gkU.jpg',
                    'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2F3e3545a063b4825d13f7b85be4d83b80--patrick-obrian-patrick-stump.jpg',
                    'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2F1c11db65b2370feadd2b00d7fba7bc95--patrick-obrian-patrick-stump.jpg',
                    'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2FCbmUBRBUsAQkAZV.jpg',
                    'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2Fblack-and-white-boy-celeb-fall-out-boy-Favim.com-2915114.jpg',
                    'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2FPatrick%2BStump%2BMTV%2BWorld%2BStage%2BMonterrey%2BMexico%2Bd67xQ9-GxTSl.jpg',
                    'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2Ftumblr_p3o5wfJBJZ1vmkh94o1_500.jpg',
                    'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2Ftumblr_inline_nars8bccpQ1rlld1l.jpg',
                    'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2F848aaca0362be47889ff113bc45fe8bb.jpg',
                    'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2F68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f4176567366764130756c6b526a513d3d2d3233382e313463393431626633363166383231353238373737353938343036332e6a7067.jpeg',
                    'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2Flarge.jpg',
                    'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2Fpatrick_stump_prt8_by_r_clandestin-d45vygp.jpg',
                    'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2F96a72204da3c7b8f45673af71a90073cb4a465ef_hq.jpg',
                    'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2F68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f644f424a7a6f4569796d54616f773d3d2d3531343135373136392e313530346132333933306461313966643138373431393138363634382e676966.gif',
                    'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2Ftumblr_o4bpipk0zg1v8exyeo1_1280.png',
                    'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2FFlowerCrown2.png',
                    'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2FFlowerCrown4.png',
                    'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2FFlowerCrown3.png',
                    'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2FFlowerCrown1.png',
                    'https://cdn.glitch.com/faca9c24-a038-4042-ae77-41b5716de1c2%2Ftumblr_n08qc2TTYA1r1xps7o1_500.png',]
module.exports = {
    name: 'stump',
    type: 'fun',
    usage: 'stump',
    permission: 1,
    help: 'Returns a (mostly) random Patrick Stump image.',
    main: function(bot, msg) {
      msg.channel.send(`stump`, {
    file: rando_imgs[Math.floor(Math.random() * rando_imgs.length)]
});
      

    },
};