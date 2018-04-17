import React, { Component } from 'react';

export default class Timeline extends Component {
	constructor(props) {
		super(props);
		this.state = {
			message: '',
			chirps: [
				{
					message: 'Thanks for using chirper!',
					id: 0,
				},
				{
					message: 'Type any message you like in the text box and hit Send!',
					id: 1,
				},
				{
					message:
						'While we believe in the value of free speech, try to keep it civil and avoid starting WWIII if you can help it. Thanks!',
					id: 2,
				},
			],
		};
	}
}
