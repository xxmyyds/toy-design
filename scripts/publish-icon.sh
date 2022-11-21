#!/bin/sh

set -e

pnpm i 

pnpm build:icon

cd dist-icons
npm publish
cd -

echo "✅ Publish completed"
