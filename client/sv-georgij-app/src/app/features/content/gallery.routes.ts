import { Routes } from "@angular/router";
import { GalleryListPage } from "./pages/gallery-list-page/gallery-list-page";

export const GALLERY_ROUTES: Routes = [
    {
        path: "",
        component:GalleryListPage,
        data: {section: "galerija"}
    }
]