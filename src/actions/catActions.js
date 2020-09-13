// write and export your action creator function here
export function fetchCats() {
    return((dispatch) => {
        dispatch({ type: 'LOADING_CATS'});
        fetch('https://learn-co-curriculum.github.io/cat-api/cats.json')
        .then(data => data.json())
        .then(json => dispatch({ type: 'ADD_CATS', cats: json.images }))
    })
}