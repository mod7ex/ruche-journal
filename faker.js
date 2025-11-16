import { faker } from '@faker-js/faker';

import fs from 'fs';

const _categories = [
    { name: 'Technology', slug: 'technology' },
    { name: 'Business', slug: 'business' },
    { name: 'Science', slug: 'science' },
    { name: 'Culture', slug: 'culture' },
    { name: 'Politics', slug: 'politics' },
    { name: 'Sports', slug: 'sports' },
];

export function generateAuthors(count) {
  return Array.from({ length: count }, () => ({
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    bio: faker.lorem.paragraph(),
    avatar_url: faker.image.avatar(),
    email: faker.internet.email(),
    created_at: faker.date.past().toISOString(),
  }));
}

export function generateCategories() {
  return _categories.map(_cat => ({
    id: faker.string.uuid(),
    name: _cat.name,
    slug: _cat.slug,
    description: faker.commerce.productDescription(),
    color: faker.color.rgb(),
    created_at: faker.date.past().toISOString(),
  }));
}

export function generateTags(count) {
  return Array.from({ length: count }, () => {
    const name = faker.hacker.noun();
    return {
      id: faker.string.uuid(),
      name,
      slug: faker.helpers.slugify(name).toLowerCase(),
      created_at: faker.date.past().toISOString(),
    };
  });
}

export function generateArticles(count, authors, categories, tags)
{
  return Array.from({ length: count }, () => {
    const author = faker.helpers.arrayElement(authors);
    const category = faker.helpers.arrayElement(categories);
    const articleTags = faker.helpers.arrayElements(tags, faker.number.int({ min: 1, max: 4 }));

    return {
      id: faker.string.uuid(),
      title: faker.lorem.sentence(),
      slug: faker.lorem.slug(),
      excerpt: faker.lorem.sentences(2),
      content: faker.lorem.paragraphs(4),
      cover_image_url: faker.image.urlLoremFlickr({ category: 'tech' }),
      author_id: author.id,
      category_id: category.id,
      published_at: faker.date.past().toISOString(),
      is_featured: faker.datatype.boolean(),
      views_count: faker.number.int({ min: 10, max: 10000 }),
      created_at: faker.date.past().toISOString(),
      updated_at: faker.date.recent().toISOString(),
      author,
      category,
      tags: articleTags,
    };
  });
}

export function generateDataset() {
  const authors = generateAuthors(10);
  const categories = generateCategories();
  const tags = generateTags(20);
  const articles = generateArticles(100, authors, categories, tags);

  return {
    authors,
    categories,
    tags,
    articles,
  };
}

fs.writeFileSync("./public/data.json", JSON.stringify(generateDataset(), null, 2));
