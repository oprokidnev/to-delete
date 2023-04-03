import * as dotenv from 'dotenv';
dotenv.config()
import {botFactory} from './services/bot';

const bot = botFactory();
bot.launch();
