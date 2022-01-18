
const assertEqual = require('../assertEqual');
const tail = require('../tail');


describe("#tail", () => {
    it("returns 'Lighthouse Labs' for 'Yoyo Lighthouse Labs'", () => {
      assert.strictEqual(tail('Yoyo Lighthouse Labs'), 'Lighthouse Labs');    
    });
  });