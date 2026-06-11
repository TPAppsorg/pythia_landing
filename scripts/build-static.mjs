// Builds a fully static ("vanilla") version of the landing into ./static
// for hosting on GitHub Pages. Runs `vite build`, prerenders the homepage
// HTML via the SSR handler, then assembles static/ = dist/client + index.html.
import { execSync } from "node:child_process";
import { cpSync, rmSync, writeFileSync, copyFileSync } from "node:fs";

execSync("npm run build", { stdio: "inherit" });

const { default: server } = await import("../dist/server/server.js");
const res = await server.fetch(new Request("http://localhost/"), {}, {});
const html = await res.text();

rmSync("static", { recursive: true, force: true });
cpSync("dist/client", "static", { recursive: true });
writeFileSync("static/index.html", html);
copyFileSync("static/index.html", "static/404.html"); // SPA fallback
writeFileSync("static/CNAME", "trypythia.app\n");      // GitHub Pages custom domain

console.log("Static site built -> ./static");
