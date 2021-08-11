const {Telegraf} = require('telegraf')
const {MenuTemplate, MenuMiddleware} = require('telegraf-inline-menu')
// interface MyContext extends TelegrafContext {
// 	readonly match: RegExpExecArray | undefined;
// }

const menuTemplate = new MenuTemplate(ctx => `Hey ${ctx.from.first_name}!`)

menuTemplate.interact('I am excited!', 'a', {
	do: async ctx => {
		await ctx.reply('As am I!')
		return false
	}
})

const bot = new Telegraf(process.env['BOT_KEY'])

const menuMiddleware = new MenuMiddleware('/', menuTemplate)
bot.command('start', ctx => menuMiddleware.replyToContext(ctx))
bot.use(menuMiddleware)

bot.launch()
