import type { Author } from '~/lib';

export default function ({ author }: { author: Author | undefined }) {
    if (author) return (
        <div className="bg-gray-50 rounded-xl p-6">
            <div className="flex items-start space-x-4">
                <img
                    src={author.avatar_url}
                    alt={author.name}
                    className="w-16 h-16 rounded-full"
                />
                <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                        {author.name}
                    </h3>
                    <p className="text-gray-600">{author.bio}</p>
                </div>
            </div>
        </div>
    )
}