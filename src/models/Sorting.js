class Sorting {

    static insertion(arr) {
        let item, j
        for (let i = 1; i < arr.length; i++) {
            item = arr[i]
            j = i - 1
            while (j >= 0 && arr[j] > item) {
                arr[j + 1] = arr[j]
                j -= 1
            }
            arr[j + 1] = item
        }
        return arr
    }

    static insertionBinary(arr) {
        let x, left, right
        let middle
        for (let i = 1; i < arr.length; i++) {
            x = arr[i], left = 0, right = i - 1
            while (left <= right)
            {
                middle = Math.trunc((left + right) / 2)
                if (x < arr[middle])
                    right = middle - 1
                else
                    left = middle + 1
            }
            for (let j = i - 1; j > left - 1; j--)
                arr[j + 1] = arr[j]
            arr[left] = x
        }
        return arr
    }

    static insertionDual(arr) {
        let item1, item2, j, last
        for (let i = 0; i < arr.length-1; i+=2) {
            item1 = arr[i]
            item2 = arr[i + 1]
            if (item1 > item2) {
                item1 = arr[i + 1]
                item2 = arr[i]
            }
            j = i - 1
            while (arr[j] > item2) {
                arr[j + 2] = arr[j]
                j -= 1
            }
            arr[j + 2] = item2
            while (j >= 0 && arr[j] > item1) {
                arr[j + 1] = arr[j]
                j -= 1
            }
            arr[j + 1] = item1
        }
        j = arr.length - 2
        last = arr[arr.length - 1]
        if (arr.length % 2 != 0) {
            while (j >= 0 && arr[j] > last) {
                arr[j + 1] = arr[j]
                j -= 1
            }
            arr[j + 1] = last
        }
        return arr
    }


// Конец класса
}

export default Sorting