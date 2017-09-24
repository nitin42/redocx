import React, { Component } from 'react';
import TextComponent from '../examples/Text';
import { render, createBuffer, Document, Text } from '../src/';

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
				<TableComponent />
			</Document>
		)
	}
}

// render(<MyDocument />, `${__dirname}/text.docx`);

createBuffer(<MyDocument />).then((buf) => console.log('resolve', buf.toString())).catch(console.error);