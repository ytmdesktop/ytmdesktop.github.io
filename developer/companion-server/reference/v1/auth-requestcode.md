# POST /auth/requestcode

This endpoint is used to get an authorization code which can be exchanged for an authorization token to the companion server.

## Request

| Field      | Type   | Requirements                                       | Since Version |
| ---------- | ------ | -------------------------------------------------- | ------------- |
| appId      | string | lowercase alphanumeric, 2-32 characters            | 2.0.0         |
| appName    | string | 2-32 characters                                    | 2.0.0         |
| appVersion | string | <a href="https://semver.org/">semver</a> compliant | 2.0.0         |

### Example

```json
{
  "appId": "my-example-companion",
  "appName": "Example YTMDesktop Companion",
  "appVersion": "0.0.1-dev"
}
```

## Response

| Field | Type   | Since Version |
| ----- | ------ | ------------- |
| code  | string | 2.0.0         |

### Example

```json
{
  "code": "1337"
}
```
