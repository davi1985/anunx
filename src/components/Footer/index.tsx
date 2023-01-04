import { Box, Container, Grid, Typography } from '@mui/material';
import Link from 'next/link';

export const Footer = () => {
  return (
    <Container
      maxWidth="lg"
      component={'footer'}
      sx={{
        borderTop: '1px solid #ccc',
      }}
    >
      <Grid
        container
        spacing={3}
        justifyItems={'space-around'}
        sx={{ margin: '0 auto' }}
      >
        <Grid item xs={6} sm={3}>
          <Box textAlign={'center'}>
            <Link href={'#'} style={{ textDecoration: 'none' }}>
              <Typography color="#555" variant="subtitle2">
                Ajuda e contato
              </Typography>
            </Link>
          </Box>
        </Grid>

        <Grid item xs={6} sm={3}>
          <Box textAlign={'center'}>
            <Link href={'#'} style={{ textDecoration: 'none' }}>
              <Typography color="#555" variant="subtitle2">
                Dicas de segurança
              </Typography>
            </Link>
          </Box>
        </Grid>

        <Grid item xs={6} sm={3}>
          <Box textAlign={'center'}>
            <Link href={'#'} style={{ textDecoration: 'none' }}>
              <Typography color="#555" variant="subtitle2">
                Anunciar e vender
              </Typography>
            </Link>
          </Box>
        </Grid>

        <Grid item xs={6} sm={3}>
          <Box textAlign={'center'}>
            <Link href={'#'} style={{ textDecoration: 'none' }}>
              <Typography color="#555" variant="subtitle2">
                Plano Profissional
              </Typography>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
