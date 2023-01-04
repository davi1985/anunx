import { DeleteForever } from '@mui/icons-material';
import {
  Box,
  Button,
  Container,
  IconButton,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import { TemplateDefault } from '../../src/templates/TemplateDefault';

import { useCallback, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';

export default function PublishedPage() {
  const [files, setFiles] = useState<File[]>([]);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const newFiles = acceptedFiles.map((file) => URL.createObjectURL(file));

      setFiles((prev) => [...prev, newFiles]);
    },
    [setFiles]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
  });

  const handleRemoveFile = (file: File) =>
    setFiles(files.filter((fileSaved) => fileSaved !== file));

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
            <option value="">Selecione a categoria</option>
            <option value={1}></option>
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

          <Typography component={'div'} variant="body2" gutterBottom>
            A primeira imagem é a principal
          </Typography>

          <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <Box
              {...getRootProps()}
              sx={{
                padding: 1,
                width: 200,
                height: 150,
                backgroundColor: 'rgb(242, 244, 245)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: 'dashed',
                textAlign: 'center',
                cursor: 'pointer',
                margin: '0 15px 15px 0',
              }}
            >
              <input {...getInputProps()} />

              <Typography variant="body2">
                Clique para adicionar ou arraste a imagem aqui
              </Typography>
            </Box>

            {files.map((file, index) => {
              return (
                <Box
                  key={index}
                  sx={{
                    position: 'relative',
                    width: 200,
                    height: 150,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                    margin: '0 15px 15px 0',
                  }}
                  style={{
                    backgroundImage: `url(${file})`,
                  }}
                >
                  {index === 0 ? (
                    <Box
                      sx={{
                        backgroundColor: 'blue',
                        padding: '6px 10px',
                        position: 'absolute',
                        color: '#fff',
                        textTransform: 'uppercase',
                        bottom: 0,
                        left: 0,
                      }}
                    >
                      <Typography variant="body2">Principal</Typography>
                    </Box>
                  ) : null}

                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      textAlign: 'center',
                      width: '100%',
                      height: '100%',

                      '&:hover': {
                        backgroundColor: 'rgba(0,0,0,0.4)',
                        cursor: 'pointer',
                      },
                    }}
                  >
                    <IconButton onClick={() => handleRemoveFile(file)}>
                      <DeleteForever sx={{ color: '#fff' }} fontSize="large" />
                    </IconButton>
                  </Box>
                </Box>
              );
            })}
          </Box>
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
