import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { signup } from '../../actions'

import { FormTitle, FooterLink } from '../Styled'
import Form from './SignupForm'

const Signup = ({ user, signup }) => {
  const handleSubmit = e => {
    e.preventDefault()
    const { 
      email: { value: email },
      password: { value: password },
      mobile: { value: mobile },
      firstName: { value: firstName },
      lastName: { value: lastName },
    } = e.target
    signup({ email, password, firstName, lastName, mobile })
  }

  return (
    <div>
      <FormTitle>Sign up</FormTitle>
      <Form onSubmit={handleSubmit} />
      <FooterLink to="/login">Already have an account ?</FooterLink>
    </div>
  )
}

Signup.propTypes = {
  user: PropTypes.shape({}).isRequired,
  signup: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({ user: state.user })
export default connect(mapStateToProps, { signup })(Signup)
