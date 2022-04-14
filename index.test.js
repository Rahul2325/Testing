const add = require('./index');



test("testing add function from index.js file",()=>{
    expect(add(2,2)).toBe(4)
})

test("checking an array",()=>{
    const array = ['rahul','shashi','suntiha'];
    expect(array).not.toContain('Rahul')
})

test("checking a string",()=>{
    const str='rahul';
    expect(str).toMatch('rahul');
})