import React, {Component} from 'React';
import {withRouter} from 'react-router';
import firebase from '../../firebase.config.js';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const stateObj = {};
    const stateKey = e.target.name;
    stateObj[stateKey] = e.target.value;
    this.setState(stateObj);
  }

  handleSubmit() {
    const { username, password } = this.state;
    firebase.auth()
      .signInWithEmailAndPassword(username, password)
      .catch((err) => {
        const errorCode = err.code;
        const errorMessage = err.message;
        console.log(err);
      })
      .then((user) => {
        firebase.database().ref('users')
          .child(user.uid)
          .set({first_name: '', last_name: '', email: username})
      })
      .then(() => {
        // const userId = firebase.auth().currentUser.uid;
        // this.props.router.push(`/${userId}`);
        this.props.router.push('app');
        });
  }

      // .then(() => {
      //   this.props.router.push('app');

  render() {
    return(
      <div>
        <div id="login-form">
          <div>
            <input name="username" onChange={this.handleChange} type="text" placeholder="email-address"/>
          </div>
          <div>
            <input name="password" onChange={this.handleChange} type="password" placeholder="password"/>
          </div>
          <button className = "btn" onClick={this.handleSubmit}>Login</button>
        </div>
      </div>
    )
  }
}

export default withRouter(Login);
