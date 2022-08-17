import { Injectable } from '@nestjs/common';

@Injectable()
export class CommandsService {
  getDate(props: any, bot: any) {
    const msg = props[0];
    bot.sendMessage(msg.from.id, `Текущая дата: ${new Date()}`);
  }

  getQuotes(props: any, bot: any) {
    const msg = props[0];
    bot.sendMessage(msg.from.id, 
      `Как стыдно, что люди не могут полюбить друг друга так, чтобы пронести эту любовь через всю жизнь, и вместо этого начинают искать кого-то другого… как стыдно!  Рэй Брэдбери.`);
  }
}
