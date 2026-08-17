import assert from 'node:assert/strict';
import { access, readFile } from 'node:fs/promises';
import test from 'node:test';

const index = await readFile(new URL('../index.html', import.meta.url), 'utf8');
const script = await readFile(new URL('../script.js', import.meta.url), 'utf8');

const publicUrls = [
  'https://kilat-watsor.vercel.app/',
  'https://simpel-watsor.vercel.app/',
  'https://suarakami-watsor.vercel.app/',
  'https://pantaskeren-watsor.vercel.app/',
  'https://pastibisa-watsor.vercel.app/',
];

test('memuat dua tampilan navigasi utama', () => {
  assert.match(index, /data-view-target="layanan"/);
  assert.match(index, /data-view-target="admin"/);
  assert.match(index, /id="layanan"/);
  assert.match(index, /id="admin"/);
});

test('memuat tepat lima layanan publik dan lima akses admin', () => {
  assert.equal((index.match(/data-kind="public"/g) ?? []).length, 5);
  assert.equal((index.match(/data-kind="admin"/g) ?? []).length, 5);

  for (const url of publicUrls) {
    assert.ok(index.includes(`href="${url}"`), `tautan publik hilang: ${url}`);
    assert.ok(index.includes(`href="${url}admin"`), `tautan admin hilang: ${url}admin`);
  }
});

test('semua tautan aplikasi aman ketika membuka tab baru', () => {
  const appLinks = [...index.matchAll(/<a class="app-card[\s\S]*?<\/a>/g)].map((match) => match[0]);
  assert.equal(appLinks.length, 10);
  for (const link of appLinks) {
    assert.match(link, /target="_blank"/);
    assert.match(link, /rel="noopener noreferrer"/);
    assert.match(link, /<img /);
  }
});

test('semua ikon memakai aset lokal yang tersedia untuk GitHub Pages', async () => {
  const iconSources = [...index.matchAll(/<img src="([^"]+)" alt="Ikon (?:Admin )?[^"].*?"/g)]
    .map((match) => match[1]);

  assert.equal(iconSources.length, 10);
  assert.ok(iconSources.every((source) => source.startsWith('assets/icons/')));

  for (const source of new Set(iconSources)) {
    await access(new URL(`../${source}`, import.meta.url));
  }
});

test('pengendali tampilan mendukung hash layanan dan admin', () => {
  assert.match(script, /#admin/);
  assert.match(script, /history\.replaceState/);
  assert.match(script, /aria-selected/);
});
