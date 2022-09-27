import React from "react";

import s from "./ModalUserInfo.module.scss"
import {useSelector} from "react-redux";

const ModalUserInfo = ({modalActive, setModalActive, handleResetForm}) => {
  const signUpInfo = useSelector(({userInfo}) => userInfo.signUpInfo)

  const personalInfo = useSelector(({userInfo}) => userInfo.personalInfo)

  return (
    <div className={modalActive ? s.modalActive : s.modal} onClick={() => setModalActive(false)}>
      <div className={modalActive ? s.modalContentActive : s.modalContent}>
        <ul>
          <li>Mobile Phone: {signUpInfo?.mobilePhone}</li>

          <li>Email: {signUpInfo?.email}</li>

          <li>Password: {signUpInfo?.password}</li>

          <li>Repeat Password: {signUpInfo?.repeatPassword}</li>

          <li>First Name: {personalInfo?.firstName}</li>

          <li>Last Name: {personalInfo?.lastName}</li>

          <li>Sex: {personalInfo?.sex}</li>

          <li>Birthday: {personalInfo?.birthday}</li>

          <li>You Favorite Ocean: {personalInfo?.favoriteOcean}</li>

          <li>Hobby: {personalInfo?.hobby.join(", ")}</li>
        </ul>
        <div className={s.modalBtn}>
          <button className={s.modalChangeBtn} onClick={() => setModalActive(false)}>Change Form</button>

          <button className={s.modalResetBtn} onClick={handleResetForm}>Reset Form</button>
        </div>
      </div>
    </div>
  )
}

export default ModalUserInfo;
