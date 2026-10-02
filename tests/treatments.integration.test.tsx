import { screen } from '@testing-library/react';
import { expect, it } from 'vitest';
import SurgicalProcedures from '../src/pages/SurgicalProcedures';
import NonSurgicalProcedures from '../src/pages/NonSurgicalProcedures';
import { renderPage } from './helpers/render';

async function renderImplantSection() {
  const result = renderPage(<SurgicalProcedures />);
  await result.user.click(screen.getAllByRole('button', { name: 'Dental Implants', exact: true })[0]);
  return result;
}

it('Given the implant section, when the presentation is opened, then its dialog is visible', async () => {
  // Given
  const { user } = await renderImplantSection();

  // When
  await user.click(await screen.findByRole('button', { name: 'Open dental implants presentation' }));

  // Then
  expect(screen.getByRole('dialog')).toBeVisible();
});

it('Given an open surgical presentation, when Close is clicked, then the dialog is removed', async () => {
  // Given
  const { user } = await renderImplantSection();
  await user.click(await screen.findByRole('button', { name: 'Open dental implants presentation' }));

  // When
  await user.click(screen.getByRole('button', { name: 'Close presentation' }));

  // Then
  expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
});

it('Given non-surgical treatments, when Scaling & Root Planing is selected, then its heading and explanation appear', async () => {
  // Given
  const { user } = renderPage(<NonSurgicalProcedures />);

  // When
  await user.click(screen.getByRole('button', { name: 'Scaling & Root Planing', exact: true }));

  // Then
  expect(await screen.findByRole('heading', { name: 'Scaling & Root Planing', exact: true })).toBeInTheDocument();
  expect(screen.getByText(/The doctor will only perform scaling/)).toBeInTheDocument();
});
