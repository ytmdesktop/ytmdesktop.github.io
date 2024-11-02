# GET /metadata

This endpoint returns metadata about the currently running YTMDesktop client. This can be used to discover which API versions are available to safely handle connections.

## Response

| Field       | Type                                                                 | Since Version |
| ----------- | -------------------------------------------------------------------- | ------------- |
| apiVersions | array of [versions](../../versions.md) | 2.0.0         |

### Example

```json
{
  "apiVersions": ["v1"]
}
```
