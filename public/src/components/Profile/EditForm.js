import React from 'react'
import PropTypes from 'prop-types'

import { TextField, Submit } from '../Styled'

const EditForm = ({ onSubmit, onChange, user }) => (
  <form onSubmit={onSubmit}>
    <TextField
      type="text"
      name="firstName"
      placeholder="First name"
      title="Enter your first name"
      value={user.firstName}
      onChange={onChange}
      required
    />
    <TextField
      type="text"
      name="lastName"
      placeholder="Last name"
      title="Enter your Last name"
      value={user.lastName}
      onChange={onChange}
      required
    />
    <TextField
      type="number"
      name="mobile"
      placeholder="mobile number"
      value={user.mobile}
      onChange={onChange}
      title="Enter your mobile number"
    />
    <TextField
      type="email"
      name="email"
      placeholder="Email address"
      title="Enter your email address"
      value={user.email}
      onChange={onChange}
      required
    />
    <Submit type="submit" value="Update" />
  </form>
)

EditForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default EditForm
