const formatPrice = num => {
  return isNaN(num) ? 'No information available' : `$ ${num}`;
};

export default formatPrice;
