import { Routes } from '@angular/router';
import { PublicLayout } from './layouts/public-layout/public-layout';
import { authGuard } from './core/guards/auth-guard';

export const routes: Routes = [
    // base path: localhost: https://localhost:7043/
    
    {
        path: "",
        component: PublicLayout,
        children:[
            {
                path: "",
                loadChildren: () =>
                    import("./features/home/home-page.routes").then(m => m.HOME_ROUTES)
            },
            {
                path: "about",
                loadChildren: () =>
                    import("./features/about/about-page.routes").then(m => m.ABOUT_ROUTES)
            },
            {
                path: "calendar",
                loadChildren: () =>
                    import("./features/calendar/calendar-page.routes").then(m => m.CALENDAR_ROUTES)
            },
            {
                path: "blog",
                data: {section: "blog"},
                loadChildren: () =>
                    import("./features/content/content.routes").then(m => m.CONTENT_ROUTES)
            },
            {
                path: "nastani",
                data: {section: "nastani"},
                loadChildren: () =>
                    import("./features/content/content.routes").then(m => m.CONTENT_ROUTES)
            },
            {
                path: "novosti",
                data: {section: "novosti"},
                loadChildren: () =>
                    import("./features/content/content.routes").then(m => m.CONTENT_ROUTES)
            },
            {
                path: "katehizis",
                data: {section: "katehizis"},
                loadChildren: () =>
                    import("./features/content/content.routes").then(m => m.CONTENT_ROUTES)
            },
            {
                path: "galerija",
                loadChildren: () =>
                    import("./features/content/gallery.routes").then(m => m.GALLERY_ROUTES)
            },
        ]
    },
    {
        path: "login",
        loadChildren: () =>
            import("./features/auth/auth.routes").then(m => m.AUTH_ROUTES)
    },
    {
        path: "admin",
        canActivate: [authGuard],
        loadChildren: () =>
            import("./features/admin/admin.routes").then(m => m.ADMIN_ROUTES)
    },
    {
        path: "**",
        redirectTo: "",
    },
];
