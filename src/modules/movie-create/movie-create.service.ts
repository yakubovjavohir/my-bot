import { Inject, Injectable } from '@nestjs/common';
import { CreateMovieCreateDto } from './dto/create-movie-create.dto';
import { IMovieService } from './interface/movie.service';
import { MovieCreateEntity } from './entities/movie-create.entity';
import { MovieRepository } from './movie.repository';

@Injectable()
export class MovieCreateService implements IMovieService{
  constructor(@Inject('IMovieRepository') private readonly movieRepository:MovieRepository){}
  async create(name: CreateMovieCreateDto): Promise<MovieCreateEntity> {
    const data = await this.movieRepository.create(name)
    console.log(data);
    
    return data
  }
  async findAll(): Promise<Array<MovieCreateEntity>> {
    const data = await this.movieRepository.findAll()
    return data
  }
  
}
