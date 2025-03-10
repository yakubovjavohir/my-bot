import { Test, TestingModule } from '@nestjs/testing';
import { MovieCreateService } from './movie-create.service';

describe('MovieCreateService', () => {
  let service: MovieCreateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MovieCreateService],
    }).compile();

    service = module.get<MovieCreateService>(MovieCreateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
