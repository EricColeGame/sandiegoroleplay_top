import { LucideIcon } from "lucide-react";

export interface NavigationItem {
  key: string;
  path: `/${string}`;
  icon?: LucideIcon;
  isContentType: boolean;
}

export const NAVIGATION_CONFIG = [
  {
    path: "/guide",
    key: "guide",
    isContentType: true,
  },
  {
    path: "/codes",
    key: "codes",
    isContentType: true,
  },
  {
    path: "/roles",
    key: "roles",
    isContentType: true,
  },
  {
    path: "/features",
    key: "features",
    isContentType: true,
  },
  {
    path: "/money",
    key: "money",
    isContentType: true,
  },
  {
    path: "/updates",
    key: "updates",
    isContentType: true,
  },
  {
    path: "/community",
    key: "community",
    isContentType: true,
  },
] satisfies readonly NavigationItem[];

export const CONTENT_TYPES: readonly string[] = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));
