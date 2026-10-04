import { describe, expect, it } from 'vitest';
import { patientInfo } from '../src/data/patientInfo';
import { periodontalData } from '../src/data/periodontalData';
import { referringData } from '../src/data/referringData';
import { tmjData } from '../src/data/tmjData';

describe.each([
  ['patient information', patientInfo],
  ['periodontal information', periodontalData],
  ['referring doctors', referringData],
  ['TMJ information', tmjData],
])('joint-practice language in %s', (_, data) => {
  it('does not describe general practice care as exclusively provided by Dr. Thomas-Moses', () => {
    const text = JSON.stringify(data);
    expect(text).not.toMatch(/Dr\. Thomas-Moses/);
    expect(text).toMatch(/our doctors/i);
  });
});
