

export const fetchCats = () => {

    return (dispatch) => {
        // first thing we want to do is send a dispatch to indicate we are fetching cats
        dispatch({ type: 'LOADING_CATS'})
        fetch('https://learn-co-curriculum.github.io/cat-api/cats.json').then(response => {
        return response.json()
    }).then(responseJSON => {
        dispatch({ type: 'ADD_CATS', cats: responseJSON.images})
    })
    }
}
