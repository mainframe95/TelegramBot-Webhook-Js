require('dotenv').config();
const { Telegraf } = require('telegraf')
const TelegrafInlineMenu = require('telegraf-inline-menu')
// const session = require('telegraf/session')

const bot = new Telegraf(process.env.BOT_TOKEN);
// bot.use(session())
// bot.use(async (ctx, next) => {
//     const start = new Date()
//     await next()
//     const ms = new Date() - start;
//     console.log('message',ctx.message)
//     console.log('Response time: %sms', ms)
// })
// bot.start((ctx) => ctx.reply('Welcome'))
// bot.help((ctx) => ctx.reply('Send me a sticker'))
// bot.command('hello', (ctx) => ctx.reply('hi!'))
// bot.command('game', (ctx) => {
//     console.log('ctx from', ctx.from);
//     ctx.reply(`'comming soon :) ${ctx.from.id}`)
// })
// bot.on('sticker', (ctx) => ctx.reply('👍'))
// bot.hears('hi', (ctx) => ctx.reply('Hey there'))
// // bot.on('text', (ctx) => ctx.reply('Hello World'))
// bot.catch((err, ctx) => {
//     console.log(`Ooops, encountered an error for ${ctx.updateType}`, err)
// })
  
// bot.on('text', (ctx) => {
//   ctx.session.counter = ctx.session.counter || 0
//   ctx.session.counter++
//   return ctx.reply(`Message counter:${ctx.session.counter}`)
// })


// const menu = new TelegrafInlineMenu(ctx => `Hey ${ctx.from.first_name}!`)
// menu.setCommand('start')
 
// menu.simpleButton('I am excited!', 'a', {
//   doFunc: ctx => ctx.reply('As am I!')
// })
// const bot = new Telegraf(process.env.BOT_TOKEN)
 
// bot.use(menu.init())
// const menu = new TelegrafInlineMenu(
//     ctx => `Hey ${ctx.from.first_name}!`
//   )
//   menu.simpleButton('I am excited!', 'a', {
//     doFunc: ctx => ctx.reply('As am I!')
//   })
//   bot.use(menu.init())

// // bot.launch();
// bot.startPolling()
// const main = new TelegrafInlineMenu('Main')
// main.setCommand('start')
// const settings = new TelegrafInlineMenu('Settings')
// settings.setCommand('settings')
// main.submenu('Settings', 's', settings)
bot.command('menu', (ctx) => bot.telegram.sendMessage(ctx.chat.id, 'menu', menuKeyboard))
bot.command('menu2', (ctx) => bot.telegram.sendMessage(ctx.chat.id, 'menu', menu2Keyboard))
bot.hears('phone', (ctx, next) => {
    console.log(ctx.from)
    bot.telegram.sendMessage(ctx.chat.id, 'Can we get access to your phone number?', requestPhoneKeyboard);

})


//method for requesting user's location

bot.hears("location", (ctx) => {
    // console.log(ctx.from)
    bot.telegram.sendMessage(ctx.chat.id, 'Can we access your location?', requestLocationKeyboard);
})

bot.on('text', (ctx) => {
    console.log('ctx.', ctx.message.text)
    ctx.reply('on text')})

//constructor for providing phone number to the bot

const requestPhoneKeyboard = {
    "reply_markup": {
        "one_time_keyboard": true,
        "keyboard": [
            [{
                text: "My phone number",
                request_contact: true,
                one_time_keyboard: true
            }],
            ["Cancel"]
        ]
    }
};
//constructor for proving location to the bot

const requestLocationKeyboard = {
    "reply_markup": {
        "one_time_keyboard": true,
        resize_keyboard: true,
        
        "keyboard": [['Sample text', 'Second sample'], ['Keyboard'], ['I\'m robot']]
            // [{
            //     text: "My location",
            //     // request_location: true,
            //     // one_time_keyboard: true
            // }, {
            //     text: 'Non'
            // },{
            //     text: 'Non1'
            // },{
            //     text: 'Non2'
            // },{
            //     text: 'Non3',
            // }]
            // ["Cancel"]
    }

}

const menuKeyboard = {
    reply_markup: {
        one_time_keyboard: true,
        resize_keyboard: true,
        keyboard: [[{text: 'menu', }, 'menu'], ['main', 'main'], ['solde']]
    }
}

const menu2Keyboard = {
    reply_markup: {
        one_time_keyboard: true,
        resize_keyboard: true,
        keyboard: [['Annuler']]
    }
}

bot.launch()