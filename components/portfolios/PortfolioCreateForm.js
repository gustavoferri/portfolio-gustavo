import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button, FormGroup, Alert } from 'reactstrap';
import PortInput from '../form/PortInput';
import PortDate from '../form/PortDate';

const validateInputs = (values) => {
  let errors = {};


  Object.entries(values).forEach(([key, value])=> {
      if (!values[key] && key !== 'endDate') { 
        errors[key] = `O campo ${key} é obrigatório!`;
      }
  });

  const startDate = values.startDate;
  const endDate = values.endDate;

if (startDate && endDate && endDate.isBefore(startDate)) {
  errors.endDate = 'A data final tem que ser maior que a data de início!!!';
}



  return errors;
}

const PortfolioCreateForm = ({initialValues, onSubmit, error}) => (
  <FormGroup>
    <Formik
      initialValues={initialValues}
      validate={validateInputs}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
              <Field type="text" 
                     name="title" 
                     label="Title"
                     component={PortInput} />
              <Field type="text" 
                     name="company" 
                     label="Company"
                     component={PortInput} />
              <Field type="text" 
                     name="location"
                     label="Location"
                     component={PortInput} />
              <Field type="text" 
                     name="position"
                     label="Position" 
                     component={PortInput} />
              <Field name="description" 
                     label="Description"
                     component={PortInput} />

              <Field name="startDate" 
                     label="Start Date"
                     component={PortDate} />

              <Field name="endDate" 
                     label="End Date"
                     canBeDisabled={true}
                     component={PortDate} />
              { error &&
                <Alert color="danger">
                 {error}
                </Alert>
              }
              <Button color="success" size="lg" type="submit" disabled={isSubmitting}>
                Enviar
              </Button>
        </Form>
      )}
    </Formik>
  </FormGroup>
);

export default PortfolioCreateForm;
