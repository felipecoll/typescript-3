let anyvar: any;
anyvar = 1;
anyvar = '1';
anyvar = true;
anyvar = null
anyvar = undefined;

let isNew: boolean = anyvar;

let unknowVar: unknown;
unknowVar = 1;
unknowVar = '1';
unknowVar = true;
unknowVar = null
unknowVar = undefined;

if (typeof unknowVar === 'string') {
   unknowVar.toUpperCase();
}

const parse = (str: string): unknown => {
   return JSON.parse(str);
}

const user = parse('{"name": "John"}');
