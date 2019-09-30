import React, { Component, Fragment } from 'react';
import { Meteor } from 'meteor/meteor';
import Transactions from '../api/transactions.js';
import AccountsUIWrapper from './AccountsUIWrapper.jsx';
import TransactionList from './TransactionList.jsx';
import AddTransactionForm from './AddTransactionForm.jsx';
import Balance from './Balance.jsx';
import { withTracker } from 'meteor/react-meteor-data';

import { AppBar, Typography, Toolbar } from '@material-ui/core';


class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			balance: 0,
		};
	}

	render() {
		return (
			<Fragment>
				<AppBar position='static'>
					<Toolbar>
						<AccountsUIWrapper />
						<Typography>
							Uaiso
						</Typography>
					</Toolbar>
				</AppBar>


				{ this.props.currentUser ?
					<AddTransactionForm userId={Meteor.userId()} />
				: <p>Please, log-in.</p> }

				{ this.props.currentUser ?
					<TransactionList transactions={this.props.transactions} />
				: '' }

			</Fragment>
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
