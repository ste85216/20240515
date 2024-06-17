import axios from 'axios'
import template from '../templates/100design.js'

export default async event => {
  try {
    const { data } = await axios.get('https://www.100.com.tw/v1/web_article')
    const replies = data
      .map(d => {
        const t = template()
        t.body.contents[0].url = d.cover_img
        t.body.contents[1].text = d.title
        t.body.contents[2].contents[0].contents[1].text = d.created_at
        t.footer.contents[0].action.uri = `https://www.100.com.tw/v2/theme/${d.topic_id}`
        return t
      })
    const result = await event.reply({
      type: 'flex',
      altText: '宗教文化查詢結果',
      contents: {
        type: 'carousel',
        contents: replies
      }
    })
    if (process.env.DEBUG === 'true') {
      console.log(result)
    }
  } catch (error) {
    console.log(error)
    event.reply('發生錯誤')
  }
}
