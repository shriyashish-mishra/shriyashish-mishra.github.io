import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// GitHub Pages build (GITHUB_PAGES=true): skip the Nitro/Cloudflare server
// bundle and prerender every route to static HTML in dist/client.
// Lovable's own builds are unaffected.
const isGitHubPages = process.env.GITHUB_PAGES === "true";

export default defineConfig({
  ...(isGitHubPages && { nitro: false }),
  tanstackStart: {
    server: { entry: "server" },
    ...(isGitHubPages && {
      prerender: {
        enabled: true,
        crawlLinks: true,
        autoSubfolderIndex: true,
        failOnError: true,
      },
    }),
  },
});
