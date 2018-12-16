const sortAttributes = (key, order = 'asc') => (a, b) => {
  if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
    return 0;
  }

  const varA = typeof a[key] === 'string' ? a[key].toUpperCase() : a[key];
  const varB = typeof b[key] === 'string' ? b[key].toUpperCase() : b[key];
  const comparison = varA < varB ? -1 : varA > varB ? 1 : 0;

  return order === 'desc' ? comparison * -1 : comparison;
};

export default sortAttributes;
