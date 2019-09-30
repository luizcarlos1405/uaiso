import React from 'react';
import Transactions from '../api/transactions.js';
import Transaction from './Transaction.jsx'
import { withTracker } from 'meteor/react-meteor-data';


class App extends React.Component {
	renderTransactions() {
		return this.props.transactions.map((transaction) => (
			<Transaction
				key={transaction._id}
				transaction={transaction}
			 />
		));
	}

	render() {
		return (
			<div>
				<h1>Uaiso</h1>
				<ul>
					{this.renderTransactions()}
				</ul>
			</div>
		);
	}
}

export default withTracker(() => {
	return {
		transactions: Transactions.find({}, { sort: { createdAt: -1} }).fetch(),
	};
})(App);
