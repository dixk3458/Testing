const add = require('../add.js');

// test('',()=>{
//     // 테스트 코드를 작성!
// })

test('adds 1+2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});
