import { useEffect, useState } from 'react';
import { handleGoogleLogin, db } from "~/firebase";
import { useSelector } from 'react-redux'
import { collection, addDoc, serverTimestamp, query, orderBy, onSnapshot, where } from "firebase/firestore";
import GoogleSignIn from '/signin-google.png';
import { formatDate } from '~/utils'
import { Navigate, useParams } from 'react-router-dom';

interface Comment {
    id: string,
    article_id: string,
    name?: string,
    avatar?: string,
    date?: {
        seconds: number,
        nanoseconds: number,
    },
    text?: string,
}

export default function ({ article_id }: { article_id: string }) {
    const { slug } = useParams<{ slug: string }>();

    if (!slug) return <Navigate to="/" />;

    const [comments, setComments] = useState<Comment[]>([]);

    // @ts-ignore
    const user = useSelector(state => state.user.value)

    const [newComment, setNewComment] = useState("");

    const submitComment = async () => {
        if (!newComment.trim()) return;

        try {
            await addDoc(collection(db, "comments"), {
                article_id,
                name: user.displayName,
                avatar: user.photoURL,
                date: serverTimestamp(),
                text: newComment,
            });

            setNewComment("");
        } catch (err) {
            console.error("Error adding comment: ", err);
        }
    };

    useEffect(() => {
        const q = query(
            collection(db, "comments"),
            where("article_id", "==", article_id),
            orderBy("date", "desc")
        );

        const unsubscribe = onSnapshot(q, (snapshot) => {
            setComments(
                // @ts-ignore
                snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
            );
        });

        return () => unsubscribe();
    }, []);

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
                    <div className="px-4 p-2 mb-8 border rounded-lg bg-gray-50 flex gap-4 items-center justify-between text-center">
                        <p className="text-gray-700 font-medium">
                            <small>Vous devez être connecté pour publier un commentaire.</small>
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
                                <span className="text-sm text-gray-400">{formatDate(c.date?.seconds!)}</span>
                            </div>
                            <p className="mt-1 text-gray-700">{c.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}