const formatNumber = num => {
  return isNaN(num) ? 'No information available' : num.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
};

export default formatNumber;
