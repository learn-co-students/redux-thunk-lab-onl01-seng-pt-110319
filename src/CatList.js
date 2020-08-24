// write your CatList component here
import React, {Component} from 'react';

export default class CatList extends Component {
    cats = () => {
        return this.props.catPics.map(cat => 
            <div className="catContainer">
                <img className='img' key={cat.id} src={cat.url} alt='img not loaded'/> 
            </div>
        )
    }
    
    
    render() {
        return (
            <div>{this.cats()}</div>
        )
    }
}