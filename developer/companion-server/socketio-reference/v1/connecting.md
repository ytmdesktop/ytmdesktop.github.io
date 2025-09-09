# Connecting

Connecting to the Socket.IO server can be done by peforming a connection to `ws://localhost:9863/api/v1/realtime`[^1]. If your Socket.IO library doesn't do automatic namespace translation then specify the namespace as `/api/v1/realtime`.

You must specify websocket only transparent in the Socket.IO options as the server does not accept polling.
```json
{
    // ... your config
    "transports": ["websocket"]
}
```

# Authentication

While connecting you **MUST** specify your authentication which you received from [POST /auth/request](../auth-request.md).
```json
{
    // ... your config + transports
    "auth": {
        "token": "YOUR_TOKEN"
    }
}
```

[^1]: Some operating systems such as Windows may use an IPv6 address for `localhost`. The server is only listening on an IPv4 address and will result in a connection failure.