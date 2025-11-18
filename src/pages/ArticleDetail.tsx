import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router';
import type { Article, Tag } from '~/lib';
import { loadArticle, formatDate, sleep } from '~/utils';
import { Clock, User, ArrowLeft, Share2 } from 'lucide-react';
import { Comments, Loading, RelatedArticles, AuthorCard } from '~/components'

export default function ArticleDetail() {
    const { slug } = useParams<{ slug: string }>();
    const [article, setArticle] = useState<Article | null>(null);
    const [tags, setTags] = useState<Tag[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (slug) fetchArticle();
    }, [slug]);

    const fetchArticle = async () => {
        try {
            setLoading(true);
            await sleep(500); // Simulate network delay

            const _article = await loadArticle(slug!);
            setArticle(_article || null);
            setTags(_article?.tags ?? [])

        } catch (error) {
            console.error('Error fetching article:', error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <Loading />

    if (!article) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Article Not Found</h1>
                    <Link to="/" className="text-blue-600 hover:text-blue-700">
                        Return to Home
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <article className="min-h-screen bg-white mb-16">
            <div className="relative h-[60vh] overflow-hidden">
                <img
                    src={article.cover_image_url}
                    alt={article.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative z-10">
                <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
                    <div className='flex justify-between flex-wrap mb-4'>
                        <Link
                            to="/"
                            className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            <span>Back</span>
                        </Link>

                        {article.category && (
                            <span
                                className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold shadow-md hover:shadow-lg transition-all cursor-pointer"
                                style={{
                                    backgroundColor: `${article.category.color}15`,
                                    color: article.category.color,
                                }}
                            >
                                {article.category.name}
                            </span>
                        )}
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                        {article.title}
                    </h1>

                    <div className="flex flex-wrap items-center gap-6 mb-8 pb-8 border-b border-gray-200">
                        {article.author && (
                            <div className="flex items-center space-x-3">
                                <img
                                    src={article.author.avatar_url}
                                    alt={article.author.name}
                                    className="w-12 h-12 rounded-full"
                                />
                                <div>
                                    <div className="flex items-center space-x-2 text-gray-900 font-semibold">
                                        <User className="w-4 h-4" />
                                        <span>{article.author.name}</span>
                                    </div>
                                    <div className="flex items-center space-x-2 text-gray-500 text-sm">
                                        <Clock className="w-4 h-4" />
                                        <span>{formatDate(article.published_at)}</span>
                                    </div>
                                </div>
                            </div>
                        )}

                        <button
                            className="cursor-pointer ml-auto flex items-center space-x-2 px-4 py-2 border border-gray-300 hover:bg-gray-50 transition-colors rounded-full"
                            aria-label="Share article"
                        >
                            <Share2 className="w-4 h-4" />
                            <span className="text-sm font-medium">Share</span>
                        </button>
                    </div>

                    <div className="prose prose-lg max-w-none mb-8">
                        <p className="text-xl text-gray-700 leading-relaxed mb-6">
                            {article.excerpt}
                        </p>
                        <div className="text-gray-800 leading-relaxed whitespace-pre-line">
                            {article.content}
                        </div>
                    </div>

                    {tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-8 pb-8 border-b border-gray-200">
                            {tags.map((tag) => (
                                <span
                                    key={tag.id}
                                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors cursor-pointer"
                                >
                                    #{tag.name}
                                </span>
                            ))}
                        </div>
                    )}

                    <AuthorCard author={article.author} />

                    <Comments />
                </div>
            </div>

            {article?.category?.id! && <RelatedArticles category_id={article?.category?.id!} count={7} />}
        </article>
    );
}
