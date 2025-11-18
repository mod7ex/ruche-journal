import type { Article, Category } from '~/lib';

export async function loadData() {
  try {
    const response = await fetch('/data.json');
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error loading JSON:', error);
  }
}

export async function loadArticles({tag_id, author_id, category_id}:{tag_id?: string; author_id?: string; category_id?: string} = {}) {
  let articles = (await loadData()).articles as Article[];

  if (tag_id) {
    articles = articles.filter((article: Article) => article.tags?.some(tag => tag.id === tag_id));
  }

  if (author_id) {
    articles = articles.filter((article: Article) => article.author_id === author_id);
  }

  if (category_id) {
    articles = articles.filter((article: Article) => article.category_id === category_id);
  }

  return articles;
}

export async function loadArticle(slug: string) {
  const articles = (await loadData()).articles as Article[];

  return articles.find((article: Article) => article.slug === slug);
}

export async function loadCategory(slug: string) {
  const categories = (await loadData()).categories as Category[];

  return categories.find((_category: Category) => _category.slug === slug);
}

/**
 * 
 * @param category_id category id
 * @param count number of articles to return
 * @returns latest articles in same category
 */
export async function loadRelatedArticles(category_id: string, count: number) {
  let articles = (await loadData()).articles as Article[];

  articles = articles.filter((article: Article) => article.category?.id === category_id);

  return articles.sort((a, b) => (new Date(b.created_at)).getTime() - (new Date(a.created_at)).getTime()).slice(0, count)
}

export function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export const formatDate = (payload: number | string) => {
  if (typeof 6 == 'number') {
    const date = new Date((payload as number) * 1000);

    return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
  } else {
  return new Date(payload).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
  });
  }
}