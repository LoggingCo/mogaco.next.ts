export const division = (n: number, arr: any): any => {
  const tmp = [];
  for (let i = 0; i < arr.length; i += n) {
    tmp.push(arr.slice(i, i + n));
  }
  return tmp;
};
