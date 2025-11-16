import {
    type RouteConfig,
    index,
    route,
    prefix
} from "@react-router/dev/routes";

export default [
    index("./pages/Home.tsx"),
    
    route("about", "./pages/About.tsx"),
    route("contact", "./pages/Contact.tsx"),

    ...prefix("article", [
        route("", "./pages/RedirectArticle.tsx"),
        route(":slug", "./pages/ArticleDetail.tsx"),
    ]),

    ...prefix("category", [
        route("", "./pages/RedirectCategory.tsx"),
        route(":slug", "./pages/Category.tsx"),
    ]),

    // route("*", "./pages/Redirect.tsx")
] satisfies RouteConfig;