import * as ActionType from './index';
import { HEADERS } from '../constants/ApiServices';

// let nextTodoId = 0


export const addTodo = todo => async dispatch => {
    console.log(new Date(todo.due_date))
    const result = await dispatch({
        type: ActionType.ADD_TODO,
        payload: {
            client: 'django_api',
            request: {
                method: 'POST',
                headers: HEADERS,
                data: {
                    "state": todo.state,
                    "content": todo.content,
                    "due_date": new Date(todo.due_date.replace(/-/g, '\/'))
                }
            }
        }
    })
    dispatch(getTodo());
    return result;

};

export const getTodo = () => {
    return {
        type: ActionType.GET_TODO,
        payload: {
            client: 'django_api',
            request: {
                headers: HEADERS
            }
        }
    };
}





// export const addTodo = text => ({
//   type: 'ADD_TODO',
//   id: nextTodoId++,
//   text
// })

// export const setVisibilityFilter = filter => ({
//     type: 'SET_VISIBILITY_FILTER',
//     filter
// })

// export const toggleTodo = id => ({
//     type: 'TOGGLE_TODO',
//     id
// })

// export const VisibilityFilters = {
//     SHOW_ALL: 'SHOW_ALL',
//     SHOW_COMPLETED: 'SHOW_COMPLETED',
//     SHOW_ACTIVE: 'SHOW_ACTIVE'
// }
