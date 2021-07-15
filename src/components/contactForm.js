import React, { useState, useEffect } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import ReCAPTCHA from 'react-google-recaptcha';
import Button from './button';
import styled from 'styled-components';

export default function ContactForm({ setIsSuccess }) {
  const [token, setToken] = useState(null);

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
      )
      .join('&');
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.google.com/recaptcha/api.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  const handleChange = (response) => {
    setToken(response);
  };

  const handleSubmit = (data) => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'contact-form',
        ...data,
      }),
    })
      .then(() => console.log('send'))
      .catch((err) => console.log(err));
  };

  return (
    <Formik
      initialValues={{
        name: '',
        phone: '',
        email: '',
        message: '',
      }}
      validate={(values) => {
        const errors = {};
        if (!values.name) {
          errors.name = 'To pole jest wymagane!';
        } else if (values.name.length <= 1) {
          errors.name = 'To pole wymaga minimum 2 znaków.';
        }

        if (!values.phone) {
          errors.phone = 'To pole jest wymagane!';
        } else if (
          !/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/.test(
            values.phone
          )
        ) {
          errors.phone = 'Niepoprawny numer telefonu!';
        }

        if (!values.email) {
          errors.email = 'To pole jest wymagane!';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
        ) {
          errors.email = 'Niepoprawny adres email!';
        }

        if (!values.message) {
          errors.message = 'To pole jest wymagane!';
        } else if (values.message.length <= 9) {
          errors.message = 'To pole wymaga minimum 10 znaków.';
        }

        return errors;
      }}
      onSubmit={handleSubmit}>
      <Form
        name="contact-form"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field">
        <Field type="hidden" name="form-name" value="contact-form" />
        <Field type="hidden" name="bot-field" />
        <label>
          <span>imię:</span>
          <Field name="name" type="text" />
          <div className="errorMessage">
            <ErrorMessage name="name" />
          </div>
        </label>
        <label>
          <span>email:</span>
          <Field name="email" type="text" />
          <div className="errorMessage">
            <ErrorMessage name="email" />
          </div>
        </label>
        <label>
          <span>telefon:</span>
          <Field name="phone" type="text" />
          <div className="errorMessage">
            <ErrorMessage name="phone" />
          </div>
        </label>
        <label>
          <span>wiadomość:</span>
          <Field name="message" as="textarea" rows="5" />
          <div className="errorMessage">
            <ErrorMessage name="message" />
          </div>
        </label>
        {/* <ReCAPTCHA
          sitekey={process.env.GATSBY_SITE_KEY_RECAPTCHA}
          onChange={handleChange}
        /> */}
        <br />
        <Button secondary type="submit">
          Wyślij wiadomość
        </Button>
      </Form>
    </Formik>
  );
}
