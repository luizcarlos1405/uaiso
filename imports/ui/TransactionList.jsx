import React from 'react';
import Transaction from './Transaction.jsx';
import Balance from './Balance.jsx';
import { Meteor } from 'meteor/meteor';

import { Grid, List, ListItem, ListItemText, Divider } from '@material-ui/core';


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
			<List className="list-group">
				<ListItem>
					<ListItemText>
						<strong>Balance:</strong> R$ <Balance transactions={this.props.transactions} />
					</ListItemText>
				</ListItem>
				<Divider />
				{this.renderTransactions()}
			</List>
		);
	}
}
