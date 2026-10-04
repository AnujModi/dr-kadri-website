import { test, expect } from '@playwright/test';
import { createServer, type Server } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { resolve, extname, sep } from 'node:path';
import { publicRoutes } from './routes';
import { expectPageLoaded } from './helpers/navigation';

let server: Server;
let origin: string;
test.use({ serviceWorkers: 'block' });

test.beforeAll(async () => {
  const root = resolve('dist');
  server = createServer(async (request, response) => {
    // Only real files and extensionless HTML are served. No SPA fallback.
    try {
      const path = decodeURIComponent(new URL(request.url!, 'http://localhost').pathname);
      let file = resolve(root, path === '/' ? 'index.html' : `.${path}`);
      if (!file.startsWith(root + sep)) throw new Error('Outside build');
      if (!extname(file)) file += '.html';
      if (!(await stat(file)).isFile()) throw new Error('Missing file');
      const mime: Record<string, string> = {
        '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css',
        '.json': 'application/json', '.jpeg': 'image/jpeg', '.jpg': 'image/jpeg',
        '.png': 'image/png', '.webp': 'image/webp', '.svg': 'image/svg+xml',
      };
      response.setHeader('Content-Type', mime[extname(file)] ?? 'application/octet-stream');
      response.end(await readFile(file));
    } catch {
      response.writeHead(404).end('Not found');
    }
  });
  await new Promise<void>(done => server.listen(0, '127.0.0.1', done));
  const address = server.address();
  if (!address || typeof address === 'string') throw new Error('No test server address');
  origin = `http://127.0.0.1:${address.port}`;
});

test.afterAll(async () => {
  await new Promise<void>((done, reject) => {
    server.close(error => error ? reject(error) : done());
    server.closeAllConnections();
  });
});

for (const route of publicRoutes) {
  test(`Given static hosting without SPA fallback, when ${route} is opened and refreshed, then its page loads`, async ({ page, request }) => {
    // Given
    expect((await request.get(`${origin}/missing-entry`)).status()).toBe(404);
    // When
    const initial = await page.goto(origin + route);
    // Then
    expect(initial?.status()).toBe(200);
    await expectPageLoaded(page, origin + route);
    const refreshed = await page.reload();
    expect(refreshed?.status()).toBe(200);
    await expectPageLoaded(page, origin + route);
  });
}
