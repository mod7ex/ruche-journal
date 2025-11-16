import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function () {
    return (
        <div className="flex space-x-4">
            <a
                href="https://web.facebook.com/Groupescolairelaruche"
                className="hover:text-gray-500 transition-colors"
                aria-label="Facebook"
                target="_blank"
            >
                <Facebook className="w-5 h-5" />
            </a>
            <a
                href="https://www.instagram.com/gslaruche/"
                className="hover:text-gray-500 transition-colors"
                aria-label="Instagram"
                target="_blank"
            >
                <Instagram className="w-5 h-5" />
            </a>
            <a
                href="https://www.linkedin.com/company/groupescolairelaruche"
                className="hover:text-gray-500 transition-colors"
                aria-label="LinkedIn"
                target="_blank"
            >
                <Linkedin className="w-5 h-5" />
            </a>
            <a
                href="#"
                className="hover:text-gray-500 transition-colors pointer-events-none"
                aria-label="Twitter"
                target="_blank"
            >
                <Twitter className="w-5 h-5" />
            </a>
        </div>
    );
}