import React from 'react'
import PropTypes from 'prop-types'

import { TextField, Submit } from '../Styled'

const SignupForm = ({ onSubmit }) => (
  <form onSubmit={onSubmit}>
    <TextField
      type="text"
      name="firstName"
      placeholder="First name"
      title="Enter your first name"
      required
    />
    <TextField
      type="text"
      name="lastName"
      placeholder="Last name"
      title="Enter your Last name"
      required
    />
    <TextField
      type="number"
      name="mobile"
      placeholder="mobile number"
      title="Enter your mobile number"
    />
    <TextField
      type="email"
      name="email"
      placeholder="Email address"
      title="Enter your email address"
      required
    />
    <TextField
      type="password"
      name="password"
      placeholder="Password"
      title="Type a strong password: aBC_123^"
      pattern="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$"
      required
    />
    <Submit type="submit" value="Continue" />
  </form>
)

SignupForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default SignupForm
