import officegen from 'officegen';

/**
 * This creates the document instance
 */
class WordDocument {
  constructor() {
    this.doc = officegen('docx');
  }
}

export default WordDocument;
