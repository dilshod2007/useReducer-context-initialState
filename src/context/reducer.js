export const initialState = {
    email: '',
    password: '',
    age: '',
    users: JSON.parse(localStorage.getItem('users')) || []
  };
  
  export const reducer = (state, action) => {
    switch (action.type) {
      case 'email':
       return {
        ...state,
        email: action.email
       };

      case 'password':
        return {
          ...state,
          password: action.password
        };

      case 'age':
        return {
          ...state,
          age: action.age
        };
      case 'add_user':
        return {
          ...state,
          users: [...state.users, action.user]
        };

      case 'LOGOUT':
        return {
          ...state,
          email: '',
          password: '',
          age: '',
          users: []
        };

      case 'reset_fields':
        return {
          ...state,
          email: '',
          password: '',
          age: ''
        };

      case 'delete_user':
        return {
          ...state,
          users: state.users.filter((user, index) => index !== action.index)
        };

      default:
        return state;
         
    }
  };


  