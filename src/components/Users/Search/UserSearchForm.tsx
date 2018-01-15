import { FormikBag, withFormik } from 'formik';
import * as React from 'react';
import * as yup from 'yup';

interface InnerFormValue {
  login: string;
}

interface InnerFormProps {
  onSubmit: (values: InnerFormValue, meta: FormikBag<{}, InnerFormValue>) => void;
  initialValues?: { login: '' };
}

const UserSearchForm = withFormik<InnerFormProps, InnerFormValue>
({
  mapPropsToValues: ({initialValues}) =>
  initialValues || {
    login: '',
  },
  validationSchema: yup.object().shape({
    login: yup.string()
      .max(16, '16文字以内で入力してください')
      .required('ユーザー名を入力してください'),
    },
  ),
  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(
      () => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      },
      1000,
    );
  },
})(({errors, touched, isSubmitting, handleChange, handleSubmit, values}) =>
  <form onSubmit={handleSubmit}>
    <input
      id="login"
      name="login"
      onChange={handleChange}
      placeholder="ユーザー名"
      type="text"
      value={values.login}
    />
    {touched.login && errors.login &&
    <div>{errors.login}</div>}
    <button
      type="submit"
      disabled={isSubmitting}
    >
      送信
    </button>
  </form>
);

export default UserSearchForm;
