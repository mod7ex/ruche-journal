import { Link } from 'react-router';
import Logo from '/logo-white-transparent.png'
import { lazy } from 'react';

const SocialMediaLinks = lazy(() => import('~/components/SocialMediaLinks'));

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        'À propos': [
            { name: 'Notre histoire', href: '#' },
            { name: 'Équipe', href: '#' },
            { name: 'Contact', href: '/contact' },
        ],
        'Légal': [
            { name: 'Politique de Confidentialité', href: '/privacy-policy' },
            { name: 'Termes de Service', href: '/terms-of-service' },
            { name: 'Politique de Cookies', href: '/cookies-policy' },
        ],
        "Catégories": [
            { name: 'Technology', href: '/category/technology' },
            { name: 'Business', href: '/category/business' },
            { name: 'Science', href: '/category/science' },
            { name: 'Culture', href: '/category/culture' },
        ],
    };

    return (
        <>
            <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold mb-4">Abonnez-vous à notre newsletter</h2>
                    <p className="text-xl text-gray-300 mb-8">
                        Recevez les dernières actualités directement dans votre boîte mail.
                    </p>
                    <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="bg-white flex-1 px-6 py-3 rounded-lg text-gray-900 focus:outline-none ring-2 ring-white focus:bg-gray-300 transition-all"
                        />
                        <button
                            type="submit"
                            className="px-8 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-300 transition-colors hover:cursor-pointer"
                        >
                            S'abonner
                        </button>
                    </form>
                </div>
            </section>
            <footer className="bg-gray-900 text-gray-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                        <div>
                            <img src={Logo} alt="La ruche Journal" width={120} className='mb-4' />
                            <p className="text-sm mb-4">
                                <small>Restez en contact avec nous sur les réseaux sociaux</small>
                            </p>
                            <SocialMediaLinks />
                        </div>

                        {Object.entries(footerLinks).map(([title, links]) => (
                            <div key={title}>
                                <h4 className="text-white font-semibold mb-4">{title}</h4>
                                <ul className="space-y-2">
                                    {links.map((link) => (
                                        <li key={link.name}>
                                            <Link
                                                to={link.href}
                                                className="text-sm hover:text-white transition-colors"
                                            >
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="border-t border-gray-800 pt-8 text-center text-sm">
                        <p>&copy; {currentYear} <b>La Ruche Journal</b>. Tous droits réservés.</p>
                    </div>
                </div>
            </footer>
        </>
    );
}
