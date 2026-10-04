// Public routes are an explicit contract: removing a menu link must not remove coverage.
export const primaryRoutes = [
  '/patient-info',
  '/periodontal-disease',
  '/non-surgical-procedures',
  '/surgical-procedures',
  '/tmj',
  '/referring-doctors',
  '/contact',
  '/our-team',
];

export const teamRoutes = [
  '/our-team/staff',
  '/our-team/dr-hazeka',
  '/our-team/dr-moses',
  '/our-team/office-tour',
];

export const footerRoutes = [...primaryRoutes, '/about', '/disclaimer'];
export const publicRoutes = ['/', ...footerRoutes, ...teamRoutes];
