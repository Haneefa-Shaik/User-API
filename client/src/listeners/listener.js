import { CLICK_BY_ID_EVENT,  GET_ALL_USERS_EVENT } from "../../data/constants.js";
import { handleClick,myFunction } from "../handlers/handler.js";

export const clickByIdListener = (element) => {
    element.addEventListener(CLICK_BY_ID_EVENT, handleClick);
  };

  export const getAllUsersListener = (element) => {
    element.addEventListener(GET_ALL_USERS_EVENT, myFunction);
  };

