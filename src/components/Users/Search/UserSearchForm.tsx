import { FormikValues, InjectedFormikProps, withFormik } from 'formik';
import * as React from 'react';
import { compose, pure } from 'recompose';
import { Button, Input, Message } from 'semantic-ui-react';
import * as Yup from 'yup';

import { InjectedTranslateProps, translate } from 'react-i18next';
import i18n from '../../../i18n';
import './UserSearchForm.css';

interface Values extends FormikValues {
  login: string;
}

interface Props {
  login: string;
  searchUsers: (login: string) => any;
}

type InnerFormProps = InjectedFormikProps<Props, Values> & InjectedTranslateProps;

const InnerForm: React.SFC<InnerFormProps> = ({
  errors,
  handleChange,
  handleSubmit,
  isSubmitting,
  t,
  touched,
  values,
}) => (
  <form
    className={'UserSearchForm'}
    onSubmit={handleSubmit}
  >
    <Input
      id={'login'}
      placeholder={t('ui.label.username')}
      type={'text'}
      onChange={handleChange}
      size={'medium'}
      value={values.login}
      data-test={'login-name'}
    />
    <Button
      type={'submit'}
      disabled={isSubmitting}
      primary={true}
      data-test={'exec-search'}
    >
      {t('ui.label.search')}
    </Button>
    {touched.login && errors.login &&
    <Message error={true} data-test={'error-message'}>
      {errors.login}
    </Message>}
  </form>
);

const UserSearchForm = compose<any, any>(
  withFormik<Props, Values>({
    mapPropsToValues: (props: Props) => ({
      login: props.login || '',
      onSubmit:
        props.searchUsers ? props.searchUsers : () => {},
    }),
    validationSchema: Yup.object().shape({
      login: Yup.string()
        .max(
          16,
          i18n.t('ui.warning.maxlength', { length: 16 }),
        )
        .required(i18n.t('ui.warning.required')),
      },
    ),
    handleSubmit: (values, { setSubmitting }) => {
      values.onSubmit(values.login);
      setSubmitting(false);
    },
  }),
  translate(),
  pure,
)(InnerForm);

export default UserSearchForm;
