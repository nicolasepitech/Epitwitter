import axios from "axios";
import {
 GET_USER,
 GET_USERS,
 TOGGLE_USER_LOADING,
 TOGGLE_USERS_LOADING,
} from "./types";

import { setErrors, clearErrors } from "./errorActions";


 export const getUsers = () => dispatch => {
    dispatch(toggleUsersLoading());
    axios
       .get(`/api/users/`)
       .then(res => {
          dispatch({
             type: GET_USERS,
             payload: res.data
          });
          dispatch(clearErrors());
 
       })
       .catch(err => {
          dispatch(setErrors(err.response.data));
    
       });
 };

 export const toggleUserLoading = () => {
    return {
       type: TOGGLE_USER_LOADING
    };
 };
 
 export const toggleUsersLoading = () => {
    return {
       type: TOGGLE_USERS_LOADING
    };
 };
 