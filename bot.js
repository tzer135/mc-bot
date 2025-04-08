const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: '1217272024oooooi.aternos.me',
  port: 19987,
  username: 'huan678'
})

bot.on('spawn', () => {
  console.log('✅ 机器人 huan678 已上线！')
})

bot.on('chat', (username, message) => {
  if (username === bot.username) return
  if (message === '跳') {
    bot.setControlState('jump', true)
    setTimeout(() => bot.setControlState('jump', false), 500)
  }
})
