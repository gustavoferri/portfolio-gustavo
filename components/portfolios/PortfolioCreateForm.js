// Render Prop
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button, FormGroup, Label } from 'reactstrap';
import PortInput from '../forn/PortInput';

 const validateInputs = (values) => {
    let errors  = {};

    Object.entries(values).forEach((objectKey) => {

      if(!values[key]) {
        errors[key] = `field ${key} is required!`]
      }
    });

    return errors;
  }

//     let errors = {};
//     if (!values.email) {
//       errors.email = 'Required';
//     } else if (
//       !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
//     ) {
//       errors.email = 'Invalid email address';
//     }
    return errors;
}


const INITIAL_VALUES = { title: '', 
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
            <Field type="position" 
                  name="Position" 
                  component={PortInput} />
            <Field type="textarea" 
                  name="description"
                  label="Descrição"
                  component={PortInput} />
    
    
          <FormGroup>
            <Label>Empresa</Label>
            <Field className="form-control"  type="text" name="company" />
            <ErrorMessage name="company" component="div" />
          </FormGroup>

          <FormGroup>
            <Label>Localização</Label>
            <Field className="form-control"  type="text" name="location" />
            <ErrorMessage name="location" component="div" />
          </FormGroup>
          
          <FormGroup>
            <Label>Position</Label>
            <Field className="form-control"  type="text" name="position" />
            <ErrorMessage name="position" component="div" />
          </FormGroup>

          <FormGroup>
            <Label>Descrição</Label>
            <Field className="form-control" type="textarea" name="description" component="textarea" />
            <ErrorMessage name="description" component="div" />
          </FormGroup>

          <FormGroup>
            <Label>Data de ínicio</Label>
            <Field className="form-control"  type="text" name="startDate" />
             <ErrorMessage name="startDate" component="div" />
          </FormGroup>

          <FormGroup>
            <Label>Data final</Label>
            <Field className="form-control" type="text" name="endDate" />
            <ErrorMessage name="endDate" component="div" />
          </FormGroup>

          <button type="submit" disabled={isSubmitting}>
            Criar
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default PortfolioCreateForm;