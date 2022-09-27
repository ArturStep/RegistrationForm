import {PERSONAL_INFO, RESET_FORM, SING_UP_INFO} from "../../constants/actionTypes";

export const setSignUpInfo = (signUpInfo) => ({ type: SING_UP_INFO, signUpInfo })
export const setPersonalInfo = (personalInfo) => ({ type: PERSONAL_INFO, personalInfo })
export const resetForm = () => ({type: RESET_FORM})

export const getSignUpInfo = (value) => (dispatch) => {
  dispatch(setSignUpInfo(value));
};

export const getPersonalInfo = (value) => (dispatch) => {
  dispatch(setPersonalInfo(value));
};
