import { describe, expect, it } from 'vitest';
import { surgicalData } from '../src/data/surgicalData';
import { nonSurgicalData } from '../src/data/nonSurgicalData';
import { implantPresentation } from '../src/data/implantPresentation';

describe.each([
  ['surgical', surgicalData],
  ['non-surgical', nonSurgicalData],
] as const)('%s treatment navigation', (_, entries) => {
  it('Given treatment entries, when their IDs are collected, then each ID is unique', () => {
    // Given / When
    const ids = entries.map(entry => entry.id);

    // Then
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('Given treatment entries, when navigation references are resolved, then every target exists', () => {
    // Given
    const ids = entries.map(entry => entry.id);

    // When
    const targets = entries.flatMap(entry => {
      const links = (entry.links ?? []).map(link => link.id);
      const parent = 'parent' in entry && entry.parent ? [entry.parent] : [];
      return [...links, ...parent];
    });

    // Then
    for (const target of targets) {
      expect(ids).toContain(target);
    }
  });
});

it('Given presentation modes, when their chapters are collected, then all expected modes and unique chapters exist', () => {
  // Given / When
  const modes = implantPresentation.map(mode => mode.id);
  const chapters = implantPresentation.flatMap(mode => mode.chapters);
  const chapterIds = chapters.map(chapter => chapter.id);

  // Then
  expect(modes).toEqual(['english', 'spanish', 'consultation']);
  expect(chapters).toHaveLength(37);
  expect(new Set(chapterIds).size).toBe(chapters.length);
});

it('Given presentation chapters, when their media is inspected, then each has a title and local video', () => {
  // Given / When
  const chapters = implantPresentation.flatMap(mode => mode.chapters);

  // Then
  for (const chapter of chapters) {
    expect(chapter.title.trim()).not.toBe('');
    expect(chapter.src).toMatch(/^\/videos\/dental-implants\/[a-z0-9]+\.mp4$/);
  }
});
