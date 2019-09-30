import React from 'react';
import Transaction from './Transaction.jsx';
import Balance from './Balance.jsx';
import { Meteor } from 'meteor/meteor';


export default class TransactionList extends React.Component {
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
				<li className='list-group-item list-group-item-primary'>
					<strong>Balance:</strong> R$<Balance transactions={this.props.transactions}/>
				</li>
				{this.renderTransactions()}
			</ul>
		);
	}
}
