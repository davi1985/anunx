import { yupResolver } from '@hookform/resolvers/yup';
import {
  Box,
  Button,
  CircularProgress,
  Container,
  TextField,
  Typography,
} from '@mui/material';
import axios, { AxiosError } from 'axios';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { useCustomToast } from '../../../src/hooks/useCustomToast';
import { TemplateDefault } from '../../../src/templates/TemplateDefault';
import {
  initialValues,
  validationSchema,
} from '../../../utils/userValidarionSchema';

interface FormValues {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

const Signup: NextPage = () => {
  const { notify } = useCustomToast();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid, isSubmitting },
    reset,
  } = useForm<FormValues>({
    mode: 'onBlur',
    resolver: yupResolver(validationSchema),
    defaultValues: initialValues,
  });

  const onSubmit = async (formValues: FormValues) => {
    try {
      const response = await axios.post('/api/users', formValues);

      notify({
        message: 'Usuário cadastrado com sucesso',
        type: 'success',
      });

      reset();

      router.push('/auth/signin');
    } catch (error: unknown | AxiosError) {
      notify({
        message: `Ocorreu um erro ao cadastrar novo usuário. ${error}`,
        type: 'error',
      });
    }
  };

  return (
    <TemplateDefault>
      <Container maxWidth="sm" component="main">
        <Typography component="h1" variant="h2" align="center">
          Crie sua conta
        </Typography>

        <Typography component="h5" variant="h5" align="center">
          E anuncie para todo o Brasil
        </Typography>
      </Container>

      <Container maxWidth="md">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box
            sx={{
              backgroundColor: '#fff',
              padding: 3,
              marginBottom: 3,
              marginTop: 3,
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
            }}
          >
            <TextField
              size="small"
              label="Nome Completo"
              variant="standard"
              fullWidth
              {...register('name')}
              error={!!errors.name?.message}
              helperText={errors.name?.message}
            />

            <TextField
              size="small"
              label="E-mail"
              variant="standard"
              fullWidth
              {...register('email')}
              error={!!errors.email?.message}
              helperText={errors.email?.message}
            />

            <TextField
              type="password"
              size="small"
              label="Sua Senha"
              variant="standard"
              fullWidth
              {...register('password')}
              error={!!errors.password?.message}
              helperText={errors.password?.message}
            />

            <TextField
              type="password"
              size="small"
              label="Confirme sua senha"
              variant="standard"
              fullWidth
              {...register('passwordConfirmation')}
              error={!!errors.passwordConfirmation?.message}
              helperText={errors.passwordConfirmation?.message}
            />

            <Box
              sx={{
                paddingTop: 2,
                paddingBottom: 2,
              }}
            >
              {isSubmitting ? (
                <CircularProgress sx={{ display: 'block', margin: 'auto' }} />
              ) : (
                <Button
                  disabled={!isDirty || !isValid}
                  variant="contained"
                  type="submit"
                  sx={{
                    width: '100%',
                  }}
                >
                  Criar conta
                </Button>
              )}
            </Box>
          </Box>
        </form>
      </Container>
    </TemplateDefault>
  );
};

export default Signup;
