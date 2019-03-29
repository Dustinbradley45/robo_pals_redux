import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_FAILED,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_PENDING,

} from "./constants.js";

export const setSearchField = (text) => {
    return {
        type: CHANGE_SEARCH_FIELD,
        payload: text
    }
}

export const requestRobots = () => (dispatch) => {
//     const response = await axios.get('https://jsonplaceholder.typicode.com/users')

//     dispatch({
//         type: 'REQUEST_ROBOTS_SUCCESS',
//         payload: response.data
//     })
// }
    dispatch({
        type: REQUEST_ROBOTS_PENDING,
    })
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => dispatch({
            type: REQUEST_ROBOTS_SUCCESS,
            payload:data
        }))
        .catch(error => dispatch({
            type: REQUEST_ROBOTS_FAILED,
            payload:error
        }))

}
// export const requestRobots = () => async (dispatch) => {
//     ​
//     const response = await axios.get('https://jsonplaceholder.typicode.com/users')

//     dispatch({
//         type: 'REQUEST_ROBOTS_SUCCESS',
//         payload: response.data
//     })
// }