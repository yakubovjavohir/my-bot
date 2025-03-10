import { CreateMovieCreateDto } from "../dto/create-movie-create.dto";
import { MovieCreateEntity } from "../entities/movie-create.entity";

export interface IMovieService {
    create(name:CreateMovieCreateDto):Promise<MovieCreateEntity>
    findAll():Promise<Array<MovieCreateEntity>>
}