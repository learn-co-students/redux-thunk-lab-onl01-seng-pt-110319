// write your CatList component here
import React from 'react'

class CatList extends React.Component {
    render() {

        const catPicsDisplay = this.props.catPics.map((pic) => {
            return <img src={pic} alt='' ></img>
        })
        return (
            <div>
               {catPicsDisplay}
            </div>
        )
    }
}

export default CatList