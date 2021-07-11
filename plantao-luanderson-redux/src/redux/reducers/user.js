const INITIAL_STATE = {
  login: '',
  password:'',
  loged: false,
}

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'LOGIN':
      return {
        login: action.payload.login,
        password: action.payload.password,
        loged: true,
      }
    default:
      return state;
  }
}

export default user;