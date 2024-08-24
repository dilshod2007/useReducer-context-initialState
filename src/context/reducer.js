export const initialState = {
    email: '',
    password: '',
    age: ''
  };
  
  export const reducer = (state, action) => {
    switch (action.type) {
      case "email":
        return { ...state, email: action.email };
      case "password":
        return { ...state, password: action.password };
      case "age":
        return { ...state, age: action.age };
      case "LOGOUT":
        return initialState; 
      default:
        return state;
    }
  };
  