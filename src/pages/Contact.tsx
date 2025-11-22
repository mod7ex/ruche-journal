import { lazy } from 'react';
const SocialMediaLinks = lazy(() => import('~/components/SocialMediaLinks'));

export default function () {
    return (
        <div className="container mx-auto px-6 py-12">
            <h2 className="text-2xl font-semibold mb-6 text-center">Get in Touch</h2>

            <div className="grid md:grid-cols-2 gap-8 mb-8">

                <div className="bg-white p-8 rounded-lg shadow">
                    <h3 className="text-xl font-semibold mb-4">Coordonnées</h3>
                    <p className="mb-2"><strong>Email:</strong> contact@groupescolairelaruche.ma</p>
                    <p className="mb-2"><strong>Phone:</strong> 05 22 90 73 70</p>
                    <p className="mb-2"><strong>Phone:</strong> +212661526737</p>
                    <p className="mb-4"><strong>Address:</strong> Casablanca, Oulfa</p>

                    <SocialMediaLinks />
                </div>

                <div className="bg-white p-8 rounded-lg shadow">
                    <form action="#" method="POST" className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                            <input type="text" id="name" name="name" required
                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                            <input type="email" id="email" name="email" required
                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                            <textarea id="message" name="message" rows={5} required
                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full px-8 py-3 bg-gray-100 text-gray-900 rounded-lg font-semibold hover:bg-gray-300 transition-colors hover:cursor-pointer shadow-md"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

            </div>

            <div className='rounded-lg shadow'>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3325.3627175680836!2d-7.698926600000001!3d33.5439511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda62b341fa477e1%3A0xbc7bc792cd92c7f7!2sSchool%20Group%20La%20Ruche%20%7C%20Oulfa!5e0!3m2!1sen!2sma!4v1763310602029!5m2!1sen!2sma"
                    width="100%"
                    height="450"
                    loading="lazy"
                >
                </iframe>
            </div>
        </div>
    );
}