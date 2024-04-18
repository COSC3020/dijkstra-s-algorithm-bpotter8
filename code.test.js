const fs = require('fs');
const jsc = require('jsverify');
const assert = require('assert');

eval(fs.readFileSync('code.js')+'');

const testGraph = {
  A: { B: 2 },
  B: { A: 2, C: 4, D: 3 },
  C: { B: 4, D: 2, E: 1 },
  D: { B: 3, C: 2, E: 2 },
  E: { C: 1, D: 2 }
};

// Unit testing
const resultActual = dijkstra(testGraph, 'A');
const resultTheory = {
  A: 0,
  B: 2,
  C: 6,
  D: 5, 
  E: 7
};

assert.deepStrictEqual(resultActual, resultTheory); 
