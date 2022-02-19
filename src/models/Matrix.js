class Matrix {
  constructor(body) {
    if (body) {
      this.body = body;
      this.rows = this.body.length;
      this.columns = this.body[0].length;
    } else {
      this.body = [];
      this.rows = 0;
      this.columns = 0;
    }
  }
  // Getters
  get isSquare() {
    return this.rows === this.columns ? true : false;
  }

  get rank() {
    return Math.min(this.rows, this.columns);
  }

  // Instance Methods
  addRow(row) {
    if (this.rows === 0) this.columns = row.length;
    row.length = this.columns;
    // Еще нужно дописать изменение empty на ноль в случае недостающей длины
    this.body.push(row);
    this.rows++;
  }

  removeRow(rowPosition) {
    for (let i = rowPosition; i < this.rows - 1; i++)
      this.body[i] = this.body[i + 1];
    this.body.pop();
    if (this.rows === 1) this.columns = 0;
    this.rows--;
  }

  addColumn(column) {
    let range = this.rows === 0 ? column.length : this.rows;
    // Еще нужно дописать изменение empty на ноль в случае недостающей длины
    for (let i = 0; i < range; i++) {
      if (this.rows === 0) this.body[i] = [];
      this.body[i][this.columns] = column[i];
    }
    if (this.rows === 0) this.rows = column.length;
    this.columns++;
  }

  removeColumn(columnPosition) {
    for (let col = columnPosition; col < this.columns; col++) {
      for (let row = 0; row < this.rows; row++)
        col !== this.columns - 1
          ? (this.body[row][col] = this.body[row][col + 1])
          : this.body[row].pop();
    }
    if (this.columns === 1) {
      this.rows = 0;
      this.body = [];
    }
    this.columns--;
  }

  getMainDiagonal() {
    if (this.rows !== this.columns) return [];
    let mainDiagonal = [];
    for (let row = 0; row < this.rows; row++)
      mainDiagonal.push(this.body[row][row]);
    return mainDiagonal;
  }

  getSideDiagonal() {
    if (this.rows !== this.columns) return [];
    let sideDiagonal = [];
    for (let row = 0; row < this.rows; row++)
      sideDiagonal.push(this.body[row][this.columns - row - 1]);
    return sideDiagonal;
  }

  getRowWithNum(row) {
    return this.body[row];
  }

  getColumnWithNum(column) {
    let columnWithNum = [];
    for (let row = 0; row < this.rows; row++)
      columnWithNum.push(this.body[row][column]);
    return columnWithNum;
  }

  multiplyByNumber(number) {
    for (let i = 0; i < this.rows; i++)
      this.body[i] = this.body[i].map((element) => element * number);
  }

  static multiplyByNumber(matrix, number) {
    for (let i = 0; i < matrix.length; i++)
      matrix[i] = matrix[i].map((element) => element * number);
    return matrix;
  }

  transposition() {
    // col - Столбец, row - строка
    let buffer = [];
    for (let col = 0; col < this.columns; col++) {
      buffer.push([]);
      for (let row = 0; row < this.rows; row++)
        buffer[col].push(this.body[row][col]);
    }
    this.body = buffer;
    this.columns = this.rows;
    this.rows = buffer.length;
  }

  static transposition(matrix) {
    let transpositionMatrix = [];
    for (let col = 0; col < matrix.length; col++) {
      transpositionMatrix.push([]);
      for (let row = 0; row < matrix[0].length; row++)
        transpositionMatrix[col].push(matrix[row][col]);
    }
    return transpositionMatrix;
  }

  // Static Methods
  static getMinor(matrix, rowNum, colNum) {
    let rows = matrix.length;
    let columns = matrix[0].length;
    let minor = [];
    // Copy array to minor
    for (let row = 0; row < rows; row++) {
      minor.push([]);
      for (let col = 0; col < columns; col++) minor[row].push(matrix[row][col]);
    }
    // remove needed row
    for (let i = rowNum; i < rows - 1; i++) minor[i] = minor[i + 1];
    minor.pop();
    // remove needed column
    for (let col = colNum; col < columns; col++) {
      for (let row = 0; row < rows - 1; row++)
        col !== rows - 1
          ? (minor[row][col] = minor[row][col + 1])
          : minor[row].pop();
    }
    if (minor.length === 1) return minor[0];
    return minor;
  }

  static getDeterminant(matrix) {
    if (matrix.length == 1) return matrix[0];
    // If matrix are not square
    if (matrix.length != matrix[0].length) return NaN;
    // Base of recursion - matrix 2x2
    if (matrix.length == 2)
      return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
    let det = 0;
    for (let i = 0; i < matrix.length; i++)
      det +=
        matrix[0][i] *
        Math.pow(-1, i) *
        this.getDeterminant(this.getMinor(matrix, 0, i));
    return det;
  }

  // static getDodgsonDeterminant(matrix) {
  //   // Base of recursion - matrix 2x2
  //   if(matrix.length == 2)
  //     return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
  //   let minor2x2Matrix = [];
  //
  //   // return minor2x2Matrix;
  //   console.log(minor2x2Matrix)
  //   return this.getDodgsonDeterminant(minor2x2Matrix);
  // }

  static getInverseMatrix(matrix) {
    let minorMatrix = [];

    for (let row = 0; row < matrix.length; row++) {
      minorMatrix.push([]);
      for (let col = 0; col < matrix.length; col++)
        minorMatrix[row][col] =
          Math.pow(-1, row + col) *
          this.getDeterminant(this.getMinor(matrix, row, col));
    }
    return this.multiplyByNumber(
      this.transposition(minorMatrix),
      1 / this.getDeterminant(matrix)
    );
  }
  // End of Class
}
// Methods in development:
/* 
Matrix sum and multiplication
*/

// module.exports = Matrix;
export default Matrix