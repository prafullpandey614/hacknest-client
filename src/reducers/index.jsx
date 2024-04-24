// import { combineReducers } from 'redux';

// // Reducers
// const initialState = {
//   counter: 0,
// };

// const counterReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return { ...state, counter: state.counter + 1 };
//     case 'DECREMENT':
//       return { ...state, counter: state.counter - 1 };
//     default:
//       return state;
//   }
// };

// const participantinitialState = {
//     email: '',
//     username: '',
//     profile_id: ''
//   };
  
//   const participantDataReducer = (state = participantinitialState, type, payload) => {
//     console.log("Here I am")
//     console.log(payload)
//     // switch (action.type) {
//     //   case 'SET_USER_DATA':
//     //     return {
//     //       ...state,
//     //       email: action.payload.email,
//     //       username: action.payload.username
//     //     };
//     //   default:
//     //     return state;
//     // }
//   };
  
// // Combine Reducers
// const rootReducer = combineReducers({
//   counter: counterReducer,
//   participant: participantDataReducer,
//   // Add other reducers here if you have more
// });

// export default rootReducer;
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userType: null,
  username: null,
  accessToken: null,
  email: null,
};

const authSlice = createSlice({
  name: "Auth",
  initialState: initialState,
  reducers: {
    login: (state, { payload }) => {
      console.log(payload);
      state.userType = payload.userType;
      state.username = payload.username;
      state.accessToken = payload.accessToken;
      state.email = payload.email;
      // localStorage.setItem("auth", JSON.stringify(state));
    },
    logout: (state) => {
      state.userType = null;
      state.userId = null;
      state.token = null;

      state.email = null;
      // localStorage.removeItem("auth");
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;