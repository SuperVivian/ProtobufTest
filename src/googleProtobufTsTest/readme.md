
# ts-proto 一个很好用的ts protobuf库

## 环境准备
```bash
npm install ts-proto
```
protoc环境直接在github.com/protocolbuf… 下载并配置环境变量
## 编写proto文件
```proto
syntax = "proto3";
package person;

message Person {
  string name = 1;
  uint64 age = 2;
}
```
## 生成代码
mac:
```bash
protoc --plugin=./node_modules/.bin/protoc-gen-ts_proto --ts_proto_out=. ./person.proto
```
windows: 
```bash
protoc --plugin=protoc-gen-ts_proto=.\node_modules\.bin\protoc-gen-ts_proto.cmd --ts_proto_out=. ./person.proto
```
./person.proto 换成你对应的proto文件的地址

可以看到proto文件对应的目录下生成了一个ts文件，import即可使用，比如：
```typescript
const bytes = Simple.encode({ name: ..., age: ..., ... }).finish();
const simple = Simple.decode(bytes);
const { name, age } = simple;
```
项目github地址
[github.com/stephenh/ts…](https://github.com/stephenh/ts-proto)

参考：
https://juejin.cn/post/7032187233855602725