import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect, Link } from 'react-router-dom'
import { getUser, deleteUser } from '../../actions'

class ViewProfile extends React.PureComponent {
    constructor(props){
        super(props);
    }

    componentWillMount(){
        this.props.getUser(this.props.user.token);
    }

    render(){

        const { user, deleteUser } = this.props;

        return (
            <div className="w">
                <div className="content">
                    <h1>User Profile </h1>
                    <Link to="/profile/edit">Edit</Link>
                    <a href="javascript:;" onClick={ () => deleteUser(user.token) } style={{'paddingLeft': '10px'}} >Delete</a>
                    <section>
                        <p className="setting"><span>First Name</span> {user.firstName}</p>
                        <p className="setting"><span>Last Name</span> {user.lastName}</p>
                        <p className="setting"><span>E-mail Address</span> {user.email}</p>
                        <p className="setting"><span>Mobile No.</span> {user.mobile}</p>
                    </section>
                </div>
            </div>
        )
    }
}

ViewProfile.propTypes = {

}

const mapStateToProps = state => ({ user: state.user })
export default connect(mapStateToProps, {getUser, deleteUser})(ViewProfile)
