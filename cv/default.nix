{
  pkgs ? import <nixpkgs> { },
  ...
}:
pkgs.stdenv.mkDerivation {
  name = "cv";
  src = ./.;
  buildInputs = with pkgs; [
    texliveFull
  ];
  buildPhase = ''
    mkdir -p .cache/latex
    for lang in en pt; do
      latexmk -interaction=nonstopmode -auxdir=.cache/latex -pdf "$lang.tex"
    done
  '';
  installPhase = ''
    mkdir -p $out/en $out/pt
    cp en.pdf $out/en/cv.pdf
    cp pt.pdf $out/pt/cv.pdf
  '';
}
