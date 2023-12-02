import { Plugin } from 'release-it';
import { readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

// upgrade manifest version
class ManifestVersionPlugin extends Plugin {
  async bump(version) {
    const manifestPath = resolve('dist/production/manifest.json');
    try {
      const manifestJson = await readFile(manifestPath, 'utf8');
      const manifest = JSON.parse(manifestJson);
      manifest.version = version;
      await writeFile(manifestPath, JSON.stringify(manifest, null, 2), 'utf8');
    } catch (err) {
      console.error(err);
    }
  }
}

export default ManifestVersionPlugin;
