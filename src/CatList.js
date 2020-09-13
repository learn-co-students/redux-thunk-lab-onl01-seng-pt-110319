// write your CatList component here
import React, { Component } from 'react'

class CatList extends Component {

	render() {

		const pic = this.props.catPics.map((cat) => {
			return <li key={cat.id}> <img src={cat.url} alt={cat.url}/> </li>
		})

		return (
			<div>
			{pic}
			</div>
		)
	}
}

export default CatList


  