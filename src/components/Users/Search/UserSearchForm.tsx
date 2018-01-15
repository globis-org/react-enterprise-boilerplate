import { FormikBag, withFormik } from 'formik';
import * as React from 'react';
import * as yup from 'yup';

interface InnerFormValue {
  login: string;
}

interface InnerFormProps {
  onSubmit: (values: InnerFormValue, meta: FormikBag<{}, InnerFormValue>) => void;
  initialValues?: { login: 'test' };
}

const UserSearchForm = withFormik<InnerFormProps, InnerFormValue>
({
  mapPropsToValues: (props) =>
  props.initialValues || {
    login: 'aaa',
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
});

export const InnerForm = UserSearchForm((props) =>
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
  </form>,
);

// export default UserSearchForm;
