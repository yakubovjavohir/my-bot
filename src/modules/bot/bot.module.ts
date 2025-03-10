import { Module } from '@nestjs/common';
import { BotService } from './bot.service';
import { MovieCreateService } from '../movie-create/movie-create.service';
import { MovieCreateModule } from '../movie-create/movie-create.module';

@Module({
  imports:[MovieCreateModule],
  providers: [BotService]
})
export class BotModule {}
