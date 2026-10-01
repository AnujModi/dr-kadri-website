import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { expect, it } from 'vitest';
import SurgicalProcedures from '../src/pages/SurgicalProcedures';
import NonSurgicalProcedures from '../src/pages/NonSurgicalProcedures';

it('opens the presentation from surgical navigation and removes it on close', async () => {
  const user = userEvent.setup();
  render(<MemoryRouter><SurgicalProcedures /></MemoryRouter>);
  await user.click(screen.getAllByRole('button', { name: 'Dental Implants', exact: true })[0]);
  await user.click(await screen.findByRole('button', { name: 'Open dental implants presentation' }));
  expect(screen.getByRole('dialog')).toBeVisible();
  await user.click(screen.getByRole('button', { name: 'Close presentation' }));
  expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
});

it('changes non-surgical content through treatment navigation', async () => {
  const user = userEvent.setup();
  render(<MemoryRouter><NonSurgicalProcedures /></MemoryRouter>);
  await user.click(screen.getByRole('button', { name: 'Scaling & Root Planing', exact: true }));
  expect(await screen.findByRole('heading', { name: 'Scaling & Root Planing', exact: true })).toBeInTheDocument();
  expect(screen.getByText(/The doctor will only perform scaling/)).toBeInTheDocument();
});
