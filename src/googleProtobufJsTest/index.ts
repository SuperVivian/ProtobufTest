import { MyMessage } from "./message_pb";

// 创建消息实例
const myMessage = new MyMessage();
myMessage.setName("Alice");
myMessage.setAge(30);

// 序列化消息为二进制格式
const buffer = myMessage.serializeBinary();

// 反序列化二进制数据为消息实例
const decodedMessage = MyMessage.deserializeBinary(buffer);

// 将消息转换为 JSON 格式
const json = decodedMessage.toObject();

console.log(json);
