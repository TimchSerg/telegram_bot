import { Injectable, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class BotService implements OnModuleInit{
  private bot: any;
  private token: string;

  constructor(
    private configService: ConfigService
  ) {
    process.env.NTBA_FIX_319 = '1';
    const TelegramBot = require('node-telegram-bot-api');
    this.token = this.configService.get<any>('TOKEN_BOT');

    this.bot = new TelegramBot(this.token.toString(), {polling: true});
  }
  
  onModuleInit() {
    this.botMessage();
  }

  botMessage() {
  
    this.bot.on('message', (msg) => {
      let Hi = "hi";
      if (msg.text.toString().toLowerCase().indexOf(Hi) === 0) {
        this.bot.sendMessage(msg.from.id, "Hello " + msg.from.first_name + " what would you like to know about me ?");
      }
      
      let response = "Who are you";
      if (msg.text.toString().toLowerCase().includes("who")) {
        this.bot.sendMessage(msg.chat.id, "I am an intelligent telegram robot, built with Nest.js. Thanks for asking");
      }
      
      let response2 = "Do you love JavaScript";
      if (msg.text.toString().toLowerCase().includes("javascript")) {
        this.bot.sendMessage(msg.from.id, "Oh, did I hear you say JavaScript? \n I really love JavaScript");
        this.botQuotes(msg.from.id);
      }
    });

    this.bot.onText(/\/date/, (msg, match) => {
      var userId = msg.from.id;
      this.botQuotes(userId);
    });
  }

  botQuotes(userId: number) {
    this.bot.sendMessage(userId, `Текущая дата: ${new Date()}`);
  }

}
