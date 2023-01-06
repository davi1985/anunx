import { Button, Container, Grid, Typography } from '@mui/material';
import { Card } from '../../src/components/Card';
import { TemplateDefault } from '../../src/templates/TemplateDefault';

export default function UserDashboard() {
  return (
    <TemplateDefault>
      <Container maxWidth="sm">
        <Typography component={'h1'} variant="h2" align="center">
          Meus Anúncios
        </Typography>

        <Button
          variant="contained"
          sx={{ margin: '30px auto', display: 'block' }}
        >
          Publicar novo anúncio
        </Button>
      </Container>

      <Container maxWidth="md">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              imageUrl="https://source.unsplash.com/random"
              title="Produto X"
              price="60.89"
              actions
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card
              imageUrl="https://source.unsplash.com/random"
              title="Produto Y"
              price="70"
              actions
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card
              imageUrl="https://source.unsplash.com/random"
              title="Produto Z"
              price="79.00"
              actions
            />
          </Grid>
        </Grid>
      </Container>
    </TemplateDefault>
  );
}
