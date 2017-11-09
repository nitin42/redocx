import React, { Component } from 'react';
import TextComponent from '../examples/Text';
import { render, Document, Text } from '../src/';

// Uncomment any of the below component to see what they render

import FooterComponent from '../examples/Footer';
import HeaderComponent from '../examples/Header';
import HrComponent from '../examples/Hr';
import LineBreakComponent from '../examples/LineBreak';
import PageBreakComponent from '../examples/PageBreak';
import TableComponent from '../examples/Table';
import ListComponent from '../examples/List';
import ImageComponent from '../examples/Image';

class MyDocument extends Component {
	render() {
		return (
			<Document>
				<TextComponent />
			</Document>
		)
	}
}

render(<MyDocument />, `${__dirname}/HelloWorld.docx`);
