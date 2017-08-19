import React, { Component } from 'react';
import { Text, Document } from '../src/';

class TextComponent extends Component {
	render() {
		return (
			<Document>
				<Text style={{ color: 'red', fontSize: '30' }} align="center">
					Hello World
				</Text>
			</Document>
		);
	}
}

export default TextComponent;
