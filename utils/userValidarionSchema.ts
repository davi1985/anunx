import * as Yup from 'yup';

export const initialValues = {
  name: '',
  email: '',
  password: '',
  passwordConfirmation: '',
};

const errorMessages = {
  REQUIRED: 'Campo obrigatório',
  PASSWORD_MIN: 'A senha precisa ter no mínimo 6 caracteres',
  EMAIL: 'E-mail inválido',
};

export const validationSchema = Yup.object().shape({
  name: Yup.string().required(errorMessages.REQUIRED),
  email: Yup.string()
    .email(errorMessages.EMAIL)
    .required(errorMessages.REQUIRED),
  password: Yup.string()
    .min(6, errorMessages.PASSWORD_MIN)
    .required(errorMessages.REQUIRED),
  passwordConfirmation: Yup.string()
    .required(errorMessages.REQUIRED)
    .oneOf([Yup.ref('password'), null], 'As senhas precisam ser iguais'),
});
