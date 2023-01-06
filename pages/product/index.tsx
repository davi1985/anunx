import {
  Avatar,
  Box,
  Card,
  CardHeader,
  CardMedia,
  Chip,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import { NextPage } from 'next';
import Carousel from 'react-material-ui-carousel';
import { TemplateDefault } from '../../src/templates/TemplateDefault';
import { formattedPrice } from '../../utils/formattedPrice';

const Product: NextPage = () => {
  return (
    <TemplateDefault>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={8}>
            <Box sx={{ backgroundColor: '#fff', padding: 3, marginBottom: 3 }}>
              <Carousel
                animation="slide"
                navButtonsAlwaysVisible
                autoPlay={false}
                navButtonsProps={{
                  style: {
                    color: 'white',
                  },
                }}
              >
                <Card sx={{ height: '100%' }}>
                  <CardMedia
                    sx={{ padding: '56%' }}
                    image={'https://source.unsplash.com/random?a=1'}
                    title="Thiago Medeiros"
                  />
                </Card>

                <Card sx={{ height: '100%' }}>
                  <CardMedia
                    sx={{ padding: '56%' }}
                    image={'https://source.unsplash.com/random?a=2'}
                    title="Thiago Medeiros"
                  />
                </Card>
              </Carousel>
            </Box>

            <Box
              sx={{ backgroundColor: '#fff', padding: 3, marginBottom: 3 }}
              textAlign="left"
            >
              <Typography component={'span'} variant="caption">
                Publicado em 05 de janeiro de 2022
              </Typography>

              <Typography
                component={'h4'}
                variant="h4"
                sx={{ margin: '15px 0' }}
              >
                Jaguar XE D R-Sport Aut
              </Typography>

              <Typography
                component={'h4'}
                variant="h4"
                sx={{ fontWeight: 'bold', marginBottom: 1 }}
              >
                {formattedPrice('5000')}
              </Typography>

              <Chip label="categoria" />
            </Box>

            <Box
              sx={{ backgroundColor: '#fff', padding: 3, marginBottom: 3 }}
              textAlign="left"
            >
              <Typography component={'h6'} variant="h6">
                Descrição
              </Typography>

              <Typography component={'p'} variant="body2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Ratione doloremque aspernatur error? Accusamus natus dignissimos
                sint, nesciunt aspernatur molestias quo ipsa impedit animi, aut,
                ipsam quis hic sunt reiciendis itaque. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Laboriosam, doloribus
                commodi. Reprehenderit, in et magni illum similique modi laborum
                ratione autem non sunt deleniti impedit, nihil voluptatum
                mollitia quia itaque?
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={4}>
            <Card
              elevation={0}
              sx={{ backgroundColor: '#fff', padding: 3, marginBottom: 3 }}
            >
              <CardHeader
                avatar={<Avatar>D</Avatar>}
                title="Davi Silva"
                subheader="davisilvaphoto@gmail.com"
              />

              <CardMedia
                image={'https://source.unsplash.com/random'}
                title="Thiago Medeiros"
              />
            </Card>

            <Box sx={{ backgroundColor: '#fff', padding: 3, marginBottom: 3 }}>
              <Typography component={'h6'} variant="h6">
                Localização
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </TemplateDefault>
  );
};

export default Product;
