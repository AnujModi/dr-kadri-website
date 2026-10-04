import { screen, within } from '@testing-library/react';
import { it, expect, vi } from 'vitest';
import type { ReactNode } from 'react';
import About from '../src/pages/About';
import TeamStaff from '../src/pages/TeamStaff';
import { doctorData } from '../src/data/doctorData';
import { renderPage } from './helpers/render';

vi.mock('../src/components/Reveal', () => ({ default: ({ children }: { children: ReactNode }) => <>{children}</> }));

it('introduces the joint practice and gives each doctor a complete profile with shared data', () => {
  renderPage(<About />);
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('About Our Practice');
  expect(screen.getAllByRole('article')).toHaveLength(2);
  for (const [id, doctor] of Object.entries(doctorData)) {
    const profile = within(screen.getByRole('article', { name: doctor.name }));
    expect(profile.getByRole('img')).toHaveAttribute('src', doctor.image);
    expect(profile.getByRole('img')).toHaveAttribute('alt', `Portrait of ${doctor.name}`);
    expect(profile.getByText(doctor.title)).toBeInTheDocument();
    for (const qualification of doctor.education) expect(profile.getByText(qualification)).toBeInTheDocument();
    expect(profile.getByRole('link')).toHaveAttribute('href', `/our-team/${id}`);
  }
  expect(screen.getByText(doctorData['dr-hazeka'].credentials)).toBeInTheDocument();
  expect(screen.queryByText(/placeholder|\[University Name\]|\[Institution\]/i)).not.toBeInTheDocument();
});

it('shows updated staff roles and Candace’s portrait', () => {
  renderPage(<TeamStaff />);
  for (const [name, role] of [
    ['Katelyn', 'Lead Surgical Assistant'],
    ['Candace Walker', 'Practice Team Co-ordinator'],
    ['Holly Marchman', 'Patient Coordinator'],
  ]) {
    const article = screen.getByRole('heading', { name, exact: true }).closest('article')!;
    expect(within(article).getByText(role)).toBeInTheDocument();
    expect(within(article).getByRole('img')).toHaveAttribute('src', expect.stringMatching(/^\/images\/team\//));
  }
  expect(screen.getByRole('img', { name: 'Portrait of Candace Walker' })).toHaveAttribute('src', '/images/team/candace.jpeg');
});
