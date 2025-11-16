import { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router';
import type { Article, Category } from '../lib';
import ArticleCard from '../components/ArticleCard';
import { sleep, loadArticles, loadCategory } from '~/utils';

export default function Category() {
    const { slug } = useParams<{ slug: string }>();
    const [category, setCategory] = useState<Category | null>(null);
    const [articles, setArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (slug) {
            fetchCategoryArticles();
        }
    }, [slug]);

    const fetchCategoryArticles = async () => {
        try {
            setLoading(true);

            await sleep(500); // Simulate network delay

            const _category = await loadCategory(slug!)

            setCategory(_category || null);

            const _articles = await loadArticles({ category_id: _category?.id });
            setArticles(_articles);

        } catch (error) {
            console.error('Error fetching category articles:', error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900" />
            </div>
        );
    }

    if (!slug) {
        return <Navigate to="/" />;
    }

    if (!category) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Category Not Found</h1>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <section
                className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden"
            >
                <div
                    className="absolute inset-0 opacity-10"
                    style={{
                        background: `radial-gradient(circle at 50% 50%, ${category.color} 0%, transparent 70%)`,
                    }}
                />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-3xl">
                        <div
                            className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4"
                            style={{
                                backgroundColor: `${category.color}30`,
                                color: category.color,
                            }}
                        >
                            Category
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold mb-4">{category.name}</h1>
                        <p className="text-xl text-gray-300">{category.description}</p>
                        <div className="mt-6 text-gray-400">
                            {articles.length} {articles.length === 1 ? 'article' : 'articles'}
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {articles.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {articles.map((article) => (
                                <ArticleCard key={article.id} article={article} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-16">
                            <p className="text-xl text-gray-600">No articles found in this category yet.</p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
