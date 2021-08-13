require('dotenv').config();
const { Telegraf } = require('telegraf')
const TelegrafInlineMenu = require('telegraf-inline-menu')
// const session = require('telegraf/session')

const bot = new Telegraf(process.env.BOT_TOKEN);
bot.start(ctx => {
    const text = `Menu.`;
    bot.telegram.sendMessage(ctx.chat.id, `Bonjour Bienvenu dans le bot d'investissement\n \menu pour voir le menu.`);
    bot.telegram.sendMessage(ctx.chat.id, text, menuKeyboard)
});

bot.on("callback_query", function(callbackQuery) {
    console.log('call')
    bot.sendMessage(callbackQuery.message.from.id, "You clicked the button");
});
bot.help(ctx => {
    ctx.reply('comming soon');
})
bot.catch(err =>  console.log('err', err))
bot.telegram.setMyCommands([
    {command: 'start', description: 'open the menu'},
    {command: 'magic', description: 'do magic'},
    {command: 'help', description: 'show the help'},
    {command: 'settings', description: 'open the settings'},
]);

const menuKeyboard = {
    reply_markup: {
        remove_keyboard: true
        // keyboard: [
        //     [{
        //      text: 'Button',
        //      callback_data: 'answer'
        //     }]
        // ]
    }

    // reply_markup: {
    //     one_time_keyboard: true,
    //     resize_keyboard: true,
    //     inline_keyboard: [[{
    //         text: 'Button',
    //         callback_data: 'answer'
    //     }],[{ text: 'Investir' }, { text: 'solde' }], [{ text: 'solde' }, { text: 'historique' }], [{text: 'Support', }]]
    // }
}
 bot.hears('Button', ctx => {ctx.reply('koiu answer')})
// bot.telegram.sendMessage('797434950', 'service started');
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
// bot.command('menu', (ctx) => bot.telegram.sendMessage(ctx.chat.id, 'menu', menuKeyboard))
// bot.command('menu2', (ctx) => bot.telegram.sendMessage(ctx.chat.id, 'menu', menu2Keyboard))
// bot.command('mycommand1', (ctx) => {
//     // ctx.deleteMessage();
//     ctx.reply('mycommand1')
// })
// bot.hears('phone', (ctx, next) => {
//     console.log(ctx.from)
//     bot.telegram.sendMessage(ctx.chat.id, 'Can we get access to your phone number?', requestPhoneKeyboard);

// })


// //method for requesting user's location

// bot.hears("location", (ctx) => {
//     // console.log(ctx.from)
//     bot.telegram.sendMessage(ctx.chat.id, 'Can we access your location?', requestLocationKeyboard);
// })

// bot.on('text', (ctx) => {
//     console.log('ctx.', ctx.from.id)
//     ctx.reply('on text')})

//constructor for providing phone number to the bot

// const requestPhoneKeyboard = {
//     "reply_markup": {
//         "one_time_keyboard": true,
//         "keyboard": [
//             [{
//                 text: "My phone number",
//                 request_contact: true,
//                 one_time_keyboard: true
//             }],
//             ["Cancel"]
//         ]
//     }
// };
//constructor for proving location to the bot

// const requestLocationKeyboard = {
//     "reply_markup": {
//         "one_time_keyboard": true,
//         resize_keyboard: true,

//         "keyboard": [['Sample text', 'Second sample'], ['Keyboard'], ['I\'m robot']]
//     }

// }



// const menu2Keyboard = {
//     reply_markup: {
//         one_time_keyboard: true,
//         resize_keyboard: true,
//         keyboard: [['Annuler']]
//     }
// }


bot.launch()