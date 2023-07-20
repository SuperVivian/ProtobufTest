"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protobuf = require("protobufjs");
protobuf.load("message.proto", function (err, root) {
    if (err)
        throw err;
    // 获取消息类型
    var MyMessage = root.lookupType("MyMessage");
    // 创建消息实例
    var myMessage = MyMessage.create({
        name: "Alice",
        age: 30,
    });
    // 序列化消息为二进制格式
    var buffer = MyMessage.encode(myMessage).finish();
    // 反序列化二进制数据为消息实例
    var decodedMessage = MyMessage.decode(buffer);
    // 将消息转换为 JSON 格式
    var json = MyMessage.toObject(decodedMessage, {
        defaults: true,
        arrays: true,
        objects: true,
    });
    console.log(json);
});
