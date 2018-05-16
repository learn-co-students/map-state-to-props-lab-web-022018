import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Users extends Component {

  render() {
    console.log(this.props.users)
    const users = this.props.users.map((user, index) => {
      console.log("user", user)
      return <li key={index}>{user.userName + user.hometown}</li>
    })
    return (
      <div>
        <ul>
          {users}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    primaryUser: state.users[0]
  }
}

export const ConnectedUsers = connect(mapStateToProps)(Users)
