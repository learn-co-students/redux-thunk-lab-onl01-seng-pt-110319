// import React from 'react';

// const CatList = ({ cats }) => {
    
//     const catImages = cats.map(cat => <img key={cat.id} src={cat.url} atl={cat.id} />)
//     return (
//         <div>
//             {catImages}
//         </div>
//     )
// }

// export default CatList;

import React from 'react';

class CatList extends React.Component {
  listCats = () => {
    return this.props.catPics.map(cat => <img key={cat.id} src={cat.url} alt={cat.id} />)
  }

  render() {
    return (
      <div>
        {this.listCats()}
      </div>
    )
  }
}

export default CatList;