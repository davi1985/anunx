import { yupResolver } from '@hookform/resolvers/yup';
import {
  Box,
  Button,
  CircularProgress,
  Container,
  TextField,
  Typography,
} from '@mui/material';
import { NextPage } from 'next';
import { useSession, signIn } from 'next-auth/client';
import { useRouter } from 'next/router';
import { Google } from '@mui/icons-material';

import { useForm } from 'react-hook-form';
import { useCustomToast } from '../../../src/hooks/useCustomToast';
import { TemplateDefault } from '../../../src/templates/TemplateDefault';
import {
  initialValues,
  validationSchema,
} from '../../../utils/userLoginValidationSchema';

interface FormValues {
  email: string;
  password: string;
}

const Signin: NextPage = ({ APP_URL }: { APP_URL?: string }) => {
  const { notify } = useCustomToast();
  const router = useRouter();

  const [session] = useSession();

  console.log(session);
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
    signIn('credentials', {
      email: formValues.email,
      password: formValues.password,
      callbackUrl: `${APP_URL}/user/dashboar`,
    });
  };

  const handleGoolgeLogin = () => {
    signIn('google', {
      callbackUrl: `${APP_URL}/user/dashboard`,
    });
  };

  return (
    <TemplateDefault>
      <Container maxWidth="sm" component="main">
        <Typography component="h1" variant="h2" align="center">
          Entre na sua conta
        </Typography>
      </Container>

      <Container maxWidth="sm">
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
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Button
                sx={{ backgroundColor: '#de5246' }}
                variant="contained"
                startIcon={<Google />}
                onClick={handleGoolgeLogin}
              >
                Entrar com o Google
              </Button>
            </Box>

            <Box
              sx={{
                backgroundColor: '#e8e8e8',
                height: '1px',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 2,
              }}
            >
              <span style={{ background: '#fff', padding: '0 20px' }}>ou</span>
            </Box>

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
                  Entrar
                </Button>
              )}
            </Box>
          </Box>
        </form>
      </Container>
    </TemplateDefault>
  );
};

Signin.getInitialProps = async function () {
  return {
    APP_URL: process.env.APP_URL,
  };
};

export default Signin;
