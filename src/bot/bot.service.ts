import { Injectable, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CommandsService } from './services/commands/commands.service';
import { MessageService } from './services/message/message.service';

@Injectable()
export class BotService implements OnModuleInit{
  private bot: any;
  private token: string;

  constructor(
    private configService: ConfigService,
    private messageService: MessageService,
    private commandsService: CommandsService
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
      const answer = this.messageService.getMessage(msg.text.toString())
      if(msg.text.toString()[0] !== "/") 
        this.bot.sendMessage(msg.from.id, answer);
    });

    this.bot.onText(/\/date/, (...props: any) => this.commandsService.getDate(props, this.bot));
    this.bot.onText(/\/quote/, (...props: any) => this.commandsService.getQuotes(props, this.bot));
  }

}
