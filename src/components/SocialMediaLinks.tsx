import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function () {
    return (
        <div className="flex space-x-4">
            <a
                href="#"
                className="hover:text-gray-500 transition-colors"
                aria-label="Facebook"
            >
                <Facebook className="w-5 h-5" />
            </a>
            <a
                href="#"
                className="hover:text-gray-500 transition-colors"
                aria-label="Twitter"
            >
                <Twitter className="w-5 h-5" />
            </a>
            <a
                href="#"
                className="hover:text-gray-500 transition-colors"
                aria-label="Instagram"
            >
                <Instagram className="w-5 h-5" />
            </a>
            <a
                href="#"
                className="hover:text-gray-500 transition-colors"
                aria-label="LinkedIn"
            >
                <Linkedin className="w-5 h-5" />
            </a>
        </div>
    );
}