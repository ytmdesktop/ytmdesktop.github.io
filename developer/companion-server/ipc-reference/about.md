# About

YTMDesktop provides the named pipe `ytmdesktop-ipc`. On linux this will be located under `$XDG_RUNTIME_DIR`, `$TMPDIR`, `$TMP`, `$TEMP`, or `/tmp` checked in that order.

This IPC server mocks our Socket.IO server. Additionally it is also binary protocol based and all communications must send byte data. If any data does not match the expected protocol the connection will be closed.