/**
 * Validates props for <Document /> component
 * @param {Object} props Component props
 */
function validateDocProps(props) {
  const { info, align } = props;
  const infoSchema = ['author', 'description', 'keywords', 'orientation', 'subject', 'title'];
  const infoKeys = Object.keys(info || {});
  const alignValues = ['left', 'right', 'center', 'justify'];

  if (info && typeof info !== 'object') {
    throw new Error('\'info\' prop expected an information object.');
  }

  infoKeys.forEach((key) => {
    if (!infoSchema.includes(key)) {
      throw new Error(`'${key}' is an invalid property for document description.`);
    }
  });

  if (align && !alignValues.includes(align)) {
    throw new Error('\'align\' prop can only take \'left\', \'right\', \'center\' and \'justify\'');
  }
}

/**
 * Validates props for <Table /> component
 * @param {Object} props Component props
 */
function validateTableProps(props) {
  const { headers, data, style } = props;
  const knownProps = ['headers', 'data', 'style'];

  if (headers && !Array.isArray(headers)) {
    throw new Error('\'headers\' prop expected an array of object corresponding to the values for headers. For example - [{ value: \'Name\', styles: { color: \'mistyrose\' }}]');
  }

  if (data && !Array.isArray(data)) {
    throw new Error('\'data\' prop expected an array of array values for each cell in row. For example - Considering there are three headers, name, subject and marks, the values will be  [[\'A\', \'Maths\', \'30\'], [\'B\', \'Computer Science\', \'40\']]');
  }

  if (style && typeof style !== 'object') {
    throw new Error('style prop expected an object of table styles.');
  }

  const keys = Object.keys(props);

  keys.forEach((key) => {
    if (!knownProps.includes(key)) {
      throw new Error(`Unknown prop '${key}' passed to <Table /> component. Supported props are headers, data and style.`);
    }
  });
}

/**
 * Validates schema for headers prop in <Table /> component
 * @param {Object} props Component props
 */
function headerValidators(props) {
  const { headers } = props;
  const headerSchema = ['value', 'styles'];
  const styleSchema = ['bold', 'size', 'color', 'align', 'vAlign', 'fontFamily', 'fill', 'cellColWidth'];

  headers.forEach((header) => {
    Object.keys(header).forEach((key) => {
      if (!headerSchema.includes(key)) {
        throw new Error(`'${key}' is not supported as a property for headers. Valid property names are 'value' and 'styles'.`);
      }
    });
  });

  headers.forEach((header) => {
    Object.keys(header.styles).forEach((key) => {
      if (!styleSchema.includes(key)) {
        throw new Error(`'${key}' is an invalid style property for header. Check the style value for header ${headers.indexOf(key) + 1}`);
      }
    });
  });
}

/**
 * Validates schema for style prop in <Table /> component 
 * (currently styles cannot be extended so style schema is needed)
 * 
 * @param {Object} props Component props
 */
function tableStyleValidators(props) {
  const { style } = props;
  const styleKeys = Object.keys(style || {});
  const tableStyleSchema = ['tableColWidth', 'tableSize', 'tableColor', 'tableAlign', 'borders'];

  styleKeys.forEach((key) => {
    if (!tableStyleSchema.includes(key)) {
      throw new Error(`'${key}' is an invalid style property for table style.`);
    }
  });
}

/**
 * Validates the props for Text component
 * @param {Object} props Component props
 */
function validateTextProps(props) {
  const knownProps = ['style', 'align', 'children'];
  const takesProps = Object.keys(props || {});

  takesProps.forEach((prop) => {
    if (!knownProps.includes(prop)) {
      throw new Error(
        `Unknown prop '${prop}' passed to Text component. Supported props are 'style' and 'align'.`,
      );
    }
  });
}

export {
  validateDocProps,
  validateTableProps,
  headerValidators,
  tableStyleValidators,
  validateTextProps,
};
