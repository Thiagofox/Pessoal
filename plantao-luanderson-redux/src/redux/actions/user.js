// const login = {
//   type: 'LOGIN'
//   payload: {
//     login: 'Luanderson', 
//     password: '1234'
//   }
// }

export function login(credentials) {
  return({
    type: 'LOGIN',
    payload: credentials,
  })
}

export function logout(credentials) {
  return({
    type: 'LOGIN',
    payload: '',
  })
}