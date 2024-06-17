export default () => {
  return {
    type: 'bubble',
    body: {
      type: 'box',
      layout: 'vertical',
      contents: [
        {
          type: 'image',
          url: 'https://cp4.100.com.tw/images/topics/202105/28/admin_30_1622166212_Y9mM4YoiWa.jpg!t1000.jpg',
          size: 'md'
        },
        {
          type: 'text',
          text: '裝潢預算怎麼抓?',
          weight: 'bold',
          size: 'xxl'
        },
        {
          type: 'box',
          layout: 'vertical',
          margin: 'lg',
          spacing: 'sm',
          contents: [
            {
              type: 'box',
              layout: 'baseline',
              spacing: 'sm',
              contents: [
                {
                  type: 'text',
                  text: '發布日期',
                  color: '#aaaaaa',
                  size: 'sm',
                  flex: 1
                },
                {
                  type: 'text',
                  text: '2021-05-28',
                  wrap: true,
                  color: '#666666',
                  size: 'sm',
                  flex: 5
                }
              ]
            }
          ]
        }
      ]
    },
    footer: {
      type: 'box',
      layout: 'vertical',
      spacing: 'sm',
      contents: [
        {
          type: 'button',
          style: 'link',
          height: 'sm',
          action: {
            type: 'uri',
            label: '觀看文章',
            uri: 'https://www.100.com.tw/v2/theme/107'
          }
        },
        {
          type: 'box',
          layout: 'vertical',
          contents: [],
          margin: 'sm'
        }
      ],
      flex: 0
    },
    styles: {
      footer: {
        separator: true
      }
    }
  }
}
