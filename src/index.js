import { render } from './renderer/render';

/**
 * Component name (according to the createElement function)
 */
const Text = 'TEXT';
const Image = 'IMAGE';
const List = 'LIST';
const NumberItem = 'NUMBERITEM';
const BulletItem = 'BULLETITEM';
const LineBreak = 'LINEBREAK';
const PageBreak = 'PAGEBREAK';
const Document = 'DOCUMENT';
const Hr = 'HR';
const Table = 'TABLE';
const Header = 'HEADER';
const Footer = 'FOOTER';

/**
 * Main export
 */
export {
  Text,
  Image,
  List,
  Document,
  NumberItem,
  BulletItem,
  PageBreak,
  Hr,
  LineBreak,
  Table,
  Header,
  Footer,
  render,
};
