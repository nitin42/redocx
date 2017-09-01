const Platform = {
  OS: 'word',
  select: obj => ('word' in obj ? obj.word : obj.default),
};

export default Platform;
