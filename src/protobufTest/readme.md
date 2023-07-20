# 安装
npm install protobufjs -d
npm install protobufjs-cli -d

# 编译
npx pbjs -t static-module -w commonjs -o message.js message.proto
npx pbts -o message.d.ts message.js

# 运行
npx tsc index2.ts
node index2.js