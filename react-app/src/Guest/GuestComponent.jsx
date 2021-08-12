import React, { Component, createRef } from 'react';
import './style.css';
import { BrowserRouter as Router, Redirect, useHistory, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import GuestTableComponent from './GuestTableComponent';
class GuestComponent extends Component {
    state = {
        form: {
            email: '',
            password: ''
        },
        isLoading: false,
        isRedirect: false
    }
    handleChange = (e) => {
        const { value, name } = e.target;
        this.setState({ form: { ...this.state.form, [name]: value } });
    }
    handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = this.state.form;
        const { match, location, history } = this.props;
        this.setState({ isLoading: true });
        try {
            const res = await axios.post(`http://localhost:8000/api/login`, { email, password }, { headers: { "Access-Control-Allow-Origin": "*" } });
            if (res.data.status_code === 500) {
                this.setState({ isLoading: false });
            } else {
                this.setState({ isLoading: false });
                localStorage.setItem('token', res.data.token);
                history.push('/guest');
            }
        } catch (e) {
            console.log(e.data);
        }
    }
    render() {
        const { isLoading, isRedirect } = this.state;
        return (
            <div className="container">
                <Router>
                    {isRedirect ? <Redirect from="/" to="/guest" /> : ''}
                </Router>
                {isLoading ? <div className="loader"></div> : ''}
                <h2>Login</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input
                            name="email"
                            type="text"
                            className="form-control"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input
                            name="password"
                            type="password"
                            className="form-control"
                            onChange={this.handleChange}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        isLoading: state.guestReducer.isLoading,
        isLogin: state.guestReducer.isLogin
    }
}

// const getList = () => {
//     // const email = this.form.email.current.value;
//     // const password = this.form.password.current.value;
//     return axios.get('http://localhost:8000/api/guest/list', { headers: { "Access-Control-Allow-Origin": "*" } });
// }

const handleLogin = (email, password) => {
}

// const mapDispatchToProps = dispatch => {
//     return {
//         getListGuest: async () => {
//             dispatch({
//                 type: "FETCH_GUEST"
//             });
//             const res = await getList();
//             dispatch({
//                 type: "FETCH_GUEST_SUCCESS",
//                 payload: res.data.data
//             });
//         }
//     }
// }

const mapDispatchToProps = dispatch => {
    return {
        handleLogin: async (email, password) => {
            dispatch({
                type: "LOGIN"
            });
            // dispatch({
            //     type: "HANDLE_LOGIN",
            //     payload: await handleLogin(email, password)
            // });
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GuestComponent);