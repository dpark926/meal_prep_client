import React, {Component} from 'react'
import axios from 'axios'

class Signup extends Component {
  constructor() {
    super()

    this.state = {
      name: '',
      email: '',
      password: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  // handleSignUp(){
  //   // console.log(this.state.username);
  //
  // }

  handleChange(prop, value){
    this.setState({
      [prop]: value
    })
  }

  handleSubmit(e){
    e.preventDefault()
    axios.post('http://localhost:3000/api/v1/users', {
      user: {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
      }
    }).then(res => {
      console.log(res);
      localStorage.setItem("wtf", res.data.user)
      localStorage.setItem("token", res.data.token)
      // localStorage.setItem("username", res.data.username)
    })
      .then( () => this.props.history.push('/'))
      .catch((error) => console.log(error.response) )
  }

  render() {
    return (
      <div className="signup">
        <h1>Sign Up</h1>
        <form onSubmit={this.handleSubmit}>
          <input type='text' value={this.state.name} onChange={ e => this.handleChange('name', e.target.value)} placeholder="Name"></input><br/>
          <p>Name: {this.state.name}</p>
          <input type='text' value={this.state.email} onChange={ e => this.handleChange('email', e.target.value)} placeholder="Email"></input><br/>
          <p>Email: {this.state.email}</p>
          <input type='text' value={this.state.password} onChange={ e => this.handleChange('password', e.target.value)} placeholder="Password"></input><br/>
          <p>Password: {this.state.password}</p>
          <input type='submit'></input>
        </form>
      </div>
    )
  }
}

export default Signup
