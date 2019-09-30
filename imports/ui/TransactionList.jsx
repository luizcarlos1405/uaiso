import React from 'react';
import Transaction from './Transaction.jsx';
import { withTracker } from 'meteor/react-meteor-data';


class TransactionList extends React.Component {
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
			<ul className="list-group">
				{this.renderTransactions()}
			</ul>
		);
	}
}

export default withTracker(() => {
	return {
		transactions: Transactions.find({}, { sort: { createdAt: -1} }).fetch(),
	};
})(TransactionList);
