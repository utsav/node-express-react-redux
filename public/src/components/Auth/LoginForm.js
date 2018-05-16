import React from 'react'
import PropTypes from 'prop-types'

import { TextField, Submit } from '../Styled'

const LoginForm = ({ onSubmit }) => (
  <form onSubmit={onSubmit}>
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
      required
    />
    <Submit type="submit" value="Continue" />
  </form>
)

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default LoginForm
