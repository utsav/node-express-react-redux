import React from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../../actions';

const Logout = ({user, logout}) => {
    localStorage.removeItem('state');
    logout();
    return (
        <div>
            <Redirect to="/login" />
        </div>
    )
}

Logout.propTypes = {

}

const mapStateToProps = state => ({ user: state.user })
export default connect(mapStateToProps, { logout })(Logout)