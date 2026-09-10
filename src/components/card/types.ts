import type { ImageMetadata } from "astro";

export interface CardProps extends Record<string, any> {
  title: string;
  img: ImageMetadata | undefined;
  desc: string;
  href: string;
  badge?: string;
  tags?: string[];
}
