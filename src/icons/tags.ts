// Shared helpers for project tags: URL slugs, tag page links and the small
// set of tags that render as a brand icon instead of a text badge.
//
// The icons sit beside this file as plain SVG files with `fill="currentColor"`
// and no width/height, so each usage sizes them. Most come from simpleicons.org
// (CC0); c-sharp and aws are monochrome conversions of the Wikimedia Commons
// logos; puc-mg is a hand-drawn academic cap. To add one, drop the file in this
// folder and map its slug below. The folder also holds plain UI icons (github,
// mail, sun, moon) that are imported directly where they are used.

import nix from "./nix.svg";
import proxmox from "./proxmox.svg";
import svelte from "./svelte.svg";
import terraform from "./terraform.svg";
import rust from "./rust.svg";
import go from "./go.svg";
import docker from "./docker.svg";
import typescript from "./typescript.svg";
import traefik from "./traefik.svg";
import sqlite from "./sqlite.svg";
import postgresql from "./postgresql.svg";
import pucMg from "./puc-mg.svg";
import tailscale from "./tailscale.svg";
import redis from "./redis.svg";
import cSharp from "./c-sharp.svg";
import aws from "./aws.svg";
import bun from "./bun.svg";
import swift from "./swift.svg";
import rabbitmq from "./rabbitmq.svg";
import ios from "./ios.svg";
import linux from "./linux.svg";
import iot from "./iot.svg";

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
