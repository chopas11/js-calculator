const Sorting = require('../src/models/Sorting')

let arr = [9, 1, 28, 6, 14, 32, 11]


test('should return array, sorted by insertionSort', () => {
    expect(Sorting.insertion(arr)).toEqual([1, 6, 9, 11, 14, 28, 32])
})

test('should return array, sorted by insertionBinarySort', () => {
    expect(Sorting.insertionBinary(arr)).toEqual([1, 6, 9, 11, 14, 28, 32])
})