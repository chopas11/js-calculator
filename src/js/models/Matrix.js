export default class Matrix {
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

  addRow(row) {
    if (this.rows == 0) this.columns = row.length;
    row.length = this.columns;
    // Еще нужно дописать изменение empty на ноль в случае недостающей длины
    this.body.push(row);
    this.rows++;
  }

  removeRow(rowPosition) {
    for (let i = rowPosition; i < this.rows - 1; i++)
      this.body[i] = this.body[i + 1];
    this.body.pop();
    if (this.rows == 1) this.columns = 0;
    this.rows--;
  }

  addColumn(column) {
    let range = (this.rows == 0) ? column.length : this.rows;
    // Еще нужно дописать изменение empty на ноль в случае недостающей длины
    for (let i = 0; i < range; i++) {
      if (this.rows == 0) this.body[i] = [];
      this.body[i][this.columns] = column[i];
    }
    if (this.rows == 0) this.rows = column.length;
    this.columns++;
  }

  removeColumn(columnPosition) {
    // col - Столбец, row - строка
    for (let col = columnPosition; col < this.columns; col++) {
      for (let row = 0; row < this.rows; row++)
        (col != this.columns - 1) ? this.body[row][col] = this.body[row][col+1] : this.body[row].pop();
    }
    if (this.columns == 1) {
      this.rows = 0;
      this.body = [];
    }
    this.columns--;
  }

  multiplyByNumber(number) {
    for (let i = 0; i < this.rows; i++)
      this.body[i] = this.body[i].map((element) => element * number);
  }

  get rank() {
    return Math.min(this.rows, this.columns);
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

  get isSquare() {
    return (this.rows == this.columns) ? true : false;

  }

  static getMinor(matrix, pos) {
    let rows = matrix.length;
    let columns = matrix[0].length;
    let minor = [];
    Object.assign(minor, matrix)
    minor.shift();
    for (let col = pos; col < columns; col++) {
      for (let row = 0; row < rows-1; row++)
        (col != rows - 1) ? minor[row][col] = minor[row][col+1] : minor[row].pop();
    }
    return matrix;
  }

  static determinant(matrix) {
    if(matrix.length == 2) {
      return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
    }
    let det = 0;
    let rows = matrix.length;
    let columns = matrix[0].length;

    for (let i = 0; i < rows; i++) {
      det += matrix[0][i] * Math.pow(-1, i) * this.determinant([[1, 5], [4, 0]]);
      // console.log(this.getMinor(matrix, i))
    }

    return det;

  }

  static wer(matrix) {
    let buffer = [];
    for (let i = 0; i < 1; i++) {
      buffer.push(this.getMinor(matrix, i));
    }
    return matrix;
  }

  toString() {
    return JSON.stringify({
      body: this.body,
      rows: this.rows,
    });
  }
}

// Необходимые методы:
/* 

+Добавление/Удаление строк
+Добавление/Удаление столбцов
+Умножение матрицы на число
+Транспонирование матрицы(Переворачиваем строки и столбцы)
+Вычислениие ранга матрицы
+Проверка на квадратичность матрицы (Сравнение колва строк и столбцов)
Поиск детерминанта через разложение по первой строке
Взятие Главных и побочных диагоналей матрицы
Взятие Строки или столбца с определенным номером
Вычисление обратной матрицы
Поиск ФСР


Сложение/Вычитание матриц
Умножение матриц



*/
