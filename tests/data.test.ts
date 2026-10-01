import { describe, expect, it } from 'vitest';
import { surgicalData } from '../src/data/surgicalData';
import { nonSurgicalData } from '../src/data/nonSurgicalData';
import { implantPresentation } from '../src/data/implantPresentation';

describe.each([['surgical', surgicalData], ['non-surgical', nonSurgicalData]] as const)('%s treatment navigation', (_, entries) => {
  it('has unique IDs and resolves every section link and parent', () => {
    const ids = entries.map(entry => entry.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const entry of entries) {
      for (const link of entry.links ?? []) expect(ids).toContain(link.id);
      if ('parent' in entry && entry.parent) expect(ids).toContain(entry.parent);
    }
  });
});

it('uses local, unique videos in every presentation mode', () => {
  expect(implantPresentation.map(mode => mode.id)).toEqual(['english', 'spanish', 'consultation']);
  const chapters = implantPresentation.flatMap(mode => mode.chapters);
  expect(chapters).toHaveLength(37);
  expect(new Set(chapters.map(chapter => chapter.id)).size).toBe(chapters.length);
  for (const chapter of chapters) {
    expect(chapter.title.trim()).not.toBe('');
    expect(chapter.src).toMatch(/^\/videos\/dental-implants\/[a-z0-9]+\.mp4$/);
  }
});
