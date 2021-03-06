/**
 *
 * @param {number} a
 * @param {number} b
 * @returns {string} 'a + b = (a + b)'
 *
 * example: sumToString(3, 4)
 * returns: '3 + 4 = 7'
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
 */
export function sumToString(a, b) {
    var sum = a + b;
    return a + ' + ' + b + ' = ' + sum;
}


/**
 *
 * @param {number} startNumber
 * @param {number} endNumber
 * @returns {number[]}
 *
 * example: getIncreasingArray(3, 7)
 * returns: [ 3, 4, 5, 6, 7 ]
 *
 */
export function getIncreasingArray(startNumber, endNumber) {
    var arr = [];
    var arrSize = endNumber - startNumber + 1;
    for (var i = 0; i < arrSize; i++) {
        arr[i] = startNumber;
        startNumber++;
    }
    return arr;
}

/**
 *
 * @param {number[]} numbers
 * @return {{min: number, max: number}}
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
 * and https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
 */
export function maxAndMin(numbers) {
    const data = {
        max: 0,
        min: 0
    }
    var len = numbers.length;
    if (len == 0) {
        return "Error: Empty Array";
    }
    var minNum = numbers[0];
    for (var i = 1; i < len; i++) {
        if (numbers[i] < minNum) {
            minNum = numbers[i];
        }
    }
    var maxNum = numbers[0];
    for (var i = 1; i < len; i++) {
        if (numbers[i] > maxNum) {
            maxNum = numbers[i];
        }
    }
    data.min = parseInt(minNum);
    data.max = parseInt(maxNum);
    return data;
}

/**
 *
 * @param array - An array of any primitive type
 * @returns {object} Object where the keys are the values that were passed in
 * and the value was the number of times it occurred.
 *
 * example: countArray([3, 6, 3, 2, 2, 3, 'some', 'hello', 'some', [1, 2]])
 * returns: {'2': 2, '3': 3, '6': 1, some: 2, hello: 1, '1,2': 1}
 *
 */
export function countArray(array) {
    var data = {

    };
    while (array.length != 0) {
        var key = array[0];
        var val = 1;
        for (var i = 1; i < array.length; i++) {
            if (array[i] === key) {
                val++;
            }
        }
        for (var j = 0; j < val; j++) {
            var ind = array.indexOf(key);
            array.splice(ind, 1);
        }
        data[key] = val;
    }
    return data;
}

