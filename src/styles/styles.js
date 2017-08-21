import chroma from 'chroma-js';
import isHex from 'validator/lib/isHexadecimal';

/**
 * Get the hex value or the color name
 * @param {string} value hex or color name
 */
function getHexOrColor(value) {
  if (typeof value === 'undefined') {
    return isHex('undefined');
  } else if (isHex(value)) {
    return value.replace('#', '');
  }
  return chroma(value).hex().replace('#', '');
}

/**
 * Function to apply the styles to a component
 * @param {Object} props Component props
 */
function applyStyles(props) {
  if (Object.keys(props) === 0) {
    return {};
  }

  const {
    backgroundColor,
    color,
    fontSize,
    fontFace,
    bold,
    border,
    underline,
    italic,
    highlight,
    borderSize,
    borderColor,
    link,
  } = props;

  return {
    back: getHexOrColor(backgroundColor),
    color: getHexOrColor(color),
    highlight: getHexOrColor(highlight),
    italic,
    underline,
    bold,
    border,
    borderColor: getHexOrColor(borderColor),
    borderSize,
    font_size: fontSize,
    font_face: fontFace,
    link,
  };
}

/**
 * Function to apply style attributes to <Image /> component
 * @param {Object} props Component props
 */
function imageProps(props) {
  const { width, height } = props;

  return {
    cx: parseInt(width, 10),
    cy: parseInt(height, 10),
  };
}

/**
 * Function to apply style attributes to <Image /> component without style prop 
 * @param {Object} Component props
 */
function addStyles(props) {
  return {
    cx: props.width ? parseInt(props.width, 10) : null,
    cy: props.height ? parseInt(props.height, 10) : null,
  };
}

/**
 * Function to add <Image /> related attributes with or without using style prop
 * @param {Object} props Component props
 */
function applyImageProps(props) {
  return props.style ? imageProps(props.style) : addStyles(props);
}

/**
 * Function to serialize style properties for <Table /> component according to open office xml
 * @param {Object} values style attributes for table
 */
function styleSerializer(values) {
  const { bold, size, color, align, vAlign, fontFamily, fill, cellColWidth } = values;

  return {
    b: bold,
    sz: size,
    color: getHexOrColor(color),
    align,
    vAlign,
    fontFamily,
    fill: getHexOrColor(fill),
    cellColWidth,
  };
}

export { applyStyles, applyImageProps, styleSerializer };
