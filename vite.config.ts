
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const isLovableSandbox =
  process.env["LOVABLE_SANDBOX"] === "1" ||
  !!process.env["DEV_SERVER__PROJECT_PATH"];

export default defineConfig({
  // Preserve the server configuration used by Lovable's editor.
  // Build a static site in GitHub Actions.
  nitro: isLovableSandbox ? undefined : false,

  tanstackStart: isLovableSandbox
    ? {
        server: { entry: "server" },
      }
    : {
        prerender: {
          enabled: true,
          crawlLinks: true,
        },
        pages: [{ path: "/" }],
      },
});
