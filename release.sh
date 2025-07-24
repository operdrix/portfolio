#!/bin/bash

set -e

if [ -z "$1" ]; then
  echo "Usage: ./release.sh <version>"
  echo "Exemple: ./release.sh 1.2.3"
  exit 1
fi

VERSION=$1

echo "Bumping version to $VERSION..."
npm version $VERSION --no-git-tag-version
git add package.json package-lock.json
git commit -m "chore: bump version to $VERSION"
git tag v$VERSION
git push origin main
git push origin v$VERSION

echo "Release $VERSION poussée avec succès !"
