import React, { Component } from 'react'
import axios from 'axios';
import { withRouter } from 'react-router-dom';
export default class GuestTableComponent extends Component {
    constructor(props) {
        super(props);
        if (localStorage.getItem('token') === null) {
            this.props.history.push('/');
        }
    }
    state = {
        isLoading: true,
        data: []
    }
    renderGuest = () => {
        return this.state.data.map(guest => {
            return (
                <tr key={guest.id}>
                    <td>{guest.id}</td>
                    <td>{guest.name}</td>
                    <td>{guest.phone}</td>
                </tr>
            )
        });
    }
    componentDidMount() {
        const token = localStorage.getItem('token');
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        axios.get(`http://localhost:8000/api/guest/list`, config)
            .then(res => {
                this.setState({ isLoading: false, data: res.data.data });
            }).catch(e => {
                if (e.response.status === 401) {
                    this.props.history.push('/');
                }
            });
    }
    render() {
        const { isLoading, data } = this.state;
        return (
            <div className="container">
                {isLoading ? <div className="loader"></div> : ''}
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data !== null ? this.renderGuest() : ""}
                    </tbody>
                </table>
            </div>
        )
    }
}
