import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import type { ReactElement } from 'react';

export function renderWithUser(element: ReactElement) {
  const user = userEvent.setup();
  return { user, ...render(element) };
}

export function renderPage(element: ReactElement) {
  return renderWithUser(<MemoryRouter>{element}</MemoryRouter>);
}
