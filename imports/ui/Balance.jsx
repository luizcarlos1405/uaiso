import React from 'react';

export default class Balance extends React.Component {
	calculateBalance() {
		let sum = 0;

		this.props.transactions.forEach((t) => {
			sum += t.value;
		});

		return sum.toFixed(2);
	}

	render() {
		return (
			<span>{this.calculateBalance()}</span>
		);
	}
}
