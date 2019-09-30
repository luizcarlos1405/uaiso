import React from 'react';
import Transactions from '../api/transactions.js';
import TransactionList from './TransactionList.jsx';
import AddTransactionForm from './AddTransactionForm';


export default class App extends React.Component {
	render() {
		return (
			<div>
				<h1>Uaiso</h1>

				<AddTransactionForm />

				<TransactionList />
			</div>
		);
	}
}
