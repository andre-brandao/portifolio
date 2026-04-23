{
  description = "Portfolio dev shell and CV build";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
  };

  outputs = { self, nixpkgs }:
    let
      systems = [
        "x86_64-linux"
        "aarch64-linux"
        "x86_64-darwin"
        "aarch64-darwin"
      ];
      forAllSystems = f:
        nixpkgs.lib.genAttrs systems (system: f nixpkgs.legacyPackages.${system});
    in {
      devShells = forAllSystems (pkgs:
        let
          build-cv = pkgs.writeShellScriptBin "build-cv" ''
            set -euo pipefail
            root=$(${pkgs.git}/bin/git rev-parse --show-toplevel)
            cd "$root"
            nix build --print-build-logs .#cv
            mkdir -p public/en public/pt
            install -m 0644 result/en/cv.pdf public/en/cv.pdf
            install -m 0644 result/pt/cv.pdf public/pt/cv.pdf
            echo "Wrote public/en/cv.pdf and public/pt/cv.pdf"
          '';
        in {
          default = pkgs.mkShell {
            packages = with pkgs; [
              git
              nodejs_22
              pnpm
              typescript
              build-cv
            ];
          };
        });

      packages = forAllSystems (pkgs: {
        cv = pkgs.callPackage ./cv/default.nix { };
      });
    };
}
