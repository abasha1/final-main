import React, { Component } from 'react';
import '../App.css';


class Reviews extends Component {
	constructor(props) {
		super(props);
		this.state = {
      Items: [],
      isLoaded: false
    }
	}
	componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/comments?_limit=22')
      .then(response => response.json())
      .then(json => {
				this.setState({
                    isLoaded : true,
					Items:json
				})
			});
  }
  
	render() {    
        const {isLoaded, Items} = this.state;  
        if (!isLoaded){
            return <div>
                იტვირთება...
            </div>
        }
        else {
		return (
			<div className={"ajax2"}>
               {Items.map(Item =>(
                    <div key={Item.id}>
                        <h2 className={"ajaxname"}>from - {Item.email}</h2>
                        <h4>{Item.name}</h4>
                        <h4 style={{fontStyle:"italic"}}>"{Item.body}"</h4>
                    </div>
                ))}
			</div>
        )
        }
	}
}

export default Reviews;