import React from "react";

/**
 * @API_URL :  "https://jsonplaceholder.typicode.com/users"
 * @task : fetch data from api and display,on page mount.
 * 
 */
class App extends React.Component {
	// Constructor
	constructor(props) {
		super(props);

		this.state = {
			items: [],
			DataisLoaded: false
		};
	}
	// ComponentDidMount is used to
	// execute the code
	componentDidMount() {
		 /**
		  *  complete this 
		  */
	}
	render() {
		const { DataisLoaded, items } = this.state;
		if (!DataisLoaded) return <div>
			<h1> Pleses wait some time.... </h1> </div> ;

		return (
		<div className = "App">
			<h1> Fetch data from an api in react </h1> {
				items.map((item) => (
				<ol key = { item.id } >
				 
        	User Name: { item.username },
					Full Name: { item.name },
					User Email: { item.email }
					</ol>
				))
			}
		</div>
	);
}
}

export default App;

