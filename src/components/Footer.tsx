import { Link } from 'react-router';
import { SocialMediaLinks } from '~/components';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        About: [
            { name: 'Our Story', href: '#' },
            { name: 'Team', href: '#' },
            { name: 'Contact', href: '/contact' },
        ],
        Legal: [
            { name: 'Privacy Policy', href: '#' },
            { name: 'Terms of Service', href: '#' },
            { name: 'Cookie Policy', href: '#' },
        ],
        Categories: [
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
                    <h2 className="text-4xl font-bold mb-4">Subscribe to Our Newsletter</h2>
                    <p className="text-xl text-gray-300 mb-8">
                        Get the latest stories delivered to your inbox every week
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
                            Subscribe
                        </button>
                    </form>
                </div>
            </section>
            <footer className="bg-gray-900 text-gray-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                        <div>
                            <h3 className="text-white text-xl font-bold mb-4">The Journal</h3>
                            <p className="text-sm mb-4">
                                Delivering quality journalism and in-depth stories that matter.
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
                        <p>&copy; {currentYear} The Journal. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    );
}
