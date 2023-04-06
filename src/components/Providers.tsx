'use client';

import { ThemeProvider } from 'next-themes';
import { ReactNode } from 'react';

const Providers = ({ children }: { children: ReactNode }) => (
  <ThemeProvider enableSystem={true} attribute="class">
    {children}
  </ThemeProvider>
);

export default Providers;
