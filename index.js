import 'dotenv/config'
import linebot from 'linebot'
import command100design from './commands/100design.js'

const bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
})

bot.on('message', event => {
  if (process.env.DEBUG === 'true') {
    console.log(event)
  }
  if (event.message.type === 'text') {
    if (event.message.text === '本週熱門文章') {
      command100design(event)
    }
  }
})

bot.on('postback', event => {
  console.log(event)
})

bot.listen('/', process.env.PORT || 3000, () => {
  console.log('機器人啟動')
})
