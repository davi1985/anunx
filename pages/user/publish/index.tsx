import { yupResolver } from '@hookform/resolvers/yup';
import {
  Box,
  Button,
  Container,
  FormControl,
  FormHelperText,
  FormLabel,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import { TemplateDefault } from '../../../src/templates/TemplateDefault';

import { Controller, FormProvider, useForm } from 'react-hook-form';
import { FileInput } from '../../../src/components/FileInput';
import {
  initialValues,
  validationSchema,
} from '../../../utils/validationSchema';

interface FormValues {
  title: string;
  category: string;
  description: string;
  price: string;
  fullName: string;
  email: string;
  cellPhone: string;
  files: File[];
}

export default function PublishedPage() {
  const methods = useForm({
    defaultValues: initialValues,
    mode: 'onBlur',
    resolver: yupResolver(validationSchema),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = methods;

  const onSubmit = (data: FormValues) => console.log(data);

  return (
    <TemplateDefault>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Container maxWidth="sm">
            <Typography
              component={'h1'}
              variant="h3"
              align="center"
              color="primary"
              gutterBottom
            >
              Publicar anúncio
            </Typography>

            <Typography
              component={'h5'}
              variant="h5"
              align="center"
              sx={{ marginBottom: 2 }}
            >
              Quanto mais detalhado, melhor!
            </Typography>
          </Container>

          <Container maxWidth="md">
            <Box sx={{ backgroundColor: '#fff', padding: 3 }} borderRadius={1}>
              <TextField
                label="Titulo do Anúncio"
                placeholder="ex: Bicicleta aro 26"
                size="small"
                fullWidth
                variant="standard"
                sx={{ marginBottom: 4 }}
                {...register('title')}
                error={!!errors.title?.message}
                helperText={errors.title?.message}
              />

              <FormControl fullWidth error={!!errors.category}>
                <FormLabel>Categoria</FormLabel>

                <Controller
                  name="category"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Select
                      label="Categoria"
                      variant="standard"
                      fullWidth
                      id="category"
                      value={field.value}
                      {...register('category')}
                    >
                      <MenuItem value="">Selecione uma categoria</MenuItem>
                      <MenuItem value="Bebê e Criança">Bebê e Criança</MenuItem>
                      <MenuItem value="Agricultura">Agricultura</MenuItem>
                      <MenuItem value="Moda">Moda</MenuItem>
                      <MenuItem value="Carros, Motos e Barcos">
                        Carros, Motos e Barcos
                      </MenuItem>
                      <MenuItem value="Serviços">Serviços</MenuItem>
                      <MenuItem value="Lazer">Lazer</MenuItem>
                      <MenuItem value="Animais">Animais</MenuItem>
                      <MenuItem value="Móveis, Casa e Jardim">
                        Móveis, Casa e Jardim
                      </MenuItem>
                      <MenuItem value="Imoveis">Imoveis</MenuItem>
                      <MenuItem value="Equipamentos e Ferramentas">
                        Equipamentos e Ferramentas
                      </MenuItem>
                      <MenuItem value="Celulares e Tables">
                        Celulares e Tables
                      </MenuItem>
                      <MenuItem value="Esporte">Esporte</MenuItem>
                      <MenuItem value="Tecnologia">Tecnologia</MenuItem>
                      <MenuItem value="Emprego">Emprego</MenuItem>
                      <MenuItem value="Outros">Outros</MenuItem>
                    </Select>
                  )}
                />

                <FormHelperText>{errors.category?.message}</FormHelperText>
              </FormControl>
            </Box>
          </Container>

          <Container maxWidth="md" sx={{ marginTop: 2 }}>
            <Box sx={{ backgroundColor: '#fff', padding: 3 }} borderRadius={1}>
              <Typography component={'h6'} variant="h6" gutterBottom>
                Imagens
              </Typography>

              <Typography component={'div'} variant="body2" gutterBottom>
                A primeira imagem é a principal
              </Typography>

              <FileInput
                accept="image/png, image/jpg, image/jpeg, image/gif"
                multiple
                name="files"
              />
            </Box>
          </Container>

          <Container maxWidth="md" sx={{ marginTop: 2 }}>
            <Box sx={{ backgroundColor: '#fff', padding: 3 }} borderRadius={1}>
              <Typography component={'h6'} variant="h6" gutterBottom>
                Descrição
              </Typography>

              <TextField
                label="Escreva os detalhes do que está vendendo aqui..."
                multiline
                rows={6}
                variant="outlined"
                fullWidth
                {...register('description')}
                error={!!errors.description?.message}
                helperText={errors.description?.message}
              />
            </Box>
          </Container>

          <Container maxWidth="md" sx={{ marginTop: 2 }}>
            <Box sx={{ backgroundColor: '#fff', padding: 3 }} borderRadius={1}>
              <FormControl fullWidth variant="outlined" component={'fieldset'}>
                <InputLabel style={errors.price && { color: '#d32f2f' }}>
                  Preço de Venda
                </InputLabel>

                <OutlinedInput
                  label="Preço de Venda"
                  {...register('price')}
                  error={!!errors.price?.message}
                  startAdornment={
                    <InputAdornment position="start">R$</InputAdornment>
                  }
                />

                <FormHelperText sx={{ color: '#d32f2f' }}>
                  {errors.price?.message}
                </FormHelperText>
              </FormControl>
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
                {...register('fullName')}
                error={!!errors.fullName?.message}
                helperText={errors.fullName?.message}
              />

              <TextField
                size="small"
                label="E-mail"
                variant="outlined"
                fullWidth
                {...register('email')}
                error={!!errors.email?.message}
                helperText={errors.email?.message}
              />

              <TextField
                size="small"
                label="Telefone"
                variant="outlined"
                fullWidth
                {...register('cellPhone')}
                error={!!errors.cellPhone?.message}
                helperText={errors.cellPhone?.message}
              />
            </Box>
          </Container>

          <Container maxWidth="md" sx={{ marginTop: 2 }}>
            <Box textAlign="right">
              <Button variant="contained" type="submit">
                Publicar Anúncio
              </Button>
            </Box>
          </Container>
        </form>
      </FormProvider>
    </TemplateDefault>
  );
}
