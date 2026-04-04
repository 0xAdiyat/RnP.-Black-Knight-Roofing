import type { ImageMetadata } from 'astro';

export interface CTAData {
  badge?: string;
  title?: string;
  excerpt?: string;
  author?: {
    name: string;
    avatar: string;
    title: string;
  };
  button?: {
    label: string;
    href: string;
  };
  handwrittenText?: string;
  backgroundImage?: ImageMetadata;
}
