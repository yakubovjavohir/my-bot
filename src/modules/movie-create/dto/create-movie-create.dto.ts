import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateMovieCreateDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    name:string
}
