import React from "react"
import {useSelector} from "react-redux";
import InputMask from "react-input-mask";
import {Field, Form, Formik} from "formik";
import * as Yup from "yup";

import s from "./SignUpInfoFrom.module.scss";

const initialValues = {
  mobilePhone: '',
  email: '',
  password: '',
  repeatPassword: ''
}

const ValidationSchema = Yup.object().shape({
  mobilePhone: Yup.string()
    .matches('^\\+375\\d{9}$', 'Is not in correct format!')
    .required('Required'),
  email: Yup.string()
    .matches('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$',
      'Is not in correct format!')
    .required('Required'),
  password: Yup.string()
    .min(8, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),
  repeatPassword: Yup.string()
    .required('Required').oneOf([Yup.ref('password'), null], 'Passwords must match')
})

const SignUpInfoFrom = ({handleSubmit}) => {
  const signUpInfo = useSelector(({userInfo}) => userInfo.signUpInfo)

  return (
    <Formik
      enableReinitialize
      initialValues={signUpInfo || initialValues}
      validationSchema={ValidationSchema}
      onSubmit={handleSubmit}
    >
      {({values, errors, touched}) => (
        <Form className={s.signUpInfoForm} autoComplete='off'>
          <Field as={InputMask}
                 className={s.input}
                 mask='+375999999999'
                 id='mobilePhone'
                 name='mobilePhone'
                 autoComplete='new-number'
                 value={values.mobilePhone}
                 placeholder='Mobile phone'/>

          {errors.mobilePhone && touched.mobilePhone ? (
            <div className={s.error}>{errors.mobilePhone}</div>
          ) : null}

          <Field className={s.input}
                 type='email'
                 id='email'
                 name='email'
                 autoComplete='new-email'
                 value={values.email}
                 placeholder='Email'/>

          {errors.email && touched.email ? (
            <div className={s.error}>{errors.email}</div>
          ) : null}

          <Field className={s.input}
                 type='password'
                 id='password'
                 name='password'
                 autoComplete='new-password'
                 value={values.password}
                 placeholder='Password'/>

          {errors.password && touched.password ? (
            <div className={s.error}>{errors.password}</div>
          ) : null}

          <Field className={s.input}
                 type='password'
                 id='repeatPassword'
                 name='repeatPassword'
                 autoComplete='new-password'
                 value={values.repeatPassword}
                 placeholder='Repeat Password'/>

          {errors.repeatPassword && touched.repeatPassword ? (
            <div className={s.error}>{errors.repeatPassword}</div>
          ) : null}

          <button type='submit'>Next</button>
        </Form>
      )}
    </Formik>
  )
}

export default SignUpInfoFrom;
