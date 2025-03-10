import { Sequelize } from "sequelize";
import { CreateMovieCreateDto } from "./dto/create-movie-create.dto";
import { MovieCreateEntity } from "./entities/movie-create.entity";
import { IMovieRepository } from "./interface/movie.repository";
import { InjectModel } from "@nestjs/sequelize";

export class MovieRepository implements IMovieRepository {
    constructor(
        @InjectModel(MovieCreateEntity)
        private readonly movieModel: typeof MovieCreateEntity,
    ){}
    async create(movie_name: CreateMovieCreateDto): Promise<MovieCreateEntity> {
        const data = await this.movieModel.create({...movie_name})
        return data
    }
    async findAll(): Promise<Array<MovieCreateEntity>> {
        const data = await this.movieModel.findAll()
        return data
    }
}