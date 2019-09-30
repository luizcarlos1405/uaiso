import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export default Transactions = new Mongo.Collection('transactions');


if (Meteor.isServer) {
	Meteor.publish('transactions', function transactionPublication() {
		return Transactions.find();
	});
}


Meteor.methods({
	'transaction.insert'(value, type, owner){
		check(value, Number);
		check(type, String);
		check(owner, String);

		Transactions.insert({
			value,
			type,
			owner,
			createdAt: new Date(),
		});
	},
	'transaction.remove'(id){
		check(id, String);

		Transactions.remove(id);
	}
});
