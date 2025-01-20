export interface CardProps extends Record<string, any> {
  title: string;
  img:
    | {
        src: string;
        width: number;
        height: number;
        format:
          | "png"
          | "jpg"
          | "jpeg"
          | "tiff"
          | "webp"
          | "gif"
          | "svg"
          | "avif";
      }
    | undefined;
  desc: string;
  href: string;
  badge?: string;
}
