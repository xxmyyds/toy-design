#!/bin/sh

set -e

pnpm i --frozen-lockfile

pnpm build

cd dist
npm publish
cd -

echo "✅ Publish completed"
