import { CreateMovieCreateDto } from "../dto/create-movie-create.dto";
import { MovieCreateEntity } from "../entities/movie-create.entity";

export interface IMovieRepository {
    create(movie_name:CreateMovieCreateDto):Promise<MovieCreateEntity>
    findAll():Promise<Array<MovieCreateEntity>>
}