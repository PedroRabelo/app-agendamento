type ActionMap<M extends {[index: string]: any}> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export enum Types {
  setAvatar = 'SET_AVATAR',
}

type UserType = {
  avatar: string;
  favorites: string[];
  appointments: string[];
};

type UserPayload = {
  [Types.setAvatar]: {
    avatar: string;
  };
};

export type UserActions = ActionMap<UserPayload>[keyof ActionMap<UserPayload>];

export const userReducer = (state: UserType, action: UserActions) => {
  switch (action.type) {
    case Types.setAvatar:
      return {...state, avatar: action.payload.avatar};
    default:
      return state;
  }
};
