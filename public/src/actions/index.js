import { actionTypes as types, urls } from '../constants'
import { post, get, put, delet } from '../helpers'
import React from 'react'
import { Redirect } from 'react-router-dom'

export const signup = ({ email, password, firstName, lastName, mobile }) => dispatch => {
  dispatch({ type: types.SIGNUP_REQUEST })
  post({
    url: urls.SIGNUP,
    body: { email, password, firstName, lastName, mobile },
    success: types.SET_USER,
    failure: types.UNSET_USER,
    dispatch,
  })
}

export const login = ({ email, password }) => dispatch => {
  dispatch({ type: types.LOGIN_REQUEST })
  post({
    url: urls.LOGIN,
    body: { email, password },
    success: types.SET_USER,
    failure: types.UNSET_USER,
    dispatch,
  })
}

export const logout = () => dispatch => {
  dispatch({ type: types.UNSET_USER })
}

export const getUser = (token) => dispatch => {
  get({
    url: urls.GET_USER,
    success: types.SET_USER,
    headers: {
      'authorization': token
    },
    failure: "",
    dispatch,
  })
}

export const editUser = ({email, firstName, lastName, mobile, token}) => dispatch => {
  put({
    url: urls.UPDATE_USER,
    success: types.SET_USER,
    body: { email, firstName, lastName, mobile },
    headers: {
      'authorization': token
    },
    failure: "",
    dispatch,
  })
}

export const deleteUser = (token) => dispatch => {
  delet({
    url: urls.DELETE_USER,
    success: types.UNSET_USER,
    body: {},
    headers: {
      'authorization': token
    },
    failure: "",
    dispatch,
  })
}
