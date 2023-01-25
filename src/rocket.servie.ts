import { MQClient, MessageProperties } from '@aliyunmq/mq-http-sdk';

export class RocketTest {
  private endpoint = 'TEST';
  private topic = 'TEST';

  private instanceId = 'MQ_INST';
  private accessKeyId = 'AccessKey';
  private accessKeySecret = 'AccessSecret';


  public async sendToTopic() {
    const client = new MQClient(
      this.endpoint,
      this.accessKeyId,
      this.accessKeySecret,
    );

    const producer = client.getProducer(this.instanceId, this.topic);
    try {
      for (let i = 0; i < 1; i++) {
        const msgProps = new MessageProperties();
        msgProps.messageKey('MessageKey' + '-' +i);
        msgProps.startDeliverTime(Date.now() + 120 * 1000);
        const res = await producer.publishMessage('hello mq.' + '-' +Date.now(), '', msgProps);
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
