import { division } from '@/libs/utils/division';

it('배열 나누기', () => {
  const arr = [1, 2, 3, 4, 5];
  const result = division(2, arr);
  expect(result).toEqual([[1, 2], [3, 4], [5]]);
});

//it('RGB to HEX', () => {
//  const rgb = 'rgb(255, 255, 255)';
//  const hex = rgbToHex(rgb);
//  expect(hex).toEqual('#ffffff');
//});
