export type Enum = {
  type: string;
  enum: string[];
};

export type Slug = {
  id: number;
  documentId: string;
  slug: string;
};

export type Req<T> = {
  data: T;
};
