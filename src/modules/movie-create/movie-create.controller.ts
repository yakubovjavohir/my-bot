import { Controller, Get, Post, Body, Patch, Param, Delete, Inject } from '@nestjs/common';
import { MovieCreateService } from './movie-create.service';
import { CreateMovieCreateDto } from './dto/create-movie-create.dto';

@Controller('movie-create')
export class MovieCreateController {
  constructor(@Inject('IMovieService') private readonly movieCreateService: MovieCreateService) {}

  @Post()
  async create(@Body() dtp: CreateMovieCreateDto) {
    const data = await this.movieCreateService.create(dtp)
    const resdata = {
      message:"created movie",
      data
    }
    return resdata
  }

  @Get()
  async findAll() {
    const data = await this.movieCreateService.findAll()
    const resdata = {
      message:"success",
      data
    }
    return resdata
  }

}
