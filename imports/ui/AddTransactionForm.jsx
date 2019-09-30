import React from 'react';
import ReactDOM from 'react-dom';

import { Button, TextField, Grid } from '@material-ui/core'


export default class AddTransactionForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			transactionType: 'in',
			transactionValue: 0.0,
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

	transactionValueChanged(event) {
		this.setState({
			transactionValue: event.target.value
		});
	}

	handleSubmit(event) {
		event.preventDefault();

		const value = this.state.transactionValue;
		const owner = this.props.userId

		Meteor.call('transaction.insert', Number(value), owner);
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit.bind(this)}>
				<Grid
							container
							direction="row"
							justify="center"
							spacing={2}
							alignItems="center"
						>
					<Grid item>
						<TextField
							label="Transaction value"
							step={0.01}
							onChange={this.transactionValueChanged.bind(this)}
							value={this.state.transactionValue}
							margin="normal"
							type="number"
							ref="transactionValue"
						/>

					</Grid>

					<Grid item>
						<Button variant="outlined" onClick={this.handleSubmit.bind(this)}>
							Add
						</Button>
					</Grid>

				</Grid>
			</form>
		);
	}
}
