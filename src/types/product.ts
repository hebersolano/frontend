export interface Product {
  id: number;
  documentId: string;
  productName: string;
  slug: string;
  description: string;
  active: boolean;
  price: number;
  origin: string;
  isFeatured: boolean;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string | undefined;
  roast: string;
  images: Image[];
}

export interface Category {
  id: number;
  documentId: string;
  name: string;
  slug: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string | undefined;
  image: Image;
}

 export interface Image {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | undefined;
  provider: string;
  provider_metadata: string | undefined;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string | undefined;
}

interface Formats {
  small: Small;
  medium: Medium;
  thumbnail: Thumbnail;
}

interface Small {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: string | undefined;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
}

interface Medium {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: string | undefined;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
}

interface Thumbnail {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: string | undefined;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
}
