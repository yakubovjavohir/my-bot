import { Module } from '@nestjs/common';
import { MovieCreateService } from './movie-create.service';
import { MovieCreateController } from './movie-create.controller';
import { MovieRepository } from './movie.repository';
import { SequelizeModule } from '@nestjs/sequelize';
import { MovieCreateEntity } from './entities/movie-create.entity';

@Module({
  imports:[SequelizeModule.forFeature([MovieCreateEntity])],
  controllers: [MovieCreateController],
  providers: [
    {provide:"IMovieRepository", useClass:MovieRepository},
    {provide:"IMovieService", useClass:MovieCreateService},
  ],
  exports:["IMovieService"]
})
export class MovieCreateModule {}
