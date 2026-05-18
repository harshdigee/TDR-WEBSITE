// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { nitro } from "nitro/vite";

// Vercel sets VERCEL=1 during build. TanStack Start + Nitro is the supported Vercel target.
// Cloudflare Workers builds keep the custom server entry + @cloudflare/vite-plugin (see wrangler.jsonc).
const forVercel = process.env.VERCEL === "1";

export default defineConfig({
  cloudflare: !forVercel,
  plugins: forVercel ? [nitro()] : [],
  tanstackStart: forVercel
    ? {}
    : {
        server: { entry: "server" },
      },
});
