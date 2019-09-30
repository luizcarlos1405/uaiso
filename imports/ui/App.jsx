import React from 'react';
import { Meteor } from 'meteor/meteor';
import Transactions from '../api/transactions.js';
import AccountsUIWrapper from './AccountsUIWrapper';
import TransactionList from './TransactionList.jsx';
import AddTransactionForm from './AddTransactionForm';
import { withTracker } from 'meteor/react-meteor-data';


class App extends React.Component {
	render() {
		return (
			<div>
				<header>
					<h1>Uaiso</h1>
				</header>

				<AccountsUIWrapper />

				{ this.props.currentUser ?
					<AddTransactionForm userId={Meteor.userId()} />
				: <p>Please, log-in.</p> }

				<TransactionList />
			</div>
		);
	}
}

export default withTracker(() => {
	return {
		currentUser: Meteor.user(),
	};
})(App);
