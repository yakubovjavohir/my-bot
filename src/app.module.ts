import { Module } from '@nestjs/common';
import { BotModule } from './modules/bot/bot.module';
import { MovieCreateModule } from './modules/movie-create/movie-create.module';
import { Sequelize } from 'sequelize-typescript';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forRoot({
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'ok',
    database: 'movies',
    synchronize:true,
    autoLoadModels:true,
  }),BotModule, MovieCreateModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
