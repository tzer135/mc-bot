const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: '1217272024oooooi.aternos.me',
  port: 19987,
  username: 'huan678'
});

bot.on('spawn', () => {
  console.log('✅ 机器人 huan678 已上线！');
});

bot.on('error', (err) => {
  console.log('机器人出现错误:', err);
});

bot.on('end', () => {
  console.log('机器人已断开连接');
});
