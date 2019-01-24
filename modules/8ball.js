module.exports = {
    name: '8ball',
    type: 'fun',
    usage: '8ball',
    permission: 1,
    help: 'Simulates an 8ball.',
    main: function(bot, msg) {
        var predictions = [
            'It is certain',
            'The stars say it is so',
            'Without a doubt',
            'Yes definitely',
            'You may rely on it',
            'As I see it, yes',
            'Most likely',
            'Outlook good',
            'Yes',
            'Signs point to hell no',
            'fuck you I am busy',
            'Ask your mother',
            'Oh. Oh. Oh. You have my condolences.',
            'Cannot predict now',
            'rephrase and try again',
            "Not in a million years",
            'My reply is no',
            'My sources say no',
            'Outlook not so good',
            'Very doubtful',
        ];
        msg.reply(predictions[Math.floor(Math.random() * (predictions.length - 0))]);
    },
};
