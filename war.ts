export function stairsIn20(s: string) {
  //code here
  const half = s.length / 2;
  return s.slice(Math.ceil(half - 1), Math.floor(half + 1));
}


console.log(stairsIn20('abc'));
console.log(stairsIn20('abcd'));
console.log(stairsIn20('abcde'));
