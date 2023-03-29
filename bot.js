require('dotenv').config();
const { Telegraf } = require('telegraf');
const axios = require('axios');

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => ctx.reply('Для авторизации введите свой email: '));

bot.on('message', async (ctx) => {
  let valid = /^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/i ;
  
  if (ctx.message  == 'not found') return console.log(ctx.email);
})

// bot.on('message', (msg) => {
//   let user_id = msg.from.id;
//   if (msg.text === "мой айди"){
//       msg.reply(msg.chat.id, "Это твой айди: " + user_id);
//   }
// });

bot.on('edited_message', ctx => {
  ctx.reply('Вы успешно изменили сообщение')
})

bot.on('мой id', ctx => {
  let user__id = ctx.from.id;
  ctx.reply('Твой ID: ' + user__id)
})
  
bot.launch();

// a)	Создать бота со следующим функционалом
// i)	При стартер бот запрашивает email
// ii)	При вводе email ищется пользователь в базе с таким email и его присваивается telegram id из его сообщения
// iii)	Если пользователь не найден сообщается об ошибке
// iv)	Если успешно, сообщается что теперь будут уведомления
// v)	При совершении события пользователю по id пишет бот с информацией
