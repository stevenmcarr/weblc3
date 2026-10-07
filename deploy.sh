#!/bin/sh
# Builds the static site and publishes it to the gh-pages branch, which
# GitHub Pages serves at https://<owner>.github.io/weblc3/.
set -e
cd "$(dirname "$0")"
npm ci
BASE_PATH=/weblc3 npm run build
# Keep GitHub Pages from running Jekyll, which drops the _app directory.
touch build/.nojekyll
cd build
git init -q -b gh-pages
git add -A
git commit -q -m "Deploy WebLC3"
git push -f "$(git -C .. remote get-url origin)" gh-pages
rm -rf .git
