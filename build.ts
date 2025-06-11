import { build, stop } from "https://deno.land/x/esbuild@v0.25.4/mod.js";
import { denoPlugins } from "jsr:@luca/esbuild-deno-loader@^0.11.1";

const srcDir = "./src";
const distDir = "./dist";

for await (const dirEntry of Deno.readDir(srcDir)) {
  if (!dirEntry.isDirectory || dirEntry.name === "utils") continue;
  const folder = `${srcDir}/${dirEntry.name}`;
  const entryPoints = ["updateRoutes.ts", "getEta.ts"]
    .map((f) => `${folder}/${f}`)
    .filter((f) => {
      try {
        Deno.statSync(f);
        return true;
      } catch {
        return false;
      }
    });
  for (const entryPoint of entryPoints) {
    // Create output folder for this group if it doesn't exist
    const outFolder = `${distDir}/${dirEntry.name}`;
    try {
      Deno.mkdirSync(outFolder, { recursive: true });
    } catch (_e) {
      /* ignore if exists */
    }

    await build({
      entryPoints: [entryPoint],
      bundle: true,
      outfile: `${outFolder}/${entryPoint
        .split("/")
        .pop()
        ?.replace(".ts", ".js")}`,
      plugins: [...denoPlugins()],
      format: "esm",
      minify: true,
    });
  }
  console.log(`✅ Bundle created for ${dirEntry.name}`);

  const decoder = new TextDecoder("utf-8");
  const metaPath = `${folder}/meta.json`;
  const meta = JSON.parse(decoder.decode(Deno.readFileSync(metaPath)));
  const id = meta.id;

  const outFolder = `${distDir}/${dirEntry.name}`;
  const distFiles = Deno.readDirSync(outFolder);
  for (const file of distFiles) {
    if (!file.isFile || !file.name.endsWith(".js")) continue;
    const key = file.name.replace(/\.js$/, "Script");
    meta[key] = decoder.decode(Deno.readFileSync(`${outFolder}/${file.name}`));
    console.log(`✅ ${key} added to ${id}.json`);
  }

  const encoder = new TextEncoder();
  Deno.writeFileSync(
    `${outFolder}/${id}.json`,
    encoder.encode(JSON.stringify(meta, null, 2))
  );
  console.log(`✅ ${id}.json created in ${outFolder}\n`);
}

await stop();
