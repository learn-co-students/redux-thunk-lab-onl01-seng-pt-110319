// write your CatList component here
import React, { Component } from 'react'

export default class CatList extends Component {
    renderCats = () => this.props.catPics.map(cat => <img key={cat.id} alt={cat.id} src={cat.url}></img>)

    render() {
        return(
            <div>
                {this.renderCats()}
            </div>
        )
    }
};