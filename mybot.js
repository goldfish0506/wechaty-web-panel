import { WechatyBuilder } from 'wechaty'
import { WechatyWebPanelPlugin } from 'wechaty-web-panel'

const name = 'wechat-assistant-pro';
let bot = '';


console.log('默认使用uos web版微信协议')
bot = WechatyBuilder.build({
    name, // generate xxxx.memory-card.json and save login data for the next login
    puppetOptions: {
        uos: true
    },
    puppet: 'wechaty-puppet-wechat',
});


bot.use(
        WechatyWebPanelPlugin({
            apiKey: 'a49b79837757cfa342b8526c3e90a0c34825975d',
            apiSecret: 'c2dc00bee8051f75bd80d2df4bf016e865e46f9a',
        })
    )
bot.start()
    .catch((e) => console.error(e));