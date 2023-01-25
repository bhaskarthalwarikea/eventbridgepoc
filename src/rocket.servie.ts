import { MQClient, MessageProperties } from '@aliyunmq/mq-http-sdk';

export class RocketTest {
  private endpoint =
    'TEST';
  private topic = 'TEST';
<<<<<<< HEAD
  private instanceId = 'MQ_INST_1060444989355026_BYSJiG7X';
=======
<<<<<<< HEAD
  private instanceId = 'MQ_INST_1060444989355026_BYVmstYm';
>>>>>>> 8088e80 (want to keep only this history)
  private accessKeyId = 'LTAI5tR2Bp9iJ1RGGTGiG6w4';
  private accessKeySecret = '3JyViWWFlcnfJPojgZZn3tIQKxAycu';
=======
  private instanceId = 'MQ_INST';
  private accessKeyId = 'AccessKey';
  private accessKeySecret = 'AccessSecret';
>>>>>>> c7d6107 (Update rocket.servie.ts)

  public async sendToTopic() {
    const client = new MQClient(
      this.endpoint,
      this.accessKeyId,
      this.accessKeySecret,
    );

    const producer = client.getProducer(this.instanceId, this.topic);
    try {
      for (let i = 0; i < 2; i++) {
        const msgProps = new MessageProperties();
        msgProps.putProperty('a', i);
        msgProps.messageKey('MessageKey');
        const res = await producer.publishMessage('hello mq.', '', msgProps);
        console.log(
          'Publish message: MessageID:%s,BodyMD5:%s',
          res.body.MessageId,
          res.body.MessageBodyMD5,
        );
      }
    } catch (e) {
      console.log(e);
    }
  }
}
