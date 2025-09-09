# Connecting

Upon connecting to the IPC server you will need to send what API version you would like to use. You can query API versions from [GET /metadata](../reference//metadata.md).

### Select Version Packet

| Name           | Type     | Value                         |
| -------------- | -------- | ----------------------------- |
| OpCode         | int32 LE | 1                             |
| Version Length | int32 LE | len(Version)                  |
| Version        | string   | [API Version](../versions.md) |