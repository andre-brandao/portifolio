# CV

Minimal LaTeX CV for André Brandão, built reproducibly with Nix. Two languages:

- `en.tex` → `public/en/cv.pdf` (served at `/en/cv.pdf`)
- `pt.tex` → `public/pt/cv.pdf` (served at `/pt/cv.pdf`)

Sections: Profile, Experience, Projects, Skills, Education, Languages.

## Build

Build both PDFs and copy them to `../public/` in one step:

```sh
./build.sh
```

Or manually:

```sh
nix build           # writes result/en/cv.pdf and result/pt/cv.pdf
mkdir -p ../public/en ../public/pt
cp -L result/en/cv.pdf ../public/en/cv.pdf
cp -L result/pt/cv.pdf ../public/pt/cv.pdf
```

## Edit

Content lives in `en.tex` and `pt.tex`. For interactive watch mode:

```sh
nix develop
latexmk -interaction=nonstopmode -auxdir=.cache/latex -pdf -pvc en.tex
```
