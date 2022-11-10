/**
 * Produces a Latin Square of a given size.
 * By default, the returned latin square is balanced if the number of values is
 * an even number, but not completely balanced if it is an odd number. If you
 * need a Balanced Latin Square, set the `isAlwaysBalanced` parameter
 * to `true`.
 *
 * @param n The size of the latin square.
 * @param isAlwaysBalanced If true, the returned latin square will always be
 * balanced, but will be double the size if n is an odd number.
 * @returns The latin square.
 */
export default function latinSquare(
  n: number,
  isAlwaysBalanced?: boolean,
): number[][];
/**
 * Produces a Latin Square with the given values.
 * By default, the returned latin square is balanced if the number of values is
 * an even number, but not completely balanced if it is an odd number. If you
 * need a Balanced Latin Square, set the `isAlwaysBalanced` parameter
 * to `true`.
 *
 * @param treatments The values to be used in the latin square.
 * @param isAlwaysBalanced If true, the returned latin square will always be
 * balanced, but will be double the size if the number of values is an odd
 * number.
 * @returns The latin square.
 */
export default function latinSquare<Treatment>(
  treatments: Treatment[],
  isAlwaysBalanced?: boolean,
): Treatment[][];
export default function latinSquare<Treatment>(
  nOrTreatments: Treatment[] | number,
  isAlwaysBalanced: boolean = false,
): (Treatment | number)[][] {
  if (typeof nOrTreatments === "number") {
    return latinSquareBySize(nOrTreatments, isAlwaysBalanced);
  }
  let latinSquareIndexes = latinSquareBySize(
    nOrTreatments.length,
    isAlwaysBalanced,
  );
  return latinSquareIndexes.map((row) => row.map((i) => nOrTreatments[i]));
}

function latinSquareBySize(n: number, isAlwaysBalanced: boolean): number[][] {
  if (n < 0) throw new Error("Latin square size must be > 0");
  if (n == 0) return [];
  if (n == 1) return [[0]];

  let firstRow = new Array<number>(n);
  for (let i = 0; i < n; i++) {
    if (i < 2) {
      firstRow[i] = i;
    } else if (i % 2 == 0) {
      firstRow[i] = n - i / 2;
    } else {
      firstRow[i] = Math.floor(i / 2) + 1;
    }
  }

  let latinSquare = [firstRow];
  let previousRow = firstRow;
  for (let i = 1; i < n; i += 1) {
    let newRow = previousRow.map((cell) => (cell + 1) % n);
    latinSquare.push(newRow);
    previousRow = newRow;
  }

  // In case there is an odd number of treatments, we also need to add the
  // reversed rows.
  if (isAlwaysBalanced && n % 2 > 0) {
    for (let i = 0; i < n; i += 1) {
      latinSquare.push(latinSquare[i].slice().reverse());
    }
  }
  return latinSquare;
}
