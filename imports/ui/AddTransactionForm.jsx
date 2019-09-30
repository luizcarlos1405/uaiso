import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';


export default class AddTransactionForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			transactionType: 'in',
		};
	}

	toggleType() {
		let type;

		if (this.state.transactionType === 'in') {
			type = 'out';
		} else {
			type = 'in';
		}

		this.setState({
			transactionType: type,
		});
	}

	handleSubmit(event) {
		event.preventDefault();

		const value = ReactDOM.findDOMNode(this.refs.formValue).value;
		const type = ReactDOM.findDOMNode(this.refs.formType).value;

		Meteor.call('transaction.insert', Number(value), type);
	}

	render() {
		return (
			<form className='new-transaction-form' onSubmit={this.handleSubmit.bind(this)}>
				<input
					onClick={this.toggleType.bind(this)}
					type='button'
					value={this.state.transactionType}
					ref='formType'
				/>

				<input
					required
					type='number'
					step='0.01'
					min='0.00'
					ref='formValue'
				/>

				<input
					type='submit'
					className='submission-button'
					value='Add'
				/>
			</form>
		);
	}
}
