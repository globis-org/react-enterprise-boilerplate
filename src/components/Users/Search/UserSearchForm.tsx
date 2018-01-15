import { FormikProps, withFormik } from 'formik';
import * as React from 'react';
import * as yup from 'yup';

interface FormValues {
  login: string;
}

const InnerForm: React.SFC<FormikProps<FormValues>> =
  (props) =>
(
  <form onSubmit={props.handleSubmit}>
    <input
      id="login"
      placeholder="ユーザー名"
      type="text"
      value={props.values.login}
    />
    {props.touched.login && props.errors.login &&
    <div>{props.errors.login}</div>}
    <button
      type="submit"
      disabled={props.isSubmitting}
    >
      送信
    </button>
  </form>
);

const UserSearchForm = withFormik<FormikProps<FormValues>, FormValues>({
  mapPropsToValues: () => ({ login: '' }),
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
})(InnerForm);

export default UserSearchForm;
