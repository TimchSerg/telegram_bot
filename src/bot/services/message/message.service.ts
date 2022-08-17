import { Injectable } from '@nestjs/common';

@Injectable()
export class MessageService {
  getMessage(msg:string): string {
    const textParse = msg.split(' ');

    if(textParse.length > 1) return this.switchPhrase(msg.toLowerCase());
    
    return this.switchWord(msg.toLowerCase());
  }

  switchPhrase(msg: string): string {
    switch(msg) {
      case 'как дела?': 
        return "Все отлично друг!"
      case 'цитату хочу':
        return "Если вы хотите получить любую цитату наберите команду /quote"
      default:
        return "Я молодой, еще не опытный! Пожалуйста спросите что нибудь другое."
    }
  }

  switchWord(msg: string): string {
    switch(msg) {
      case 'привет': 
        return "Привет друг!"
      case 'цитату':
        return "Если вы хотите получить любую цитату наберите команду /quote"
      default:
        return "Я молодой, еще не опытный! Пожалуйста спросите что нибудь другое."
    }
  }
}
