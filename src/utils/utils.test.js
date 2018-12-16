import formatPrice from './formatPrice';
import formatNumber from './formatNumber';

it('should format the price, adding a $ sign', () => {
  expect(formatPrice('1.23')).toBe('$ 1.23');
});

it('should format the number with commas', () => {
  expect(formatNumber('1000')).toBe('1,000');
  expect(formatNumber('9999999')).toBe('9,999,999');
});
