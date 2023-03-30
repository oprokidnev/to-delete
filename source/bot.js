require('dotenv').config();

const { Telegraf } = require('telegraf');
const { message } = require('telegraf/filters');
const axios = require('axios');
const knex = require('../db/knex');
const usersList = require('../db/knex');

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => ctx.reply('Для авторизации введите свой email: '));

bot.on(message('text'), async (ctx) => {
  const emailFromTg = ctx.message.text;

  if (emailFromTg === usersList.email) {
    await ctx.reply('все круто')
  } else {
    await ctx.reply('Пользователь с таким email не найден')
  }
  
  //ctx.chat.id id пользователя в тг
})
  
bot.launch();

// a)	Создать бота со следующим функционалом
// i)	При стартер бот запрашивает email
// ii)	При вводе email ищется пользователь в базе с таким email и его присваивается telegram id из его сообщения
// iii)	Если пользователь не найден сообщается об ошибке
// iv)	Если успешно, сообщается что теперь будут уведомления
// v)	При совершении события пользователю по id пишет бот с информацией
