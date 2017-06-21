import React, {Component} from 'react'

class Login extends Component {
  constructor() {
    super()

    this.state = {
      name: '',
      password: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleUserName = this.handleUserName.bind(this)
    this.handlePassword = this.handlePassword.bind(this)
  }

// Login
  handleSubmit(e) {
    e.preventDefault()
    console.log("Name and Password Submitted!!!")

    fetch("http://localhost:3000/api/v1/signin", {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(this.state)
    }).then( res => res.json() )
    .then( (res) => {
      // debugger
      localStorage.setItem("user_name", res.user.name)
      localStorage.setItem("user_id", res.user.id)
      localStorage.setItem("token", res.token)
      this.props.history.push('/')
      console.log('response: ', res)
    } )
    .catch( (error) => console.log(error.response))
  }

  handleUserName(event) {
    this.setState({
      name: event.target.value
    })
  }

  handlePassword(event) {
    this.setState({
      password: event.target.value
    })
  }

  render() {
    return (
      <div className="login">
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <input type='text' value={this.state.name} onChange={this.handleUserName} placeholder="Email"></input><br/>
          <p>Username: {this.state.name}</p>
          <input type='password' value={this.state.password} onChange={this.handlePassword} placeholder="Password"></input><br/>
          <p>Password: {this.state.password}</p>
          <input type='submit' value="LOGIN"></input>
        </form>
      </div>
    )
  }
}

export default Login
