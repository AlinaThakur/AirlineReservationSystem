
 const initialState ={
  counter:0,
  loggedIn: false,
 }
const changeUserNumber = (state=initialState, action ) => {
  switch(action.type){
    case "INCREMENT": return {counter: state.counter +1,loggedIn:state.loggedIn };
    case "DECREMENT": return {counter: state.counter - 1,loggedIn:state.loggedIn };
    case "LOGGEDIN" : return {counter:state.counter,loggedIn: state.loggedIn=true}
   
   default: return state;
  }
}

export default changeUserNumber;

