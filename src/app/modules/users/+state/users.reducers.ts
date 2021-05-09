import { UsersState } from 'src/app/resources/interfaces/state/users-state.interface';
import { UsersAction, UsersActionTypes } from './users.actions';

const usersInitialState: UsersState = {
  collection: [],
};

export function UsersReducer(
  state = usersInitialState,
  action: UsersAction
): UsersState {
  switch (action.type) {
    case UsersActionTypes.addUsers: {
      return {
        ...state,
      };
    }

    case UsersActionTypes.addUsersSuccess: {
      return {
        ...state,
        collection: state.collection.concat(action.payload.results),
      };
    }

    case UsersActionTypes.addUsersFail: {
      return {
        ...state,
      };
    }

    default:
      return {
        ...state,
      };
  }
}
