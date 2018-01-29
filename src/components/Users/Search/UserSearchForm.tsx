import { FormikValues, InjectedFormikProps, withFormik } from 'formik';
import * as React from 'react';
import { compose, pure } from 'recompose';
import { Button, Input, Message } from 'semantic-ui-react';
import * as Yup from 'yup';

import { InjectedTranslateProps, translate } from 'react-i18next';
import i18n from '../../../i18n';
import './UserSearchForm.css';

interface Values extends FormikValues {
  query: string;
}

interface Props {
  query: string;
  onSubmit: (query: string) => any;
}

type InnerFormProps = InjectedFormikProps<Props, Values> & InjectedTranslateProps;

const InnerForm: React.SFC<InnerFormProps> = ({
  t,
  errors,
  handleChange,
  handleSubmit,
  isSubmitting,
  touched,
  values,
}) => (
  <form
    className={'UserSearchForm'}
    onSubmit={handleSubmit}
  >
    <Input
      id={'query'}
      placeholder={t('ui.label.username')}
      type={'text'}
      onChange={handleChange}
      size={'medium'}
      value={values.query}
      data-test={'query-text'}
    />
    <Button
      type={'submit'}
      disabled={isSubmitting}
      primary={true}
      data-test={'exec-search'}
    >
      {t('ui.label.search')}
    </Button>
    {touched.query && errors.query &&
    <Message error={true} data-test={'error-message'}>
      {errors.query}
    </Message>}
  </form>
);

const UserSearchForm = compose<any, any>(
  withFormik<Props, Values>({
    mapPropsToValues: (props: Props) => ({
      query: props.query || '',
      onSubmit:
        props.onSubmit ? props.onSubmit : () => {},
    }),
    validationSchema: Yup.object().shape({
      query: Yup.string()
        .max(
          16,
          i18n.t('ui.warning.maxlength', { length: 16 }),
        )
        .required(i18n.t('ui.warning.required')),
      },
    ),
    handleSubmit: (values, { setSubmitting }) => {
      values.onSubmit(values.query);
      setSubmitting(false);
    },
  }),
  translate(),
  pure,
)(InnerForm);

export default UserSearchForm;
