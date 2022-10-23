#!/bin/sh

set -e

pnpm i 

pnpm build

cd dist
npm publish
cd -

echo "✅ Publish completed"
