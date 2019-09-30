import React from 'react';
import { Meteor } from 'meteor/meteor';
import Transactions from '../api/transactions.js';
import AccountsUIWrapper from './AccountsUIWrapper.jsx';
import TransactionList from './TransactionList.jsx';
import AddTransactionForm from './AddTransactionForm.jsx';
import Balance from './Balance.jsx';
import { withTracker } from 'meteor/react-meteor-data';


class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			balance: 0,
		};
	}

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

				{ this.props.currentUser ?
					<TransactionList transactions={this.props.transactions} />
				: '' }

			</div>
		);
	}
}

export default withTracker(() => {
	Meteor.subscribe('transactions');

	return {
		transactions: Transactions.find({ owner: Meteor.userId() }, { sort: { createdAt: -1} }).fetch(),
		currentUser: Meteor.user(),

	};
})(App);
