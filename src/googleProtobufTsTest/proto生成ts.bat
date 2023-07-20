@echo off
REM 替换以下路径

REM protoc-gen-ts_proto.cmd文件路径
SET cmdPath=..\..\node_modules\.bin\protoc-gen-ts_proto.cmd
REM 生成的ts文件路径
SET outputFilePath=.
REM 输入的proto文件路径
SET inputFilePath=./message.proto
@echo on
protoc --plugin=protoc-gen-ts_proto=%cmdPath% --ts_proto_out=%outputFilePath% %inputFilePath%

@echo success!
pause