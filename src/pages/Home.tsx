import { lazy, useEffect, useState } from 'react';
import { type Article } from '~/lib';
import { sleep, loadData } from '~/utils';

const ArticleCard = lazy(() => import('~/components/ArticleCard'))
const HeadlinesTicker = lazy(() => import('~/components/HeadlinesTicker'))
const Loading = lazy(() => import('~/components/Loading'))

export default function Home() {
    const [featuredArticles, setFeaturedArticles] = useState<Article[]>([]);
    const [recentArticles, setRecentArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchArticles();
    }, []);

    const fetchArticles = async () => {
        try {
            await sleep(500); // Simulate network delay

            const articles = (await loadData()).articles as Article[];

            setFeaturedArticles(articles.filter((article: Article) => article.is_featured));

            setRecentArticles(articles.sort((a, b) => (new Date(b.created_at)).getTime() - (new Date(a.created_at)).getTime()).slice(0, 5));

        } catch (error) {
            console.error('Error fetching articles:', error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <Loading />

    return (
        <div className="min-h-screen bg-gray-50">
            <HeadlinesTicker />

            {featuredArticles.length > 0 && (
                <section className="py-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">À LA UNE</h2>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                            {featuredArticles[0] && (
                                <div className="lg:col-span-2">
                                    <ArticleCard article={featuredArticles[0]} featured />
                                </div>
                            )}
                        </div>

                        {featuredArticles.length > 1 && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {featuredArticles.slice(1, 3).map((article) => (
                                    <ArticleCard key={article.id} article={article} featured />
                                ))}
                            </div>
                        )}
                    </div>
                </section>
            )}

            <section className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-3xl font-bold text-gray-900">Derniers Articles</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {recentArticles.map((article) => (
                            <ArticleCard key={article.id} article={article} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
