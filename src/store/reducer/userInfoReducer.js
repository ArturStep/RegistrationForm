import {PERSONAL_INFO, RESET_FORM, SING_UP_INFO} from "../../constants/actionTypes";

const initialState = {
  signUpInfo: null,
  personalInfo: null
}

const userInfo = (state = initialState, action) => {
  switch (action.type) {
    case SING_UP_INFO: {
      return {
        ...state,
        signUpInfo: action.signUpInfo
      };
    }
    case PERSONAL_INFO: {
      return {
        ...state,
        personalInfo: action.personalInfo
      };
    }
    case RESET_FORM: {
      return initialState
    }
    default:
      return state;
  }
};

export default userInfo;
