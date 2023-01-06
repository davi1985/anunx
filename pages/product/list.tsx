import { Search } from '@mui/icons-material';
import {
  Box,
  Container,
  Grid,
  IconButton,
  InputBase,
  Paper,
  Typography,
} from '@mui/material';
import { NextPage } from 'next';
import { Card } from '../../src/components/Card';
import { TemplateDefault } from '../../src/templates/TemplateDefault';

const Product: NextPage = () => {
  return (
    <TemplateDefault>
      <Container maxWidth="lg">
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

        <Grid item xs={12} sm={12} md={12}>
          <Box
            sx={{
              backgroundColor: '#fff',
              padding: 3,
              marginBottom: 3,
              marginTop: 3,
            }}
          >
            <Typography component="h6" variant="h6">
              Anúncios
            </Typography>

            <Typography component="span" variant="subtitle2">
              Encontrados 200 Anúncios
            </Typography>

            <Grid container spacing={4}>
              <Grid item xs={12} sm={6} md={4}>
                <Card
                  imageUrl="https://source.unsplash.com/random?a=1"
                  price={'59.90'}
                  title="Produto A"
                />
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <Card
                  imageUrl="https://source.unsplash.com/random?a=1"
                  price={'59.90'}
                  title="Produto A"
                />
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <Card
                  imageUrl="https://source.unsplash.com/random?a=1"
                  price={'59.90'}
                  title="Produto A"
                />
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Container>
    </TemplateDefault>
  );
};

export default Product;
