# GET /state

This endpoint gets the current state of the player.

## Response

| Field      | Type                                  | Since Version |
| ---------- | ------------------------------------- | ------------- |
| player     | [player object](#player-object)       | 2.0.0         |
| video      | [video object](#video-object) \| null | 2.0.0         |
| playlistId | string \| null                        | 2.0.0         |

### Example

```json
{
  "player": {
    "trackState": 1,
    "videoProgress": 112.149331,
    "volume": 100,
    "muted": false,
    "adPlaying": false,
    "queue": {
      "autoplay": true,
      "items": [
        {
          "thumbnails": [
            {
              "url": "https://example.com/thumbnail.png",
              "width": 60,
              "height": 60
            }
          ],
          "title": "Example Title",
          "author": "Example Author",
          "duration": "3:32",
          "selected": true,
          "videoId": "dQw4w9WgXcQ",
          "counterparts": null
        }
      ],
      "automixItems": [
        {
          "thumbnails": [
            {
              "url": "https://example.com/thumbnail.png",
              "width": 60,
              "height": 60
            }
          ],
          "title": "Example Title",
          "author": "Example Author",
          "duration": "3:32",
          "selected": false,
          "videoId": "dQw4w9WgXcQ",
          "counterparts": [
            {
              "thumbnails": [
                {
                  "url": "https://example.com/thumbnail.png",
                  "width": 400,
                  "height": 225
                }
              ],
              "title": "Example Title",
              "author": "Example Author",
              "duration": "3:32",
              "selected": true,
              "videoId": "dQw4w9WgXcQ",
              "counterparts": null
            }
          ]
        }
      ],
      "isGenerating": false,
      "isInfinite": false,
      "repeatMode": 0,
      "selectedItemIndex": 0
    }
  },
  "video": {
    "author": "Example Author",
    "channelId": "UCuAXFkgsw1L7xaCfnd5JJOw",
    "title": "Example Title",
    "album": "Example Album",
    "albumId": "MPREexample",
    "likeStatus": 1,
    "thumbnails": [
      {
        "url": "https://example.com/thumbnail.png",
        "width": 60,
        "height": 60
      }
    ],
    "durationSeconds": 199,
    "id": "dQw4w9WgXcQ",
    "isLive": false,
    "videoType": 0,
    "metadataFilled": true
  },
  "playlistId": null
}
```

## Player Object

| Field         | Type                                  | Since Version |
| ------------- | ------------------------------------- | ------------- |
| trackState    | [track state enum](#track-state-enum) | 2.0.0         |
| videoProgress | float                                 | 2.0.0         |
| volume        | string                                | 2.0.0         |
| adPlaying     | boolean                               | 2.0.0         |
| queue         | [queue object](#queue-object) \| null | 2.0.0         |

### Track State Enum

| Value | Description |
| ----- | ----------- |
| -1    | Unknown     |
| 0     | Paused      |
| 1     | Playing     |
| 2     | Buffering   |

### Queue Object

| Field             | Type                                    | Since Version |
| ----------------- | --------------------------------------- | ------------- |
| autoplay          | boolean                                 | 2.0.0         |
| items             | [queue item object](#queue-item-object) | 2.0.0         |
| autoMixItems      | [queue item object](#queue-item-object) | 2.0.0         |
| isGenerating      | boolean                                 | 2.0.0         |
| isInfinite        | boolean                                 | 2.0.0         |
| repeatMode        | [repeat mode enum](#repeat-mode-enum)   | 2.0.0         |
| selectedItemIndex | integer                                 | 2.0.0         |

#### Queue Item Object

| Field        | Type                                                     | Since Version |
| ------------ | -------------------------------------------------------- | ------------- |
| thumbnails   | array of [thumbnail object](#thumbnail-object)           | 2.0.0         |
| title        | string                                                   | 2.0.0         |
| author       | string                                                   | 2.0.0         |
| duration     | string                                                   | 2.0.0         |
| selected     | boolean                                                  | 2.0.0         |
| videoId      | string                                                   | 2.0.0         |
| counterparts | array of [queue item object](#queue-item-object) \| null | 2.0.0         |

## Video Object

| Field           | Type                                           | Since Version |
| --------------- | ---------------------------------------------- | ------------- |
| author          | string                                         | 2.0.0         |
| channelId       | string                                         | 2.0.0         |
| title           | string                                         | 2.0.0         |
| album           | string \| null                                 | 2.0.0         |
| albumId         | string \| null                                 | 2.0.0         |
| likeStatus      | [like status enum](#like-status-enum) \| null  | 2.0.0         |
| thumbnails      | array of [thumbnail object](#thumbnail-object) | 2.0.0         |
| durationSeconds | integer                                        | 2.0.0         |
| id              | string                                         | 2.0.0         |
| isLive          | boolean                                        | 2.0.6         |
| videoType       | [video type enum](#video-type-enum)            | 2.0.6         |
| metadataFilled  | boolean                                        | 2.0.6         |

### Like Status Enum

| Value | Description |
| ----- | ----------- |
| -1    | Unknown     |
| 0     | Dislike     |
| 1     | Indifferent |
| 2     | Like        |

### Video Type Enum

| Value | Description |
| ----- | ----------- |
| -1    | Unknown     |
| 0     | Audio       |
| 1     | Video       |
| 2     | Uploaded    |
| 3     | Podcast     |

## Thumbnail Object

| Field  | Type    | Since Version |
| ------ | ------- | ------------- |
| url    | string  | 2.0.0         |
| width  | integer | 2.0.0         |
| height | integer | 2.0.0         |
