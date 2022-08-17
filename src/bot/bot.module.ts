import { Module } from '@nestjs/common';
import { BotService } from './bot.service';
import { BotController } from './bot.controller';
import { ConfigModule } from '@nestjs/config';
import { MessageService } from './services/message/message.service';
import { CommandsService } from './services/commands/commands.service';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [BotController],
  providers: [
    BotService, 
    MessageService,
    CommandsService
  ]
})
export class BotModule {}
