#!/usr/bin/env bash
# Serve the MBS mockup locally. Optional first argument is the port (default 8765).
#
# The site also works by double-clicking index.html — a server is only needed if you
# want clean URLs in the address bar or want to share it on the local network.
set -euo pipefail
cd "$(dirname "$0")"
PORT="${1:-8765}"
echo "MBS website → http://localhost:${PORT}   (Ctrl-C to stop)"
command -v open >/dev/null && (sleep 1 && open "http://localhost:${PORT}" >/dev/null 2>&1 &)
exec python3 -m http.server "${PORT}"
