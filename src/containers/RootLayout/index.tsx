import { FC, ReactNode } from 'react';

const RootLayout: FC<{ children: ReactNode }> = ({ children }) => (
  <main className="px-4">{children}</main>
);

export default RootLayout;
