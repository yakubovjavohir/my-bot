import { Test, TestingModule } from '@nestjs/testing';
import { MovieCreateController } from './movie-create.controller';
import { MovieCreateService } from './movie-create.service';

describe('MovieCreateController', () => {
  let controller: MovieCreateController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MovieCreateController],
      providers: [MovieCreateService],
    }).compile();

    controller = module.get<MovieCreateController>(MovieCreateController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
