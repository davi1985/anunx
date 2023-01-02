import { ReactNode } from 'react';
import { Header } from '../components/Header';

export const Default = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />

      {children}

      <footer>footer</footer>
    </>
  );
};
