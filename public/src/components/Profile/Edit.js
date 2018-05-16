import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect, Link } from 'react-router-dom'
import { getUser, editUser } from '../../actions'
import { FormTitle } from '../Styled';
import Form from './EditForm'

class EditProfile extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            firstName: props.user.firstName,
            lastName: props.user.lastName,
            mobile: props.user.mobile,
            email: props.user.email,
        }
    }

    componentDidMount() {
        this.props.getUser(this.props.user.token);
    }

    onChange(e) { 
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.editUser({...this.state, ...{token: this.props.user.token}});
    }

    render() {

        const { user } = this.props;
        return (
            <div>
                <FormTitle>Edit Profile</FormTitle>
                <Form onSubmit={this.handleSubmit.bind(this)} onChange={this.onChange.bind(this)} user={this.state} />
            </div>
        )
    }
}

EditProfile.propTypes = {

}

const mapStateToProps = state => ({ user: state.user })
export default connect(mapStateToProps, { getUser, editUser })(EditProfile)
