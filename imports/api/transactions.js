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
	'transaction.insert'(value, owner){
		check(value, Number);
		check(owner, String);

		Transactions.insert({
			value,
			owner,
			createdAt: new Date(),
		});
	},
	'transaction.remove'(id){
		check(id, String);

		Transactions.remove(id);
	}
});
