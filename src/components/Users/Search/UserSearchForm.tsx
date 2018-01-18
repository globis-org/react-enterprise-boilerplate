import { FormikValues, InjectedFormikProps, withFormik } from 'formik';
import * as React from 'react';
import { Button, Input } from 'semantic-ui-react';
import * as Yup from 'yup';

import './UserSearchForm.css';

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
  <form className="UserSearchForm" onSubmit={props.handleSubmit}>
    <Input
      id="login"
      placeholder="ユーザー名"
      type="text"
      onChange={props.handleChange}
      value={props.values.login}
    />
    {props.touched.login && props.errors.login &&
    <div>{props.errors.login}</div>}
    <Button
      type="submit"
      color="green"
      disabled={props.isSubmitting}
    >
      送信
    </Button>
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
