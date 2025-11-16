import { SocialMediaLinks } from '~/components';

export default function () {
    return (
        <div className="container mx-auto px-6 py-12">
            <h2 className="text-2xl font-semibold mb-6 text-center">Get in Touch</h2>

            <div className="grid md:grid-cols-2 gap-8">

                <div className="bg-white p-8 rounded-lg shadow">
                    <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                    <p className="mb-2"><strong>Email:</strong> contact@myjournal.com</p>
                    <p className="mb-2"><strong>Phone:</strong> +123 456 7890</p>
                    <p className="mb-4"><strong>Address:</strong> 123 Journal St, Writing City</p>

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
        </div>

    );
}