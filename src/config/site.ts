export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "San Diego Roleplay Wiki",
  shortName: "San Diego RP",
  logoText: "SD",
  tagline: "GTA RP Guides, Jobs, Teams & Server Wiki",
  description: "Explore San Diego Roleplay Wiki for GTA RP guides, jobs, factions, server information, rules, and gameplay tips for immersive roleplay experiences.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://sandiegoroleplay.top",
  gameUrl: "https://www.roblox.com/games/136020512003847/San-Diego-Roleplay",
  heroVideoId: "_fwzuYSxc6E", // New Team, Border & More San Diego Roleplay
  social: {
    discord: "https://discord.gg/roblox",
    youtube: "https://www.youtube.com/@roblox",
  },
  locales: ["en", "es", "pt", "de"],
  defaultLocale: "en",
};
