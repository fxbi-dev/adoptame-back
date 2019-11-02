import { Module } from '@nestjs/common';
import { MessagesProvider } from './messages.model';

@Module({
  providers: [MessagesProvider],
  exports: [MessagesProvider],
})
export class ChatModule {}
