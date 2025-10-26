import type { ISidebarItem } from "@/types";

export const generateRoutes = (sidebarItems: ISidebarItem[]) => {

    return sidebarItems.flatMap((item) => {
        return item.items.map((subItem) => {
            return {
                path: subItem.url,
                Component: subItem.component,
            };
        });
    });
};