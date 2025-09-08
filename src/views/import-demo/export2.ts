export {f1_2, f2_2 as f3_2, v1_2, v2_2}
export { v4_2 as v5_2 };

// normal export
function f1_2(){
  return 'f_1';
}

// I am export under another name: f3
function f2_2(){
  return 'f2_2';
}

let v1_2 = 'hi, I am let v1_2'
v1_2 = 'now, I am let v1_2~~~'

const v2_2 = 'hi I am const v2_2'

export const v3_2 = 'Im exported while declaring!'

const v4_2 = 'I am v_4 locally but exported as v5_2';

