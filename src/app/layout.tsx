import Header from '@/components/Header';
import Providers from '@/components/Providers';
import '@/styles/globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'The HISTORY News',
  description: 'All about news'
};

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html lang="en">
    <body className="bg-gray-100 dark:bg-zinc-900 transition-all duration-700">
      <Providers>
        <Header />
        <div className="max-w-6xl mx-auto ">{children}</div>
      </Providers>
    </body>
  </html>
);

export default RootLayout;
