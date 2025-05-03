// Felipe => [F,e,l,i,p,e] => string => string[]

function parseStr(input: string | string[]): string |string[] {
  if(Array.isArray(input)) {
    return input.join('');
  }
  return input.split('');
}

const rtaArray = parseStr(['F', 'e', 'l', 'i', 'p', 'e']);
console.log(rtaArray);
const rtaString = parseStr('Felipe');
console.log(rtaString);
