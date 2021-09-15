// Classes Import
import Matrix from './models/Matrix';

// Styles Import
import '@sass/main.sass';

// ----------------------------------------- Main Application

let matrix1 = new Matrix();

// let matrix2 = [
//   [1, 2, 3, 0],
//   [4, 5, 6, 9],
//   [7, 8, 9, 0],
// ];


// matrix1.addColumn([1, 11, 111, 1111]);

matrix1.addRow([1, 2, 3, 4]);
matrix1.addRow([2, 3, 4, 5]);
matrix1.addRow([3, 4, 5, 5]);
matrix1.addRow([4, 5, 6, 7]);
matrix1.removeColumn(0);

let minor = Matrix.getMinor(
    [
        [1, 0, 2],
        [-1, 1, 5],
        [3, 4, 0],
], 0
)


// let det = Matrix.determinant(
//     [
//             [1, 0],
//             [1, 6],
//     ]
// )


// matrix1.removeRow(1);

// Необходимо защитить от записи
// matrix1.columns = 4;


// console.log(matrix1);
console.log(minor);
