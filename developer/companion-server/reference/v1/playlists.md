# GET /playlists

This endpoint gets the current logged in users playlists.

## Response

array of [playlist object](#playlist-object)

### Playlist Object

| Field | Type   | Since Version |
| ----- | ------ | ------------- |
| id    | string | 2.0.0         |
| title | string | 2.0.0         |

### Example

```json
[
  {
    "id": "LM",
    "title": "Liked Music"
  },
  {
    "id": "ExamplePlaylistId",
    "title": "Example Playlist Title"
  }
]
```
