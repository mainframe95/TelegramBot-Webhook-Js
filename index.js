const { Telegraf } = require('telegraf')

const mySecret = process.env['BOT_KEY'];
const bot = new Telegraf(`${mySecret}`);

bot.command('start', ctx => {
    console.log('r', ctx.from)
    bot.telegram.sendMessage(ctx.chat.id, 'hello there! Welcome to my new telegram bot.', {
    })
});

bot.command('hello', ctx => {
    console.log('r', ctx.from)
    bot.telegram.sendMessage(ctx.chat.id, 'commands hello.', {
    })
});

//method that displays the inline keyboard buttons 

bot.hears('animals', ctx => {
    console.log(ctx.from)
    let animalMessage = `great, here are pictures of animals you would love`;
    ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.chat.id, animalMessage, {
        reply_markup: {
            inline_keyboard: [
                [{
                        text: "dog",
                        callback_data: 'dog'
                    },
                    {
                        text: "cat",
                        callback_data: 'cat'
                    }
                ],

            ]
        }
    })
})

//method that returns image of a dog

bot.action('dog', ctx => {
    bot.telegram.sendPhoto(ctx.chat.id, {
        source: "./files/dog.jpg"
    })

})

//method that returns image of a cat 

bot.action('cat', ctx => {
    bot.telegram.sendPhoto(ctx.chat.id, {
        source: "./files/cat.jpg"
    })

})

bot.launch();