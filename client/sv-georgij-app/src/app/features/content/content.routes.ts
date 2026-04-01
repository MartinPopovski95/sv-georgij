import { Routes } from "@angular/router";
import { ContentListPage } from "./pages/content-list-page/content-list-page";
import { ContentDetailsPage } from "./pages/content-details-page/content-details-page";
import { contentItemResolver } from "./resolvers/content-item-resolver";

export const CONTENT_ROUTES: Routes = [
    {
        path: "",
        component: ContentListPage
    },
    {
        path: ":slug",
        component: ContentDetailsPage,
        resolve: {
            contentItem: contentItemResolver
        }
    }
]