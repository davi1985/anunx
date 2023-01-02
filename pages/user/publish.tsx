import {
  Box,
  Container,
  Select,
  TextField,
  Typography,
  Button,
} from '@mui/material';
import { TemplateDefault } from '../../src/templates/TemplateDefault';

export default function PublishedPage() {
  return (
    <TemplateDefault>
      <Container
        maxWidth="sm"
        sx={{
          paddingTop: 8,
          paddingBottom: 6,
        }}
      >
        <Typography
          component={'h1'}
          variant="h3"
          align="center"
          color="primary"
          gutterBottom
        >
          Publicar anúncio
        </Typography>

        <Typography component={'h5'} variant="h5" align="center">
          Quanto mais detalhado, melhor!
        </Typography>
      </Container>

      <Container maxWidth="md">
        <Box sx={{ backgroundColor: '#fff', padding: 3 }} borderRadius={1}>
          <Typography component={'h6'} variant="h6" gutterBottom>
            Título do anúncio
          </Typography>

          <TextField
            label="ex: Bicicleta aro 26"
            size="small"
            fullWidth
            variant="standard"
            sx={{ marginBottom: 4 }}
          />

          <Select
            variant="standard"
            native
            value=""
            fullWidth
            onChange={() => {}}
            inputProps={{}}
          >
            <option value="">Selecione</option>
            <option value={1}>Bebê e Criança</option>
            <option value={2}>Agricultura</option>
            <option value={3}>Moda</option>
            <option value={3}>Carros, Motos e Barcos</option>
            <option value={3}>Serviços</option>
            <option value={3}>Lazer</option>
            <option value={3}>Animais</option>
            <option value={3}>Móveis, Casa e Jardim</option>
            <option value={3}>Imoveis</option>
            <option value={3}>Equipamentos e Ferramentas</option>
            <option value={3}>Celulares e Tables</option>
            <option value={3}>Esporte</option>
            <option value={3}>Tecnologia</option>
            <option value={3}>Emprego</option>
            <option value={3}>Outros</option>
          </Select>
        </Box>
      </Container>

      <Container maxWidth="md" sx={{ marginTop: 2 }}>
        <Box sx={{ backgroundColor: '#fff', padding: 3 }} borderRadius={1}>
          <Typography component={'h6'} variant="h6" gutterBottom>
            Imagens
          </Typography>

          <Typography component={'div'} variant="body2">
            A primeira imagem é a principal
          </Typography>
        </Box>
      </Container>

      <Container maxWidth="md" sx={{ marginTop: 2 }}>
        <Box sx={{ backgroundColor: '#fff', padding: 3 }} borderRadius={1}>
          <Typography component={'h6'} variant="h6" gutterBottom>
            Descrição
          </Typography>

          <Typography component={'div'} variant="body2" gutterBottom>
            Escreva os detalhes do que está vendendo
          </Typography>

          <TextField multiline rows={6} variant="outlined" fullWidth />
        </Box>
      </Container>

      <Container maxWidth="md" sx={{ marginTop: 2 }}>
        <Box
          sx={{
            backgroundColor: '#fff',
            padding: 3,
            gap: 2,
            display: 'flex',
            flexDirection: 'column',
          }}
          borderRadius={1}
        >
          <Typography component={'h6'} variant="h6" gutterBottom>
            Dados de contato
          </Typography>

          <TextField
            size="small"
            label="Nome Completo"
            variant="outlined"
            fullWidth
          />

          <TextField size="small" label="E-mail" variant="outlined" fullWidth />
          <TextField
            size="small"
            label="Telefone"
            variant="outlined"
            fullWidth
          />
        </Box>
      </Container>

      <Container maxWidth="md" sx={{ marginTop: 2 }}>
        <Box textAlign="right">
          <Button variant="contained">Publicar Anúncio</Button>
        </Box>
      </Container>
    </TemplateDefault>
  );
}
