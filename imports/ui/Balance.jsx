import React from 'react';

export default class Balance extends React.Component {
	calculateBalance() {
		let sum = 0;

		this.props.transactions.forEach((t) => {
			if (t.type === 'out') {
				sum -= t.value;
			} else {
				sum += t.value;
			}
		});

		console.log(sum);
		return sum;
	}

	render() {
		return (
			<span>{this.calculateBalance()}</span>
		);
	}
}
