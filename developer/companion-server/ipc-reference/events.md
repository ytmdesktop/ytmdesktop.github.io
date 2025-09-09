# Events

> [!IMPORTANT]
> The only event the IPC server sends is `state-update`

The payload of events follow the Socket.IO reference and vary based on which API version you selected but all events are sent with a common packet structure.

### Event Packet

| Name              | Type     | Value                         |
| ----------------- | -------- | ----------------------------- |
| OpCode            | int32 LE | 2                             |
| Event Name Length | int32 LE | variable                      |
| Payload Length    | int32 LE | variable                      |
| Event Name        | string   |                               |
| Payload           | json     |                               |