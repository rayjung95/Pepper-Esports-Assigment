import * as ActionType from '../actions';
import { FAILURE, REQUEST, SUCCESS } from '../constants/Action-Type';

const initialStates = {
  todoItems: [],
  loading: false,
  error: null,
};

export const todoReducer = (state = initialStates, action) => {
  switch (action.type) {
    case REQUEST(ActionType.ADD_TODO):
    case REQUEST(ActionType.GET_TODO):
    case REQUEST(ActionType.DELETE_TODO):
    case REQUEST(ActionType.DELETE_BULK_TODOS):
      return {
        ...state,
        loading: true
      }

    case SUCCESS(ActionType.ADD_TODO):
    case SUCCESS(ActionType.DELETE_TODO):
    case SUCCESS(ActionType.DELETE_BULK_TODOS):
      return {
        ...state,
        loading: false
      };
    case SUCCESS(ActionType.GET_TODO):
    console.log(action.payload.data)
      return {
        ...state,
        todoItems: action.payload.data,
        loading: false
      };

    case FAILURE(ActionType.ADD_TODO):
      return {
        ...state,
        loading: false,
        error: 'Error while adding todo'
      }
    case FAILURE(ActionType.GET_TODO):
      return {
        ...state,
        loading: false,
        error: 'Error while Fetching todo items from server'
      }
    case FAILURE(ActionType.DELETE_TODO):
    case FAILURE(ActionType.DELETE_BULK_TODOS):
      return {
        ...state,
        loading: false,
        error: 'Error while deleting todo item/s from server'
      }
    default:
      return state
  }
};