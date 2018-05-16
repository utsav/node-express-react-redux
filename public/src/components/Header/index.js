import React from 'react'
import { Link, Redirect, withRouter } from 'react-router-dom'

import { Title } from '../Styled'
import '../../../assets/custome.css'

const Header = ({user, history}) => (
  <div>
    <div className="header">
      <Link to="/" className="logo">Sample</Link>
      {user.token &&<div className="header-right">
        <Link to="/profile">Profile</Link>
        <Link to="/logout">Logout</Link>
      </div>}
    </div>
    { !user.token
      && (history.location.pathname !== '/login' && history.location.pathname !== '/signup')
      && <Redirect to="/login" /> }
    { user.token
      && (history.location.pathname === '/login' || history.location.pathname === '/signup')
      && <Redirect to="/" />
    }
  </div>
)

export default withRouter(Header)
