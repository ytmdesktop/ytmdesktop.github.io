# POST /command

This endpoint controls the player.

## Request

| Field   | Type           | Requirements                         | Since Version |
| ------- | -------------- | ------------------------------------ | ------------- |
| command | string         | must be a valid [command](#commands) | 2.0.0         |
| data    | object \| null | refer to the commands data object    | 2.0.0         |

## Commands

### Play/Pause

Plays or pauses the player depending on the current state at the time of this request.

#### Example

```json
{
  "command": "playPause"
}
```

### Play

Plays the player. This does nothing if the player is currently playing.

#### Example

```json
{
  "command": "play"
}
```

### Pause

Pauses the player. This does nothing if the player is currently paused.

#### Example

```json
{
  "command": "pause"
}
```

### Volume Up

Raises the volume of the player by 10.

#### Example

```json
{
  "command": "volumeUp"
}
```

### Volume Down

Lowers the volume of the player by 10.

#### Example

```json
{
  "command": "volumeDown"
}
```

### Set Volume

Sets the volume of the player.

#### Data

An integer between 0 and 100.

#### Example

```json
{
  "command": "setVolume",
  "data": 50
}
```

### Mute

Mutes the player if it is unmuted.

#### Example

```json
{
  "command": "mute"
}
```

### Unmute

Unmutes the player if it is muted.

#### Example

```json
{
  "command": "unmute"
}
```

### Seek To

Seeks to a specified position in the current video.

#### Data

An integer between 0 and current [video duration seconds](./state#video-object).

#### Example

```json
{
  "command": "seekTo",
  "data": 50
}
```

### Next

Goes to the next video in the queue.

#### Example

```json
{
  "command": "next"
}
```

### Previous

Goes to the previous video in the queue.

#### Example

```json
{
  "command": "previous"
}
```

### Repeat Mode

Sets the repeat mode of the player.

#### Data

An enum value of [repeat mode enum](./state#repeat-mode-enum) except for unknown.

#### Example

```json
{
  "command": "repeatMode",
  "data": 2
}
```

### Shuffle

Shuffles the current queue.

#### Example

```json
{
  "command": "shuffle"
}
```

### Play Queue Index

Plays the video in the queue at the specified index.

#### Data

An integer between 0 and a concatenated array of items and automixItems on the current [queue object](./state#queue-object).

#### Example

```json
{
  "command": "repeatMode",
  "data": 2
}
```

### Toggle Like

Toggles the like status of the current video.

#### Example

```json
{
  "command": "toggleLike"
}
```

### Toggle Dislike

Toggles the dislike status of the current video.

#### Example

```json
{
  "command": "toggleDislike"
}
```

### Change Video <Badge type="danger" text="Since 2.0.6" />

Immediately starts playing the specified video or playlist.

#### Data

> [!IMPORTANT]
> One of `videoId`, `playlistId`, or both **MUST** be provided.

> [!CAUTION]
> YouTube Music's UI will display a blank or broken player if both `videoId` and `playlistId` are provided but the video is not in the playlist or the playlist does not exist

| Field      | Type           | Since Version |
| ---------- | -------------- | ------------- |
| videoId    | string \| null | 2.0.6         |
| playlistId | string \| null | 2.0.6         |

#### Example

```json
{
  "command": "changeVideo",
  "data": {
    "videoId": "dQw4w9WgXcQ",
    "playlistId": "MLCT"
  }
}
```

### Queue Add <Badge type="danger" text="Since 2.1.0" />

Adds the specified video or playlist to the queue at the specified index.

#### Data

> [!IMPORTANT]
> One of `videoId`, `playlistId`, or both **MUST** be provided.

> [!IMPORTANT]
> `index` must be between 0 and the queue length.

| Field      | Type           | Since Version |
| ---------- | -------------- | ------------- |
| videoId    | string \| null | 2.1.0         |
| playlistId | string \| null | 2.1.0         |
| index      | integer        | 2.1.0         |

#### Example

```json
{
  "command": "queueAdd",
  "data": {
    "videoId": "dQw4w9WgXcQ",
    "playlistId": "MLCT",
    "index": 0
  }
}
```

### Queue Remove <Badge type="danger" text="Since 2.1.0" />

Removes the video from the specified index in the queue.

#### Data

> [!IMPORTANT]
> `index` must be between 0 and the queue length.

#### Example

```json
{
  "command": "queueRemove",
  "data": 0
}
```

### Queue Move <Badge type="danger" text="Since 2.1.0" />

Moves the video at the `fromIndex` to the `toIndex`

#### Data

> [!IMPORTANT]
> `fromIndex` and `toIndex` must be between 0 and the queue length.

| Field     | Type    | Since Version |
| --------- | ------- | ------------- |
| fromIndex | integer | 2.1.0         |
| toIndex   | integer | 2.1.0         |

#### Example

```json
{
  "command": "queueMove",
  "data": {
    "fromIndex": 0,
    "toIndex": 0
  }
}
```

## Response

On success returns 204 No Content.
