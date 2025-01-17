import { FC, ReactNode } from 'react';

const RootLayout: FC<{ children: ReactNode }> = ({ children }) => (
  <main data-testid="root-layout" className="px-4">
    {children}
  </main>
);

export default RootLayout;
