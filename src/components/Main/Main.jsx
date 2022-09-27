import React, {useState} from "react";
import {useDispatch} from "react-redux";

import SignUpInfoFrom from "../SignUpInfoForm/SignUpInfoFrom";
import PersonalInfoForm from "../PersonalInfoForm/PersonalInfoForm";
import {getPersonalInfo, getSignUpInfo, resetForm} from "../../store/action/userInfoAction";
import ModalUserInfo from "../ModalUserInfo/ModalUserInfo";
import steps from "../../constants/steps";

import s from "./Main.module.scss";

const Main = () => {

  const [currentStep, setCurrentStep] = useState(steps.SING_UP_INFO)

  const [modalActive, setModalActive] = useState(false)

  const dispatch = useDispatch();

  const signUpHandleSubmit = (value) => {
    dispatch(getSignUpInfo(value))
    setCurrentStep(steps.PERSONAL_INFO)
  }

  const personalInfoHandleSubmit = (value) => {
    dispatch(getPersonalInfo(value))
    setModalActive(true)
  }

  const handleResetForm = () => {
    dispatch(resetForm())
    setCurrentStep(steps.SING_UP_INFO)
  }

  return (
    <div className={s.container}>
      <ModalUserInfo modalActive={modalActive} setModalActive={setModalActive} handleResetForm={handleResetForm}/>

      <section className={s.signUpSteps}>
        <button className={currentStep === steps.SING_UP_INFO ? s.selectStep : null}>
          SignUp Info
        </button>

        <button className={currentStep === steps.PERSONAL_INFO ? s.selectStep : null}>
          Personal Info
        </button>
      </section>

      {currentStep === steps.SING_UP_INFO && <SignUpInfoFrom handleSubmit={signUpHandleSubmit}/>}

      {currentStep === steps.PERSONAL_INFO && <PersonalInfoForm handleSubmit={personalInfoHandleSubmit}
        setCurrentStep={setCurrentStep}/>}

    </div>
  )
}

export default Main;
