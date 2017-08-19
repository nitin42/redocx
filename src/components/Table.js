import { styleSerializer } from '../styles/styles';
import { validateTableProps, headerValidators, tableStyleValidators } from '../validators/componentValidators';

/**
 * This component renders a table with props 'headers', 'data' and 'style' for styling the table
 */
class Table {
  // Stores headers and corresponding data for the headers
  TABLE_DATA = [];

  // Table styles (required for rendering a table)
  defaultStyles = {
    tableColWidth: 2500,
    tableSize: 24,
    tableColor: 'black',
    tableAlign: 'left',
    borders: true,
  };

  constructor(root, props) {
    this.root = root;
    this.props = props;
    validateTableProps(this.props);
    headerValidators(this.props);
    tableStyleValidators(this.props);
  }

  // set the headers and serialize each cell's data (in accordance with open office xml)
  setHeaders(props) {
    const { headers } = props;

    headers.forEach((header) => {
      header.val = header.value;
      header.opts = header.styles;
      header.opts = styleSerializer(header.opts);
      delete header.value;
      delete header.styles;
    });

    // for (let i of headers) {
    //   i.val = i.value;
    //   i.opts = i.styles;
    //   // serialize all the styles according to open office xml values
    //   i.opts = styleSerializer(i.opts);
    //   // Inefficient (performance bottleneck)
    //   delete i.value;
    //   delete i.styles;
    // }

    this.TABLE_DATA.push(headers);
  }

  // set the row data
  setData(props) {
    const { data } = props;
    data.forEach((item) => {
      this.TABLE_DATA.push(item);
    });
  }

  // Set everything and finally render a table 😅
  async renderTable() {
    this.setHeaders(this.props);
    this.setData(this.props);
    await this.root.doc.createTable(this.TABLE_DATA, this.props.style || this.defaultStyles);
  }

  async render() {
    await this.renderTable();
  }
}

export default Table;
