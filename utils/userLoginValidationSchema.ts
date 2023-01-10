import * as Yup from 'yup';

export const initialValues = {
  email: '',
  password: '',
};

const errorMessages = {
  REQUIRED: 'Campo obrigatório',
  EMAIL: 'E-mail inválido',
};

export const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email(errorMessages.EMAIL)
    .required(errorMessages.REQUIRED),
  password: Yup.string().required(errorMessages.REQUIRED),
});
