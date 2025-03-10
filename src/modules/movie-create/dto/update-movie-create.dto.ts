import { PartialType } from '@nestjs/mapped-types';
import { CreateMovieCreateDto } from './create-movie-create.dto';

export class UpdateMovieCreateDto extends PartialType(CreateMovieCreateDto) {}
