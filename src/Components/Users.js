import React, { Component } from 'react';
import '../App.css';


class Users extends Component {
	constructor(props) {
		super(props);
		this.state = {
      Items: [],
      isLoaded: false
    }
	}
	componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users/')
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
                loading...
            </div>
        }
        else {
		return (
			<div className={"ajax"}>
               {Items.map(Item =>(
                    <div key={Item.id}>
                        <h2 className={"ajaxname"}>{Item.name}</h2>
                        <h4>Email : {Item.email}</h4>
                        <h4>Company - {Item.company.name}</h4>
                        <h4 style={{fontStyle:"italic"}}>"{Item.company.catchPhrase}"</h4>
                    </div>
                ))};
			</div>
        )
        }
	}
}

export default Users;