import { FormikValues, InjectedFormikProps, withFormik } from 'formik';
import * as React from 'react';
import * as Yup from 'yup';

interface FormValues extends FormikValues {
  login: string;
}

interface FormProps {
  login?: string;
  onSubmit?: (login: string) => void;
}

const InnerForm: React.SFC<InjectedFormikProps<FormProps, FormValues>> =
  (props) =>
(
  <form onSubmit={props.handleSubmit}>
    <input
      id="login"
      placeholder="ユーザー名"
      type="text"
      onChange={props.handleChange}
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

const UserSearchForm = withFormik<FormProps, FormValues>({
  mapPropsToValues: (props: FormProps) => ({
    login: props.login || '',
    onSubmit:
      props.onSubmit ? props.onSubmit : () => {},
  }),
  validationSchema: Yup.object().shape({
    login: Yup.string()
      .max(16, '16文字以内で入力してください')
      .required('ユーザー名を入力してください'),
    },
  ),
  handleSubmit: (values, { setSubmitting }) => {
    values.onSubmit(values.login);
    setSubmitting(false);
  },
})(InnerForm);

export default UserSearchForm;
