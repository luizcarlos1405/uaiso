import React from 'react';
import { Meteor } from 'meteor/meteor';

import { withStyles } from '@material-ui/styles';
import { ListItem, ListItemIcon, ListItemText, Button } from '@material-ui/core';


const styles = {
	income: {
		margin: 8,
		backgroundColor: "#a5d6a7"
	},
	outcome: {
		margin: 8,
		backgroundColor: "#ef9a9a"
	}
}

class Transaction extends React.Component {
	deleteThisTransaction() {
		const id = this.props.transaction._id

		Meteor.call('transaction.remove', id)
	}

	render() {
		const { classes } = this.props;
		const t = this.props.transaction;
		const style = t.value < 0 ? classes.outcome : classes.income


		return (
			<ListItem className={style}>
				<ListItemText className='value'>
					U$ {t.value.toFixed(2)}
				</ListItemText>

				<ListItemIcon edge="end">
					<Button	onClick={this.deleteThisTransaction.bind(this)}>
						&times;
					</Button>
				</ListItemIcon>
			</ListItem>
		);
	}
}

export default withStyles(styles)(Transaction);
