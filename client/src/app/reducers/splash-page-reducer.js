
export default function manageUsers(state={email: "", password: ""}, action){
  switch(action.type){
    case LOGIN_USER:
      console.log(action)
      return [action.payload.data, ...state]
    default:
      return state;
  }
}
