# Latin Square

This is a simple implementation of a Latin Square in JavaScript, that supports
both "classic" latin squares and balanced latin squares.

Balanced latin squares are latin squares that protect against carryover
effects, but are double the size when the number of treatments is an odd
number.

## Installation

```sh
npm install latin-square
```

## Usage

```js
import createLatinSquare from "latin-square";

// Create a balanced latin square with 4 treatments. Latin squares with an
// even number of treatments are always balanced.
const evenLatinSquare = createLatinSquare(["A", "B", "C", "D"]);

// Creates an unbalanced latin square with 5 treatments.
const oddLatinSquare = createLatinSquare(["A", "B", "C", "D", "E"]);

// Creates a balanced latin square with 5 treatments.
const oddBalancedLatinSquare = createLatinSquare(
  ["A", "B", "C", "D", "E"],
  true,
);
```

## Compile

```sh
npm run build
```

## Test

The source code must be compiled for the tests to be able to run.

```sh
npm run test
```

To get test update on code change, both compile and run the test in watch mode:

```sh
npm run build -- --watch
```

and 

```sh
npm run test -- --watch
```
