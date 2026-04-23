#!/usr/bin/env bash
# Builds both CV PDFs with Nix and places them under ../public/{en,pt}/cv.pdf
set -euo pipefail

cd "$(dirname "$0")"

nix build --print-build-logs
mkdir -p ../public/en ../public/pt
install -m 0644 result/en/cv.pdf ../public/en/cv.pdf
install -m 0644 result/pt/cv.pdf ../public/pt/cv.pdf
echo "Wrote ../public/en/cv.pdf and ../public/pt/cv.pdf"
