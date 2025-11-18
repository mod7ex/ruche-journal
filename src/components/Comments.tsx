import { LogInIcon, LogOutIcon, TriangleIcon, RectangleGogglesIcon } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';
import { handleGoogleLogin, auth, handleSignOut } from "~/firebase";
import { useSelector, useDispatch } from 'react-redux'
import { setUser } from '~/store/user'
import { onAuthStateChanged } from "firebase/auth";
import GoogleSignIn from '/signin-google.png';

const _comments = [
    {
        id: 1,
        name: "Lena Walters",
        avatar: "https://i.pravatar.cc/50?img=32",
        date: "October 7, 2025",
        text: "This was a super interesting read! I love how clearly everything was explained.",
    },
    {
        id: 2,
        name: "Marcos Trent",
        avatar: "https://i.pravatar.cc/50?img=12",
        date: "October 8, 2025",
        text: "I didn’t know about this before. Thanks for sharing!",
    },
    {
        id: 3,
        name: "Aya Morita",
        avatar: "https://i.pravatar.cc/50?img=5",
        date: "October 9, 2025",
        text: "Great coverage on this topic. Looking forward to your next post!",
    },
]

export default function ({ article_id }: { article_id: string }) {
    const [comments, setComments] = useState(_comments);

    // @ts-ignore
    const user = useSelector(state => state.user.value)

    const [newComment, setNewComment] = useState("");

    const submitComment = () => {
        if (!newComment.trim()) return;

        const fakeUser = {
            id: Date.now(),
            name: user.displayName,
            avatar: user.photoURL,
            date: "Just now",
            text: newComment,
        };

        setComments([fakeUser, ...comments]);
        setNewComment("");
    };

    return (
        <div className="mt-10 border-t pt-8 border-gray-300">
            <h2 className="text-xl font-semibold mb-6">Comments</h2>

            {
                user ? (
                    <div className="flex items-start gap-3 mb-8">
                        <img
                            src={user.photoURL!}
                            alt="User avatar"
                            className="w-10 h-10 rounded-full"
                        />
                        <div className="flex-1">
                            <textarea
                                className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                                placeholder="Write a comment..."
                                value={newComment}
                                onChange={(e) => setNewComment(e.target.value)}
                            />
                            <button
                                onClick={submitComment}
                                type="submit"
                                className="px-8 py-3 bg-gray-100 text-gray-900 rounded-lg font-semibold hover:bg-gray-300 transition-colors hover:cursor-pointer shadow-md"
                            >
                                Post Comment
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="px-4 p-2 mb-8 border rounded-lg bg-gray-50 flex gap-4 items-center text-center">
                        <p className="text-gray-700 font-medium">
                            You must be logged in to post a comment.
                        </p>
                        <button
                            className="p-2 rounded cursor-pointer border border-gray-300 hover:bg-gray-100 transition-all"
                            onClick={handleGoogleLogin}
                        >
                            <img src={GoogleSignIn} width={30} height={30} />

                        </button>
                    </div>
                )
            }

            {/* Comments List */}
            <div className="space-y-6">
                {comments.map((c) => (
                    <div key={c.id} className="flex gap-4">
                        <img
                            src={c.avatar}
                            alt="avatar"
                            className="w-12 h-12 rounded-full"
                        />
                        <div className="flex-1">
                            <div className="flex items-center justify-between">
                                <h4 className="font-semibold">{c.name}</h4>
                                <span className="text-sm text-gray-400">{c.date}</span>
                            </div>
                            <p className="mt-1 text-gray-700">{c.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
