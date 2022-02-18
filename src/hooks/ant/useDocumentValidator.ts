import { cnpj, cpf } from 'cpf-cnpj-validator';
import { clearNonNumber } from '../../utils/strings';

/**
 * Esse hook deve ser usado somente em formulario do ant, pois retorna um custom validator
 */
const useDocumentValidator = (type: 'cpf' | 'cnpj' | 'both') => {
  const validator = ({ getFieldValue }) => ({
    validator(_, value) {
      if (!value) {
          return Promise.resolve();
      }
      const doc = clearNonNumber(value);
      let valid = true;
      let errorMessage = '';
      switch (type) {
        case 'cpf':
          if (!cpf.isValid(doc)) {
            valid = false;
            errorMessage = 'CPF inválido';
          }
          break;
        case 'cnpj':
          if (!cnpj.isValid(doc)) {
            valid = false;
            errorMessage = 'CNPJ inválido';
          }
          break;
        case 'both':
        default:
          if (!cnpj.isValid(doc) && !cpf.isValid(doc)) {
            valid = false;
            errorMessage = `${doc.length > 11 ? 'CNPJ' : 'CPF'} inválido`;
          }
      }

      if (valid) {
        return Promise.resolve();
      }
      return Promise.reject(new Error(errorMessage));
    },
  });
  return validator;
};

export default useDocumentValidator;
