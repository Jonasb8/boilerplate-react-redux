export function success(success) {
    return { type: '_SHOW_SUCCESS', success }
}
export function successMessage(successMessage) {
    return { type: '_SHOW_SUCCESS_MESSAGE', successMessage }
}


export function loading(loading) {
    return { type: '_SHOW_LOADING', loading }
}
export function loadingMessage(loadingMessage) {
    return { type: '_SHOW_LOADING_MESSAGE', loadingMessage }
}


export function error(error) {
    return { type: '_SHOW_ERROR', error }
}
export function errorMessage(errorMessage) {
    return { type: '_SHOW_ERROR_MESSAGE', errorMessage }
}


export function retrieved(retrieved) {
    return { type: '_SHOW_RETRIEVED', retrieved }
}

export function retrieve(){
    return function (dispatch) {
        return fetch('https://jsonplaceholder.typicode.com/posts')
        .then(resp => resp.json())
        .then(data => {
            dispatch(success(true))
            dispatch(successMessage('data fetched successfuly'))
            dispatch(retrieved(data))
        })
        .catch(err => {
            dispatch(error(true))
            dispatch(errorMessage('data could not be fetched'))
        })
    }
}
