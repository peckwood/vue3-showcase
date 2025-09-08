class MyClass {
  a = 'a1';
}
// default export of an anonymous arrow function
// corresponds to the export default expression; form in the MDN list.
export default () => {
  // const 必须有
  const myClass = new MyClass();
  return {
    myClass
  };
}
