# POST /auth/requestcode

This endpoint is used to get an authorization token from the companion server. This token is permanent but revocable by the user. It is recommended that you store this token in a safe manner.

## Request

| Field | Type   | Requirements                         | Since Version |
| ----- | ------ | ------------------------------------ | ------------- |
| appId | string | appId used when requesting this code | 2.0.0         |
| code  | string | numeric, 0-4 characters              | 2.0.0         |

### Example

```json
{
  "appId": "my-example-companion",
  "code": "1337"
}
```

## Response

| Field | Type   | Since Version |
| ----- | ------ | ------------- |
| token | string | 2.0.0         |

### Example

```json
{
  "token": "ea845423977fcbe9535547db2c09134b5087c352"
}
```
