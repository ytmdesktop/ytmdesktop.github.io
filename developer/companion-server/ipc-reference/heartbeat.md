# Heartbeat

While connected to the IPC server you must heartbeat to keep the connection open otherwise the server will close it. This is done by sending ping packets at an interval of 15 seconds.

### Ping

| Name              | Type     | Value |
| ----------------- | -------- | ----- |
| OpCode            | int32 LE | 3     |

### Pong

| Name              | Type     | Value |
| ----------------- | -------- | ----- |
| OpCode            | int32 LE | 4     |