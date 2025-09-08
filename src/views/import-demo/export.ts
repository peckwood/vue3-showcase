// normal export
function f1(){
  return 'f1';
}

// I am export under another name: f3
function f2(){
  return 'f2';
}

// if you won reassign v1, use const is preferred
let v1 = 'hi, I am let v1'

const v2 = 'hi I am const v2'

export const v3 = 'Im exported while declaring!'

const v4 = 'I am v4 locally but exported as v5';

function f6(){
  return 'I am f6 but imported as f7'
}

export {f1, f2 as f3, f6, v1, v2}
export { v4 as v5 };

