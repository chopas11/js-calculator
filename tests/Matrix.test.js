const Matrix = require('../src/models/Matrix');

let matrix = new Matrix([
  [1, 2, 3],
  [2, 3, 4],
  [3, 4, 5],
]);
const matrix0 = [];
const matrix1 = [1];
const matrix2 = [
  [1, 4],
  [2, 5],
];
const matrix3 = [
  [0, 0, 6],
  [6, -6, 8],
  [-17, 8, -4],
];
const matrixn = [
  [1, 3, 7, 5, 7],
  [1, 8, 4, 6, 6],
  [9, 3, 1, 5, 1],
  [1, 2, 4, 4, 6],
  [3, 3, 3, 5, 7],
];

//GetMinor
describe('GetMinor', () => {
  test('should return minor for 1x1 matrix', () => {
    expect(Matrix.getMinor(matrix1, 0, 0)).toEqual([]);
  });
  test('should return minor for 2x2 matrix', () => {
    expect(Matrix.getMinor(matrix2, 0, 0)).toEqual([5]);
    expect(Matrix.getMinor(matrix2, 0, 1)).toEqual([2]);
    expect(Matrix.getMinor(matrix2, 1, 0)).toEqual([4]);
    expect(Matrix.getMinor(matrix2, 1, 1)).toEqual([1]);
  });

  test('should return minor for 3x3 matrix', () => {
    expect(Matrix.getMinor(matrix3, 0, 0)).toEqual([
      [-6, 8],
      [8, -4],
    ]);
    expect(Matrix.getMinor(matrix3, 1, 1)).toEqual([
      [0, 6],
      [-17, -4],
    ]);
    expect(Matrix.getMinor(matrix3, 2, 2)).toEqual([
      [0, 0],
      [6, -6],
    ]);
  });
  test('should return minor for matrix more then 3x3', () => {
    expect(Matrix.getMinor(matrixn, 3, 3)).toEqual([
      [1, 3, 7, 7],
      [1, 8, 4, 6],
      [9, 3, 1, 1],
      [3, 3, 3, 7],
    ]);
  });
});

// GetDeterminant
describe('GetDeterminant', () => {
  test('should return det for 1x1 matrix', () => {
    expect(Matrix.getDeterminant(matrix1)).toBe(1);
  });
  test('should return det for 2x2 matrix', () => {
    expect(Matrix.getDeterminant(matrix2)).toBe(-3);
  });

  test('should return det for 3x3 matrix', () => {
    expect(Matrix.getDeterminant(matrix3)).toBe(-324);
  });
  test('should return det for matrix more then 3x3', () => {
    expect(Matrix.getDeterminant(matrixn)).toBe(-352);
  });
  test('should return det for 11x11 matrix', () => {
    const matrix10 = [
      [1, 2, 1, -1, 2, 4, 3, 1, 3, 5, 4],
      [1, -1, -2, -1, -1, 5, 2, 7, 3, 4, 1],
      [2, 1, -1, -2, -1, 7, 4, 3, 6, 2, 3],
      [1, -2, -1, -1, 2, 4, 56, 2, 7, 9, 7],
      [3, -1, 2, 1, -3, 2, 5, 8, 3, 12, 4],
      [2, -1, 2, 2, -3, 2, 6, 7, 9, 12, 5],
      [3, -12, 1, 3, -3, 2, 5, 8, 3, 11, 1],
      [1, -13, 1, 6, -3, 2, 5, 8, 2, 13, 9],
      [2, -14, 2, 1, -3, 2, 1, 10, 4, 10, 2],
      [4, -15, 2, 4, -6, 2, 8, 8, 3, 19, 5],
      [1, -1, 22, -4, -3, 2, 9, 8, 1, 19, 6],
    ];
    expect(Matrix.getDeterminant(matrix10)).toBe(5740562796);
  });
});

// GetInverseMatrix
// describe('getInverseMatrix', () => {
//   test('should return iverse Matrix for 3x3 matrix', () => {
//     expect(Matrix.getInverseMatrix(matrix3)).toBe([
//       [0.12345679012345678, -0.14814814814814814, -0.1111111111111111],
//       [0.06557377049180328, 0.00819672131147541, 0.11475409836065574],
//       [0.20491803278688525, -0.036885245901639344, -0.01639344262295082],
//     ]);
//   });
// });
//
// Возвращает undefined
// describe('addColumn', () => {
//   test('should return iverse Matrix for 3x3 matrix', () => {
//     expect(matrix.addColumn(1, 1, 1)).toBe();
//   });
// });
