// Shared helpers for project tags: URL slugs, tag page links and the small
// set of tags that render as a brand icon instead of a text badge.
//
// Icons live in src/icons as plain SVG files with `fill="currentColor"`. Most
// come from simpleicons.org (CC0); c-sharp and aws are monochrome conversions
// of the Wikimedia Commons logos; puc-mg is a hand-drawn academic cap. To add
// one, drop the file there and map its slug below.

import nix from "@/icons/nix.svg";
import proxmox from "@/icons/proxmox.svg";
import svelte from "@/icons/svelte.svg";
import terraform from "@/icons/terraform.svg";
import rust from "@/icons/rust.svg";
import go from "@/icons/go.svg";
import docker from "@/icons/docker.svg";
import typescript from "@/icons/typescript.svg";
import traefik from "@/icons/traefik.svg";
import sqlite from "@/icons/sqlite.svg";
import postgresql from "@/icons/postgresql.svg";
import pucMg from "@/icons/puc-mg.svg";
import tailscale from "@/icons/tailscale.svg";
import redis from "@/icons/redis.svg";
import cSharp from "@/icons/c-sharp.svg";
import aws from "@/icons/aws.svg";
import bun from "@/icons/bun.svg";
import swift from "@/icons/swift.svg";
import rabbitmq from "@/icons/rabbitmq.svg";
import ios from "@/icons/ios.svg";
import linux from "@/icons/linux.svg";
import iot from "@/icons/iot.svg";

/** Tags whose natural slug would be empty or misleading. */
const SLUG_OVERRIDES: Record<string, string> = {
  "C#": "c-sharp",
};

/** "AI agents" -> "ai-agents", "PUC-MG" -> "puc-mg", "C#" -> "c-sharp" */
export function tagSlug(tag: string): string {
  const override = SLUG_OVERRIDES[tag];
  if (override) return override;
  return tag
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function tagHref(locale: string, tag: string): string {
  return `/${locale}/projects/tags/${tagSlug(tag)}/`;
}

/** Brand icons keyed by tag slug. Anything not listed renders as a badge. */
export const TAG_ICONS: Partial<Record<string, typeof nix>> = {
  nix,
  proxmox,
  svelte,
  terraform,
  rust,
  go,
  docker,
  typescript,
  traefik,
  sqlite,
  postgresql,
  "puc-mg": pucMg,
  tailscale,
  redis,
  "c-sharp": cSharp,
  aws,
  bun,
  swift,
  rabbitmq,
  ios,
  linux,
  iot,
};

export const tagIcon = (tag: string) => TAG_ICONS[tagSlug(tag)];
