import React from "react"
import {Field, Form, Formik} from "formik";
import {useSelector} from "react-redux";
import * as Yup from "yup";
import InputMask from "react-input-mask";

import steps from '../../constants/steps'
import {oceans} from "../../constants/oceans";
import {hobbies} from "../../constants/hobbies";
import {sex} from "../../constants/sex";
import {getAge} from "../../functions/getAge";

import s from "./PersonalInfoForm.module.scss";

const initialValues = {
  firstName: '',
  lastName: '',
  sex: '',
  birthday: '',
  favoriteOcean: '',
  hobby: '',
}

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(30, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(30, 'Too Long!')
    .required('Required'),
  sex: Yup.string()
    .required('Required'),
  birthday: Yup.string()
    .nullable()
    .test("birthday", "Should be greater than 18", (value) => {
      return getAge(value) >= 18;
    })
    .test("birthday", "Must be younger than 90", (value) => {
      return getAge(value) <= 90;
    })
    .required('Required'),
  favoriteOcean: Yup.string()
    .oneOf(['Atlantic', 'Pacific', 'Indian', 'Arctic'])
    .required('Required'),
  hobby: Yup.array()
    .required('Required'),
})

const PersonalInfoForm = ({setCurrentStep, handleSubmit}) => {
  const personalInfo = useSelector(({userInfo}) => userInfo.personalInfo)

  return (
    <Formik
      initialValues={personalInfo || initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({values, errors, touched}) => (
        <Form>
          <section className={s.personalInfoForm}>
            <div className={s.personalInfoName}>
              <Field className={s.input}
                     type='text'
                     id='firstName'
                     name='firstName'
                     value={values.firstName}
                     placeholder='First Name'/>

              {errors.firstName && touched.firstName ? (
                <div className={s.error}>{errors.firstName}</div>
              ) : null}
            </div>

            <div className={s.personalInfoName}>
              <Field className={s.input}
                     type='text'
                     id='lastName'
                     name='lastName'
                     value={values.lastName}
                     placeholder='Last Name'/>

              {errors.lastName && touched.lastName ? (
                <div className={s.error}>{errors.lastName}</div>
              ) : null}
            </div>

            <section>
              <div className={s.sex}>
                <label>Sex</label>

                <div className={s.sexRadio}>
                  {sex.map(sex => (
                    <div key={sex.label}>
                      <Field type='radio' id='sex' name='sex' value={sex.value}/> {sex.label}
                    </div>
                  ))}
                </div>

                {errors.sex && touched.sex ? (
                  <div className={s.error}>{errors.sex}</div>
                ) : null}
              </div>

              <div className={s.birthday}>
                <label>Birthday</label>
                <Field as={InputMask}
                       mask='99 99 9999'
                       placeholder='DD MM YYYY'
                       id='birthday'
                       value={values.birthday}
                       name='birthday'/>

                {errors.birthday && touched.birthday ? (
                  <div className={s.error}>{errors.birthday}</div>
                ) : null}
              </div>

              <div className={s.favoriteOceans}>
                <label>Your Favorite Ocean</label>
                <Field as={'select'}
                       id='favoriteOcean'
                       name='favoriteOcean'>
                  {oceans.map(ocean => (<option key={ocean.value} value={ocean.value}>{ocean.label}</option>))}
                </Field>

                {errors.favoriteOcean && touched.favoriteOcean ? (
                  <div className={s.error}>{errors.favoriteOcean}</div>
                ) : null}
              </div>

              <div className={s.hobby}>
                <label>Hobby</label>
                <div className={s.hobbyCheckbox}>
                  {hobbies.map(hobby => (
                    <div key={hobby.label}>
                      <Field type='checkbox' id='hobby' name='hobby' value={hobby.value}/> {hobby.label}
                    </div>
                  ))}
                </div>

                {errors.hobby && touched.hobby ? (
                  <div className={s.error}>{errors.hobby}</div>
                ) : null}
              </div>
            </section>
          </section>

          <section className={s.personalInfoBtn}>
            <button className={s.changeBtn}
                    onClick={() => setCurrentStep(steps.SING_UP_INFO)}
                    type='submit'>
              Change SignUp Info
            </button>

            <button className={s.completeBtn}
                    type='submit'>
              Complete
            </button>
          </section>
        </Form>
      )}
    </Formik>
  )
}

export default PersonalInfoForm;
