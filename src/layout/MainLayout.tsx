import { Outlet } from 'react-router';
import Header from '~/components/Header';
import Footer from '~/components/Footer';

export default function () {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 pt-22">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}