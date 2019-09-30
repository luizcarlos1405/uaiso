import React from 'react';
import ReactDOM from 'react-dom';
import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';

import { styled } from '@material-ui/styles';
import { Typography } from '@material-ui/core';


const StyledTypography = styled(Typography)({
  marginRight: 10,
});

export default class AccountsUIWrapper extends React.Component {
	componentDidMount() {
		this.view = Blaze.render(Template.loginButtons,
			ReactDOM.findDOMNode(this.refs.container));
	}

	componentWillUnmout() {
		Blaze.remove(this.view);
	}

	render() {
		return <StyledTypography ref='container'/>;
	}
}
