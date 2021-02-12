export const USERS_SET = "users/USERS_SET";

const initialState = { users: [] };

const usersReducers = (state = initialState, { payload, type }) => {
  switch (type) {
    case USERS_SET:
      return { ...state, users: payload.users };
    default:
      return state;
  }
};

export default usersReducers;
