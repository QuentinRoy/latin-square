import test from "ava";

import latinSquare from "../src/main.js";

// Create a bunch of symbol as value just to ensure latinSquare do not care
// about the type of the values.
const A = Symbol("A");
const B = Symbol("B");
const C = Symbol("C");
const D = Symbol("D");
const E = Symbol("E");
const F = Symbol("F");

test("latin square", (t) => {
  // This result comes from http://statpages.info/latinsq.html
  t.deepEqual(
    latinSquare([A, B, C, D, E, F]),
    [
      [A, B, F, C, E, D],
      [B, C, A, D, F, E],
      [C, D, B, E, A, F],
      [D, E, C, F, B, A],
      [E, F, D, A, C, B],
      [F, A, E, B, D, C],
    ],
    "creates a balanced latin square for an even number of values",
  );

  // This result comes from http://statpages.info/latinsq.html
  t.deepEqual(
    latinSquare([A, B, C, D, E]),
    [
      [A, B, E, C, D],
      [B, C, A, D, E],
      [C, D, B, E, A],
      [D, E, C, A, B],
      [E, A, D, B, C],
    ],
    "creates a balanced latin square for an odd number of values",
  );
});

test("balanced latin square", (t) => {
  // This result comes from http://statpages.info/latinsq.html
  t.deepEqual(
    latinSquare([A, B, C, D, E, F], true),
    [
      [A, B, F, C, E, D],
      [B, C, A, D, F, E],
      [C, D, B, E, A, F],
      [D, E, C, F, B, A],
      [E, F, D, A, C, B],
      [F, A, E, B, D, C],
    ],
    "creates a balanced latin square for an even number of values",
  );

  // This result comes from http://statpages.info/latinsq.html
  t.deepEqual(
    latinSquare([A, B, C, D, E], true),
    [
      [A, B, E, C, D],
      [B, C, A, D, E],
      [C, D, B, E, A],
      [D, E, C, A, B],
      [E, A, D, B, C],
      [D, C, E, B, A],
      [E, D, A, C, B],
      [A, E, B, D, C],
      [B, A, C, E, D],
      [C, B, D, A, E],
    ],
    "creates a balanced latin square for an odd number of values",
  );
});

test("latin square by size", (t) => {
  t.deepEqual(
    latinSquare(5),
    [
      [0, 1, 4, 2, 3],
      [1, 2, 0, 3, 4],
      [2, 3, 1, 4, 0],
      [3, 4, 2, 0, 1],
      [4, 0, 3, 1, 2],
    ],
    "creates a latin square of size n if a number is provided instead of an array",
  );
});
