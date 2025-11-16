export const categories = [
    { name: 'Technology', slug: 'technology' },
    { name: 'Business', slug: 'business' },
    { name: 'Science', slug: 'science' },
    { name: 'Culture', slug: 'culture' },
    { name: 'Politics', slug: 'politics' },
    { name: 'Sports', slug: 'sports' },
];

export type Article = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  cover_image_url: string;
  author_id: string;
  category_id: string;
  published_at: string;
  is_featured: boolean;
  views_count: number;
  created_at: string;
  updated_at: string;
  author?: Author;
  category?: Category;
  tags?: Tag[];
};

export type Author = {
  id: string;
  name: string;
  bio: string;
  avatar_url: string;
  email: string;
  created_at: string;
};

export type Category = {
  id: string;
  name: string;
  slug: string;
  description: string;
  color: string;
  created_at: string;
};

export type Tag = {
  id: string;
  name: string;
  slug: string;
  created_at: string;
};
