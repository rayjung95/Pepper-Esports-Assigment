import * as ActionType from './index';
import { HEADERS } from '../constants/ApiServices';

// Add a todo item
export const addTodo = todo => async dispatch => {
    // console.log(new Date(todo.due_date))
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
                    "due_date": todo.due_date
                }
            }
        }
    })
    dispatch(getTodo());
    return result;

};


// Get Todo items
export const getTodo = (sort) => {
    const requestUrl = `${sort ? `?${sort}` : ''}`;
    console.log(requestUrl)
    return {
        type: ActionType.GET_TODO,
        payload: {
            client: 'django_api',
            request: {
                url: requestUrl,
                headers: HEADERS
            }
        }
    };
}

// Delete Todo item
export const  deleteTodo = id => async dispatch => {
    const result = await dispatch ({
        type: ActionType.DELETE_TODO,
        payload: {
            client: 'django_api',
            request: {
                method:'DELETE',
                url:`${id}/`,
                headers: HEADERS
            }
        }
    });
    dispatch(getTodo());
    return result
}

// Delete Bulk Todo items
export const  deleteBulkTodos = array => async dispatch => {
    const result = await dispatch ({
        type: ActionType.DELETE_TODO,
        payload: {
            client: 'django_api',
            request: {
                method:'DELETE',
                headers: HEADERS,
                data:{
                    "todoItems": array
                }
            }
        }
    });
    dispatch(getTodo());
    return result
}