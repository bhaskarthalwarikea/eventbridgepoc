import { Test, TestingModule } from '@nestjs/testing';
import { CatsController } from './cats.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: CatsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CatsController],
      providers: [AppService],
    }).compile();

    appController = app.get<CatsController>(CatsController);
  });
});
