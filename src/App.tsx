import MainLayout from "~/layout/MainLayout";
import { Routes, Route, Navigate } from "react-router-dom";
import {
    Home, About,
    Contact,
    RedirectArticle,
    ArticleDetail,
    RedirectCategory,
    Category
} from "./pages";

export default function App() {
    return (
        <Routes>
            {/* layout */}
            <Route element={<MainLayout />}>

                {/* index */}
                <Route index element={<Home />} />

                {/* simple pages */}
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />

                {/* article prefix */}
                <Route path="article">
                    <Route index element={<RedirectArticle />} />
                    <Route path=":slug" element={<ArticleDetail />} />
                </Route>

                {/* category prefix */}
                <Route path="category">
                    <Route index element={<RedirectCategory />} />
                    <Route path=":slug" element={<Category />} />
                </Route>

                {/* catch-all */}
                {/* <Route path="*" element={<Navigate to="/" replace />} /> */}

            </Route>
        </Routes>
    );
}
