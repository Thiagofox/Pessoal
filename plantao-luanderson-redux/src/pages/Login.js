import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as userAction from '../redux/actions/user'

class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      login: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitLogin = this.submitLogin.bind(this);
  }

  handleChange({target}) {
    this.setState({
      [target.name]: target.value
    })
  }

  submitLogin (event) {
    event.preventDefault();
    const { fazerLogin } = this.props;
    fazerLogin(this.state)
    
  }
  
  render() {
    const { login, password } = this.state;
    return (
      <form>
        <label>
          login:
          <input type="text" name="login" value={login} onChange={this.handleChange} />
        </label>
        <label>
          Password:
          <input type="text" name="password" value={password} onChange={this.handleChange}/>
        </label>
        <button type="button" onClick={this.submitLogin}>Fazer login</button>
      </form>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return ({
    fazerLogin: (credentials) => dispatch(userAction.login(credentials))
  })
}

export default connect (null, mapDispatchToProps)(Login);

// por debaixo dos panos como funciona o connect e o mapDispatchToProps
// ele renderiza o componente login passando como props as informações 
/* 
<connect>
  <login fazerLogin={() => {}}/>
</connect> 
*/