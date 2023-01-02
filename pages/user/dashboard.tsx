import {
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
} from '@mui/material';
import { TemplateDefault } from '../../src/templates/TemplateDefault';

export default function UserDashboard() {
  return (
    <TemplateDefault>
      <Container
        maxWidth="sm"
        sx={{
          paddingTop: 8,
          paddingBottom: 6,
        }}
      >
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
            <Card>
              <CardMedia
                sx={{ paddingTop: '56%' }}
                image="https://source.unsplash.com/random"
                title=""
              />

              <CardContent>
                <Typography variant="h5" component="h2">
                  Produto X
                </Typography>

                <Typography variant="h5" component="h2">
                  R$ 60,00
                </Typography>

                <CardActions
                  sx={{
                    marginTop: 2,
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}
                >
                  <Button size="small" variant="contained">
                    Editar
                  </Button>
                  <Button size="small" variant="contained" color="error">
                    Remover
                  </Button>
                </CardActions>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                sx={{ paddingTop: '56%' }}
                image="https://source.unsplash.com/random"
                title=""
              />

              <CardContent>
                <Typography variant="h5" component="h2">
                  Produto X
                </Typography>

                <Typography variant="h5" component="h2">
                  R$ 60,00
                </Typography>

                <CardActions
                  sx={{
                    marginTop: 2,
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}
                >
                  <Button size="small" variant="contained">
                    Editar
                  </Button>
                  <Button size="small" variant="contained" color="error">
                    Remover
                  </Button>
                </CardActions>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                sx={{ paddingTop: '56%' }}
                image="https://source.unsplash.com/random"
                title=""
              />

              <CardContent>
                <Typography variant="h5" component="h2">
                  Produto X
                </Typography>

                <Typography variant="h5" component="h2">
                  R$ 60,00
                </Typography>

                <CardActions
                  sx={{
                    marginTop: 2,
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}
                >
                  <Button size="small" variant="contained">
                    Editar
                  </Button>
                  <Button size="small" variant="contained" color="error">
                    Remover
                  </Button>
                </CardActions>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </TemplateDefault>
  );
}
