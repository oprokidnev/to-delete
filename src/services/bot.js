require("dotenv").config();
import { Telegraf } from "telegraf";
import { message } from "telegraf/filters";
import { userQuery } from "../db/knex";

export const botFactory = () => {
  const bot = new Telegraf(process.env.BOT_TOKEN);

  bot.start((ctx) =>
    ctx.reply("Добро пожаловать!\nДля авторизации введите свой email: ")
  );

  bot.on(message("text"), async (ctx) => {
    const emailFromTg = ctx.message.text;
    const tgId = ctx.chat.id;
    //const userList = await userListQuery();
    // console.log(userList) //все пользователи из бд

    const matchedUsers = await userQuery(emailFromTg);
    console.log(matchedUsers);
    try {
      if (matchedUsers?.length > 0) {
        //пуш tgId в бд

        await ctx.reply("Теперь вы будете получать уведомления о событиях");
      } else {
        await ctx.reply("Пользователь с таким email не найден");
      }
    } catch (e) {
      throw new e();
    }
  });

  return bot;
};

// a)	Создать бота со следующим функционалом
// i)	При стартер бот запрашивает email
// ii)	При вводе email ищется пользователь в базе с таким email и его присваивается telegram id из его сообщения
// iii)	Если пользователь не найден сообщается об ошибке
// iv)	Если успешно, сообщается что теперь будут уведомления
// v)	При совершении события пользователю по id пишет бот с информацией
