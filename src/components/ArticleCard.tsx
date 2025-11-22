import { Link } from 'react-router';
import { Clock, User } from 'lucide-react';
import { type Article } from '~/lib';
import { lazy } from 'react';

const ProfileImg = lazy(() => import('~/components/profile-img'));

interface ArticleCardProps {
    article: Article;
    featured?: boolean;
}

export default function ArticleCard({ article, featured = false }: ArticleCardProps) {
    const formatDate = (date: string) => {
        return new Date(date).toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
        });
    };

    if (featured) {
        return (
            <Link
                to={`/article/${article.slug}`}
                className="group relative block overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1"
            >
                <div className="aspect-[16/9] overflow-hidden">
                    <img
                        src={article.cover_image_url}
                        alt={article.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    {article.category && (
                        <span
                            className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 backdrop-blur-sm"
                            style={{ backgroundColor: `${article.category.color}20`, color: article.category.color }}
                        >
                            {article.category.name}
                        </span>
                    )}

                    <h2 className="text-3xl md:text-4xl font-bold mb-3 leading-tight group-hover:text-gray-200 transition-colors">
                        {article.title}
                    </h2>

                    <p className="text-gray-200 text-lg mb-4 line-clamp-2">
                        {article.excerpt}
                    </p>

                    <div className="flex items-center space-x-4 text-sm">
                        {article.author && (
                            <div className="flex items-center space-x-2">
                                <User className="w-4 h-4" />
                                <span>{article.author.name}</span>
                            </div>
                        )}
                        <div className="flex items-center space-x-2">
                            <Clock className="w-4 h-4" />
                            <span>{formatDate(article.published_at)}</span>
                        </div>
                    </div>
                </div>
            </Link>
        );
    }

    return (
        <Link
            to={`/article/${article.slug}`}
            className="group block bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
        >
            <div className="aspect-[16/9] overflow-hidden">
                <img
                    src={article.cover_image_url}
                    alt={article.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
            </div>

            <div className="p-6 flex flex-col h-64">
                {article.category && (
                    <span
                        className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 w-fit backdrop-blur-sm    hover:shadow-lg transition-all cursor-pointer"
                        style={{ backgroundColor: `${article.category.color}15`, color: article.category.color }}
                    >
                        {article.category.name}
                    </span>
                )}

                <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-gray-700 transition-colors">
                    {article.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>

                <div className="flex items-center justify-between text-sm text-gray-500 mt-auto">
                    {article.author && (
                        <div className="flex items-center space-x-2">
                            <ProfileImg
                                src={article.author.avatar_url}
                                alt={article.author.name}
                                className="w-6 h-6 rounded-full"
                            />

                            <span>{article.author.name}</span>
                        </div>
                    )}
                    <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{formatDate(article.published_at)}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
}
