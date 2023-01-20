import { Controller, Post, Logger, Body, HttpCode } from '@nestjs/common';
import { Data } from './cats.dto';
import { RocketTest } from './rocket.servie';

@Controller('cats')
export class CatsController {
  constructor(private rocketTest: RocketTest) {}
  logger = new Logger(CatsController.name);

  @Post('simple')
  @HttpCode(200)
  async create(@Body() data: Data) {
    this.logger.log(data);
    return 'Done Well';
  }

  @Post('rocket')
  async postToMQ() {
    this.logger.log('hitting the postto mq');
    await this.rocketTest.sendToTopic();
    return 'posted the messagen to topic';
  }
}
