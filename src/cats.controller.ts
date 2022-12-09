import { Controller, Get, Post, Logger, Body, HttpCode, Res } from '@nestjs/common';
import { CatsDto } from './cats.dto';
import { Response } from 'express';
import { RocketTest } from './rocket.servie';

@Controller('cats')
export class CatsController {
  constructor(private rocketTest: RocketTest) {}
  logger = new Logger(CatsController.name);

  @Post('simple')
  @HttpCode(200)
  create(@Body() catsDto: CatsDto, @Res() res: Response) {
    this.logger.log(catsDto);
    res.status(204).send();
  }

  @Post('rocket')
  async postToMQ() {
    this.logger.log('hitting the postto mq');
    await this.rocketTest.sendToTopic();
    return 'posted the messagen to topic';
  }
}
