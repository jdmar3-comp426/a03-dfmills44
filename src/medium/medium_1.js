import {variance} from "./data/stats_helpers.js";

/**
 * Gets the sum of an array of numbers.
 * @param array
 * @returns {*}
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 * prototype functions. Very useful
 */
export function getSum(array) {
    var len = array.length;
    var sum = 0;
    for (var i = 0; i < len; i++) {
        sum = sum + array[i];
    }
    return sum;
}


/**
 * Calculates the median of an array of numbers.
 * @param {number[]} array
 * @returns {number|*}
 *
 * example:
 * let array = [3,2,5,6,2,7,4,2,7,5];
 * console.log(getMedian(array)); // 4.5
 */
export function getMedian(array) {
    var len = array.length;
    if (len % 2 == 1) {
        var iter = (len - 1) / 2;
        for (var i = 0; i < iter; i++) {
            var min = array[0];
            var curLen = array.length;
            for (var j = 1; j < curLen; j++) {
                if (array[j] < min) {
                    min = array[j];
                }
            }
            var max = array[0];
            for (var k = 1; k < curLen; k++) {
                if (array[k] > max) {
                    max = array[k];
                }
            }
            var minIndex = array.indexOf(min);
            var maxIndex = array.indexOf(max);
            array.splice(minIndex, 1);
            if (maxIndex > minIndex){
                array.splice(maxIndex - 1, 1);
            } else {
                array.splice(maxIndex, 1);
            }
        }
        return array[0];
    } else {
        var iter = (len / 2) - 1;
        for (var i = 0; i < iter; i++) {
            var min = array[0];
            var curLen = array.length;
            for (var j = 1; j < curLen; j++) {
                if (array[j] < min) {
                    min = array[j];
                }
            }
            var max = array[0];
            for (var k = 1; k < curLen; k++) {
                if (array[k] > max) {
                    max = array[k];
                }
            }
            var minIndex = array.indexOf(min);
            var maxIndex = array.indexOf(max);
            array.splice(minIndex, 1);
            if (maxIndex > minIndex){
                array.splice(maxIndex - 1, 1);
            } else {
                array.splice(maxIndex, 1);
            }
        }
        return (array[0] + array[1]) / 2;
    }
}

/**
 * Calculates statistics (see below) on an array of numbers.
 * Look at the stats_helper.js file. It does variance which is used to calculate std deviation.
 * @param {number[]} array
 * @returns {{min: *, median: *, max: *, variance: *, mean: *, length: *, sum: *, standard_deviation: *}}
 *
 * example:
 * getStatistics([3,2,4,5,5,5,2,6,7])
 * {
  length: 9,
  sum: 39,
  mean: 4.333333333333333,
  median: 5,
  min: 2,
  max: 7,
  variance: 2.6666666666666665,
  standard_deviation: 1.632993161855452
 }
 */
export function getStatistics(array) {
    var data = {
        length: 0,
        sum: 0,
        mean: 0,
        median: 0,
        min: 0,
        max: 0,
        variance: 0,
        standard_deviation: 0
    }
    data.length = array.length;
    data.sum = getSum(array);
    data.mean = data.sum / data.length;
    var min = array[0];
    for (var i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }
    data.min = min;
    var max = array[0];
    for (var j = 0; j < array.length; j++) {
        if (array[j] > max) {
            max = array[j];
        }
    }
    data.max = max;
    var variance = 0;
    for (var k = 0; k < array.length; k++) {
        var add = (array[k] - data.mean)
        console.log(add);
        variance += (add * add);
    }
    console.log(variance);
    data.variance = variance / array.length;
    data.standard_deviation = Math.sqrt(data.variance);
    data.median = getMedian(array);
    return data;
}
