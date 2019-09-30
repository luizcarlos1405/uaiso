import React from 'react';

export default class Transaction extends React.Component {
	render() {
		const t = this.props.transaction;

		return (
			<li className={t.type}>
					U$ {t.type === 'out' ? '-' : ''}	{t.value.toFixed(2)}
			</li>
		);
	}
}
