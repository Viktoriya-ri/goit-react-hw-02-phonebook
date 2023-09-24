import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { FormWrapper, FormInput, Button, Error } from './Input.styled';

const schema = yup.object().shape({
  name: yup.string().min(3).max(30).required(),
  number: yup.number().min(3).required(),
});

const Input = ({ onsubmit }) => {

  const initialValues = {
    name: '',
    number: '',
  }
  return( {
  <Formik initialValues={initialValues} validationSchema={schema} onSubmit={onSubmit}>
    <FormWrapper>
      <FormInput type='text' name='name' ></FormInput>

      </FormWrapper>
    </Formik>
  })

}

