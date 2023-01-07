import * as Yup from 'yup';

const errorMessages = {
  REQUIRED: 'Campo obrigatório',
  TITLE_MIN: 'Escreva um título maior',
  TITLE_MAX: 'Título do anúncio muito grande',
  DESCRIPTION_MIN: 'Escreva uma descrição com pelo menos 50 caracteres',
  EMAIL: 'E-mail inválido',
};

export const validationSchema = Yup.object().shape({
  title: Yup.string()
    .min(6, errorMessages.TITLE_MIN)
    .max(100, errorMessages.TITLE_MAX)
    .required(errorMessages.REQUIRED),
  category: Yup.string().required(errorMessages.REQUIRED),
  description: Yup.string()
    .min(50, 'Escreva uma descrição com pelo menos 50 caracteres')
    .required(errorMessages.REQUIRED),
  fullName: Yup.string().required(errorMessages.REQUIRED),
  email: Yup.string()
    .email(errorMessages.EMAIL)
    .required(errorMessages.REQUIRED),
  price: Yup.string().required(errorMessages.REQUIRED),
  cellPhone: Yup.string().required(errorMessages.REQUIRED),
});
