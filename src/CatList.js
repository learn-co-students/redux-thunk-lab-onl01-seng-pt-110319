import React from 'react';

const CatList = (props) => {
    const catImages = props.catPics.map(cat => <img key={cat.id} src={cat.url} alt={cat.id} />)
    
    return (
        <div>
            {catImages}
        </div>
    )
}

export default CatList;