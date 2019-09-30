import React from 'react';
import Hello from './Hello.jsx';
import Info from './Info.jsx';


class App extends React.Component {
	render() {
		return (
			<div>
				<h1>Welcome to Meteor!</h1>
				<Hello />
				<Info />
			</div>
		);
	}
}

export default App;
