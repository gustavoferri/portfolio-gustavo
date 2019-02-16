// Render Prop
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button, Alert } from 'reactstrap';
import PortInput from '../form/PortInput';
import PortDate from '../form/PortDate';



 const validateInputs = (values) => {
    let errors  = {};

    Object.entries(values).forEach((objectKey) => {

      if(!values[key]) {
        errors[key] = `field ${key} is required!`;
      }
    });

    return errors;
  }


const INITIAL_VALUES = {  title: '', 
                          company: '',
                          location: '', 
                          description: '', 
                          startDate: '', 
                          endDate: '' };

const PortfolioCreateForm = () => (
  <div>
    <Formik
      initialValues={INITIAL_VALUES}
      validate={validateInputs}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
            <Field type="text" 
                   name="title" 
                   label="Title"
                   component={PortInput} />
            <Field type="text" 
                   name="company"
                   label="Empresa"
                   component={PortInput} />
            <Field type="text" 
                   name="location"
                   label="Localização" 
                   component={PortInput} />
            <Field type="text" 
                   name="Position"
                   label="Position" 
                   component={PortInput} />
            <Field type="textarea"
                   name="description"
                   label="Descrição"
                   component={PortInput} />
    
            <Field name="description"
                  label="Start Date"
                  component={PortDate} />

            <Field name="endDate"
                  label="End Date"
                  component={PortDate} />
  

          <button type="submit" disabled={isSubmitting}>
            Criar
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default PortfolioCreateForm;