import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        format: 'cjs',
      }
    }
  },
  plugins: [htmlPlugin()],
});

// fix: uxp not support script type="module"
function htmlPlugin() {
  return {
    name: 'htmlPlugin',
    transformIndexHtml(html) {
      return html.replaceAll(`type="module" crossorigin`, 'defer');
    },
  };
}