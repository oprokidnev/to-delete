require('dotenv').config();

const { Telegraf } = require('telegraf');
const axios = require('axios');
const knex = require('../db/knex');

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => ctx.reply('Для авторизации введите свой email: '));

// bot.on('message', async (msg) => {
    
//   const text = msg.text;
//   const chatId = msg.chat_id;

//   try {
//     if (text === 'мой_айди') { return bot.sendMessage(chatId, `Твой айди: ${chatId}`) }
//   } catch (e) {
//     console.log('Подключение к БД сломалось')
//   }

// })

bot.on('edited_message', ctx => {
  ctx.reply('Вы успешно изменили сообщение')
})

// bot.on('мой_id', ctx => {
//   let user__id = ctx.from_user.id;
//   ctx.reply('Твой ID: ' + user__id)
// })
  
bot.launch();

// a)	Создать бота со следующим функционалом
// i)	При стартер бот запрашивает email
// ii)	При вводе email ищется пользователь в базе с таким email и его присваивается telegram id из его сообщения
// iii)	Если пользователь не найден сообщается об ошибке
// iv)	Если успешно, сообщается что теперь будут уведомления
// v)	При совершении события пользователю по id пишет бот с информацией
