import { defineConfig } from 'vite';
import { resolve } from 'node:path';
import { readFile, writeFile } from 'node:fs/promises';

export default ({ mode }) => {
  const outputDir = resolve(`./dist/${mode}`);
  
  return defineConfig({
    build: {
      minify: isProd(mode),
      outDir: outputDir,
      rollupOptions: {
        external: ['uxp', 'photoshop', /photoshop\/[a-z]+/],
        output: {
          format: 'cjs',
        }
      }
    },
    plugins: [htmlPlugin(), manifestPlugin(mode, outputDir)],
  });
};

// fix: uxp not support script type="module"
function htmlPlugin() {
  return {
    name: 'htmlPlugin',
    transformIndexHtml(html) {
      return html.replaceAll(`type="module" crossorigin`, 'defer');
    },
  };
}

function manifestPlugin(mode, outputDir) {
  const manifestPath = resolve(outputDir, 'manifest.json');
  return {
    name: 'manifestPlugin',
    async closeBundle() {
      if (isProd(mode)) {
        console.log(`manifest set skip`);
        return;
      }
      try {
        const manifestJson = await readFile(manifestPath, 'utf8');
        const manifest = JSON.parse(manifestJson);
        manifest.name = `${manifest.name} (${mode})`;
        manifest.id = `${manifest.id}.${mode}`;
        await writeFile(manifestPath, JSON.stringify(manifest, null, 2), 'utf8');
        console.log(`✓ ${mode} manifest set success`);
      } catch (err) {
        console.error(err);
      }
    }
  };
}

function isProd(mode) {
  return mode === 'production';
}