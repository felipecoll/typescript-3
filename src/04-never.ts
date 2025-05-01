const whitoutEnd = () => {
  while (true) {
    console.log('I am never ending');
  }
}

const fail = (message: string) => {
  throw new Error(message);
}


const example = (input: unknown)  => {
  if (typeof input === 'string') {
    return input;
  } else if (typeof input === 'number') {
    return input.toString();
  } else if (Array.isArray(input)) {
    return input.join(', ');
  } else if (input === null) {
    return 'null';
  } else if (input === undefined) {
    return 'undefined';
  } else {
    fail('Invalid input type');
  }
}

console.log(example('Hello')); // Hello
console.log(example(123)); // 123
console.log(example([1, 2, 3])); // 1, 2, 3
console.log(example(null)); // null
console.log(example(undefined)); // undefined
