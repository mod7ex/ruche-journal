'use client'

import MainLayout from "~/layout/MainLayout";
import { Routes, Route, /* Navigate */ } from "react-router-dom";
import {
    Home,
    About,
    Contact,
    RedirectArticle,
    ArticleDetail,
    RedirectCategory,
    Category,
    PrivacyAndPolicy,
    TermsOfService,
    CookiePolicy
} from "~/pages";

// const Home = () => import('~/pages/Home')
// const About = () => import('~/pages/About')
// const Contact = () => import('~/pages/Contact')
// const RedirectArticle = () => import('~/pages/RedirectArticle')
// const ArticleDetail = () => import('~/pages/ArticleDetail')
// const RedirectCategory = () => import('~/pages/RedirectCategory')
// const Category = () => import('~/pages/Category')
// const PrivacyAndPolicy = () => import('~/pages/PrivacyAndPolicy')
// const TermsOfService = () => import('~/pages/TermsOfService')
// const CookiePolicy = () => import('~/pages/CookiePolicy')

import { ScrollToTop } from "~/components";

export default function App() {
    return (
        <>
            <ScrollToTop />

            <Routes>
                {/* layout */}
                <Route element={<MainLayout />}>

                    <Route index element={<Home />} />

                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact />} />

                    <Route path="article">
                        <Route index element={<RedirectArticle />} />
                        <Route path=":slug" element={<ArticleDetail />} />
                    </Route>

                    <Route path="category">
                        <Route index element={<RedirectCategory />} />
                        <Route path=":slug" element={<Category />} />
                    </Route>

                    <Route path="privacy-policy" element={<PrivacyAndPolicy />} />
                    <Route path="terms-of-service" element={<TermsOfService />} />
                    <Route path="cookies-policy" element={<CookiePolicy />} />

                    {/* catch-all */}
                    {/* <Route path="*" element={<Navigate to="/" replace />} /> */}

                </Route>
            </Routes>
        </>
    );
}
