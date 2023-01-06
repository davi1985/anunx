import { Search } from '@mui/icons-material';
import {
  Box,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Icon,
  IconButton,
  InputBase,
  Paper,
  Typography,
} from '@mui/material';
import { NextPage } from 'next';
import { Card } from '../src/components/Card';
import { TemplateDefault } from '../src/templates/TemplateDefault';

const Home: NextPage = () => {
  return (
    <TemplateDefault>
      <Container maxWidth="md">
        <Typography
          component={'h1'}
          variant="h3"
          align="center"
          color={'primary'}
        >
          O que deseja encontrar ?
        </Typography>

        <Paper
          sx={{
            marginTop: 2,
            display: 'flex',
            justifyContent: 'center',
            background: '#fff',
            padding: 1,
          }}
        >
          <InputBase placeholder="Ex: iPhone 12 com garantia" fullWidth />
          <IconButton>
            <Search />
          </IconButton>
        </Paper>
      </Container>

      <Container
        maxWidth="lg"
        sx={{
          paddingBottom: 6,
        }}
      >
        <Typography
          component={'h2'}
          variant="h4"
          align="center"
          color={'primary'}
          sx={{ marginBottom: 2, marginTop: 2 }}
        >
          Destaques
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              imageUrl="https://source.unsplash.com/random"
              title="Produto X"
              price="70.90"
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card
              imageUrl="https://source.unsplash.com/random"
              title="Produto X"
              price="70.90"
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card
              imageUrl="https://source.unsplash.com/random"
              title="Produto X"
              price="70.90"
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card
              imageUrl="https://source.unsplash.com/random"
              title="Produto X"
              price="70.90"
            />
          </Grid>
        </Grid>
      </Container>
    </TemplateDefault>
  );
};

export default Home;
