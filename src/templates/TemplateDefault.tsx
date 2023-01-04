import { Box } from '@mui/material';
import { ReactNode } from 'react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

export const TemplateDefault = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />

      <Box
        sx={{
          paddingTop: 6,
          paddingBottom: 6,
        }}
      >
        {children}
      </Box>

      <Footer />
    </>
  );
};
