import { Routes } from "@angular/router";
import { AdminLayout } from "./pages/admin-layout/admin-layout";
import { AdminDashboardPage } from "./pages/admin-dashboard-page/admin-dashboard-page";
import { PostsManagementPage } from "./pages/posts-management-page/posts-management-page";
import { PostCreatePage } from "./pages/post-create-page/post-create-page";
import { PostEditPage } from "./pages/post-edit-page/post-edit-page";
import { adminPostResolver } from "./resolvers/admin-post-resolver";

export const ADMIN_ROUTES: Routes = [
    {
        path: "",
        component: AdminLayout,
        children: [
            {
                path: "",
                redirectTo: "dashboard",
                pathMatch: "full"
            },
            {
                path: "dashboard",
                component: AdminDashboardPage
            },
            {
                path: "posts",
                component: PostsManagementPage
            },
            {
                path: "posts/new",
                component: PostCreatePage
            },
            {
                path: "posts/:id/edit",
                component: PostEditPage,
                resolve: {post: adminPostResolver}
            },
            {
                path: "gallery",
                loadComponent: () =>
                    import("./pages/admin-gallery-page/admin-gallery-page").then(m => m.AdminGalleryPage)
            }
        ]
    }
]