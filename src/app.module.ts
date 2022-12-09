import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { AppService } from './app.service';
import { RocketTest } from './rocket.servie';

@Module({
  imports: [],
  controllers: [CatsController],
  providers: [AppService, RocketTest],
})
export class AppModule {}
