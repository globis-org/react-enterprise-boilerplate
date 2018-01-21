import { FormikValues, InjectedFormikProps, withFormik } from 'formik';
import * as React from 'react';
import { compose, pure } from 'recompose';
import { Button, Input, Message } from 'semantic-ui-react';
import * as Yup from 'yup';

import { translate } from 'react-i18next';
import { InjectedTranslateProps } from 'react-i18next/src/props';
import './UserSearchForm.css';

interface Values extends FormikValues {
  login: string;
}

interface Props {
  login?: string;
  onSubmit?: (login: string) => void;
}

type InnerFormProps = InjectedFormikProps<Props, Values> & InjectedTranslateProps;

const InnerForm: React.SFC<InnerFormProps> = (
  props,
) => (
  <form className="UserSearchForm" onSubmit={props.handleSubmit}>
    <Input
      id="login"
      placeholder={props.t('ui.username')}
      type="text"
      onChange={props.handleChange}
      value={props.values.login}
    />
    <Button
      type="submit"
      disabled={props.isSubmitting}
      primary={true}
    >
      {props.t('ui.search')}
    </Button>
    {props.touched.login && props.errors.login &&
    <Message color="red">{props.errors.login}</Message>}
  </form>
);

const UserSearchForm = compose(
  withFormik<Props, Values>({
    mapPropsToValues: (props: Props) => ({
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
  }),
  translate(),
  pure,
)(InnerForm as any);

export default UserSearchForm;
