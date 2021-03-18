import React, {createContext, Dispatch, useReducer} from 'react';
import {userReducer, UserActions} from '../reducers/UserReducer';

type InitialStateType = {
  avatar: string;
  favorites: string[];
  appointments: string[];
};

const initialState = {
  avatar: '',
  favorites: [],
  appointments: [],
};

const UserContext = createContext<{
  state: InitialStateType;
  dispatch: Dispatch<UserActions>;
}>({
  state: initialState,
  dispatch: () => null,
});

const UserProvider: React.FC = ({children}) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  return (
    <UserContext.Provider value={{state, dispatch}}>
      {children}
    </UserContext.Provider>
  );
};

export {UserProvider, UserContext};
