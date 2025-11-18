import { LinkedinIcon, FacebookIcon, TwitterIcon, Share2Icon, XCircle, CheckIcon } from 'lucide-react';
import { useState } from 'react';
import "~/assets/share-popup.css";

interface Props {
    title: string,
    active: boolean,
    onClose?: () => void,
    onOpen?: () => void
}

const mediums = [
    { icon: FacebookIcon, link: (url: string, _: string) => `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}` },
    { icon: TwitterIcon, link: (url: string, title: string) => `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}` },
    { icon: LinkedinIcon, link: (url: string, _: string) => `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}` }
]

export default function ({ title, active, onClose, onOpen }: Props) {
    if (!active) return null;

    const [copied, setCopied] = useState(false)

    const handelCopy = () => {
        setCopied(true)
        navigator.clipboard.writeText(shareData.url);

        setTimeout(() => {
            setCopied(false)
        }, 2000)
    }

    onOpen && onOpen();

    const shareData = {
        title: title || "Check this out!",
        url: window.location.href,
    };

    // Native Web Share API
    const handleNativeShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share(shareData);
                onClose && onClose();
            } catch (err) {
                console.error("Share failed:", err);
            }
        }
    };

    return (
        <div className="share-popup-overlay" onClick={onClose}>
            <div className="share-popup max-w-sm" onClick={e => e.stopPropagation()}>
                <h3 className="mb-4">Partager</h3>

                {'share' in navigator && (
                    <button className="flex justify-center gap-8 bg-gray-200 p-3 rounded mb-6 cursor-pointer w-full shadow-lg hover:shadow-xl transition-all" onClick={handleNativeShare}>
                        <Share2Icon className="hover:scale-125 transition-all" />
                        <span>Partager via l'appareil…</span>
                    </button>
                )}

                <div className="share-options mb-6 flex justify-center gap-16">
                    {
                        mediums.map(({ link, icon: Icon }, index) => (<a
                            key={'share' + index}
                            href={link(shareData.url, title)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-full bg-gray-200 p-4 shadow-lg hover:shadow-xl transition-all"
                        >
                            <Icon className="hover:scale-125 transition-all" fill="black" />
                        </a>))
                    }
                </div>

                <button className="flex mb-4 cursor-pointer items-center justify-center bg-gray-200 rounded"
                    onClick={handelCopy}
                >
                    <small className='p-2 mr-2'>Copie</small>
                    <small className="pl-3 border-s border-gray-500 flex pt-1 text-sm whitespace-nowrap overflow-x-hidden w-full">
                        {`${shareData.url.slice(0, 35)}...    `}
                        <CheckIcon className={copied ? 'text-green-500' : 'text-gray-200'} />
                    </small>
                </button>

                <br />

                <button className="cursor-pointer" onClick={onClose}>
                    <XCircle className="text-red-800 hover:scale-125 transition-all" />
                </button>
            </div>
        </div>
    );
};


