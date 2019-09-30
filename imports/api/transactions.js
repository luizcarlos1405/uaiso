import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export default Transactions = new Mongo.Collection('transactions');


Meteor.methods({
	'transaction.insert'(value, type){
		check(value, Number);
		check(type, String);

		Transactions.insert({
			value,
			type,
			createdAt: new Date(),
		});
	},
	'transaction.remove'(id){
		check(id, String);

		Transactions.remove(id);
	}
});
