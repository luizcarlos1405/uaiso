import React from 'react';
import { Meteor } from 'meteor/meteor';

export default class Transaction extends React.Component {
	deleteThisTransaction() {
		const id = this.props.transaction._id

		Meteor.call('transaction.remove', id)
	}

	render() {
		const t = this.props.transaction;

		return (
			<li className={t.type}>
				<span className='value'>
					U$ {t.type === 'out' ? '-' : ''}	{t.value.toFixed(2)}
				</span>

				<button className='delete-transaction'
						onClick={this.deleteThisTransaction.bind(this)}>
					&times;
				</button>
			</li>
		);
	}
}
