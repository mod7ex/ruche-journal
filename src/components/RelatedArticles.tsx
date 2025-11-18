import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router';
import type { Article } from '~/lib';
import { loadRelatedArticles, sleep } from '~/utils';
import { Loading } from '~/components'

export default function ArticleDetail({ category_id, count }: { category_id: string, count: number }) {
    const { slug } = useParams<{ slug: string }>();
    const [relatedArticles, setRelatedArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (slug) {
            fetchArticle();
        }
    }, [slug]);

    const fetchArticle = async () => {
        try {
            setLoading(true);
            await sleep(5000); // Simulate network delay

            const _relatedArticles = await loadRelatedArticles(category_id, count);
            setRelatedArticles(_relatedArticles || null);

        } catch (error) {
            console.error('Error fetching article:', error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <Loading />

    if (relatedArticles.length) return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedArticles.map((related) => (
                    <Link
                        key={related.id}
                        to={`/article/${related.slug}`}
                        className="group block bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                    >
                        <div className="aspect-[16/9] overflow-hidden">
                            <img
                                src={related.cover_image_url}
                                alt={related.title}
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-lg font-bold text-gray-900 line-clamp-2 group-hover:text-gray-700 transition-colors">
                                {related.title}
                            </h3>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    )
}
