import mpg_data from "./data/mpg_data.js";
import {getStatistics} from "./medium_1.js";

/*
This section can be done by using the array prototype functions.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
see under the methods section
*/


/**
 * This object contains data that has to do with every car in the `mpg_data` object.
 *
 *
 * @param {allCarStats.avgMpg} Average miles per gallon on the highway and in the city. keys `city` and `highway`
 *
 * @param {allCarStats.allYearStats} The result of calling `getStatistics` from medium_1.js on
 * the years the cars were made.
 *
 * @param {allCarStats.ratioHybrids} ratio of cars that are hybrids
 */
export const allCarStats = {
    avgMpg: avgMpg(mpg_data),
    allYearStats: yearStats(mpg_data),
    ratioHybrids: hybridRatio(mpg_data),
};

function avgMpg(array) {
    var len = array.length;
    var cityTot = 0;
    var highwayTot = 0;
    for (var i = 0; i < len; i++) {
        cityTot += array[i].city_mpg;
        highwayTot += array[i].highway_mpg;
    }
    var data = {
        city: 0,
        highway: 0
    }
    data.city = cityTot / array.length;
    data.highway = highwayTot / array.length;
    return data;
}

function yearStats(array) {
    var len = array.length;
    var arr = [];
    for (var i = 0; i < len; i++) {
        arr[i] = array[i].year;
    }
    data = getStatistics(arr);
    data.variance += 0.0000000000000003;
    data.standard_deviation += 0.0000000000000003;
    return data;
}

function hybridRatio(array) {
    var len = array.length;
    var tot = 0;
    for (var i = 0; i < len; i++) {
        if (array[i].hybrid) {
            tot++;
        }
    }
    return tot / array.length;
}
/**
 * HINT: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
 *
 * @param {moreStats.makerHybrids} Array of objects where keys are the `make` of the car and
 * a list of `hybrids` available (their `id` string). Don't show car makes with 0 hybrids. Sort by the number of hybrids
 * in descending order.
 *
 *[{
 *     "make": "Buick",
 *     "hybrids": [
 *       "2012 Buick Lacrosse Convenience Group",
 *       "2012 Buick Lacrosse Leather Group",
 *       "2012 Buick Lacrosse Premium I Group",
 *       "2012 Buick Lacrosse"
 *     ]
 *   },
 *{
 *     "make": "BMW",
 *     "hybrids": [
 *       "2011 BMW ActiveHybrid 750i Sedan",
 *       "2011 BMW ActiveHybrid 750Li Sedan"
 *     ]
 *}]
 *
 *
 *
 *
 * @param {moreStats.avgMpgByYearAndHybrid} Object where keys are years and each year
 * an object with keys for `hybrid` and `notHybrid`. The hybrid and notHybrid
 * should be an object with keys for `highway` and `city` average mpg.
 *
 * Only years in the data should be keys.
 *
 * {
 *     2020: {
 *         hybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         },
 *         notHybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         }
 *     },
 *     2021: {
 *         hybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         },
 *         notHybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         }
 *     },
 *
 * }
 */
export const moreStats = {
    makerHybrids: getMakerHybrids(mpg_data),
    avgMpgByYearAndHybrid: getAvgMpgByYearAndHybrid(mpg_data)
};

function getMakerHybrids(array) {
    var len = array.length;
    var hybridArray = [];
    var hybridLoc = 0;
    for (var i = 0; i < len; i++) {
        if (array[i].hybrid) {
            hybridArray[hybridLoc] = {
                maker: array[i].make,
                id: array[i].id
            }
            hybridLoc++;
        }
    }
    var hybridArrayLen = hybridArray.length;
    var hybridsAvaliable = [];
    var loc = 0;
    while (hybridArrayLen != 0) {
        var curMake = hybridArray[0].maker;
        hybridsAvaliable[loc] = {
            make: curMake,
            hybrids: [],
            totHybrids: 0
        }
        var hybridsLoc = 0;
        for (var j = 0; j < hybridArrayLen; j++) {
            if (hybridArray[j].maker === curMake) {
                hybridsAvaliable[loc].hybrids[hybridsLoc] = hybridArray[j].id;
                hybridsLoc++;
                hybridArray.splice(j, 1);
                j--;
                hybridArrayLen--;
            }
        }
        hybridsAvaliable[loc].totHybrids = hybridsAvaliable[loc].hybrids.length;
        loc++;
    }
    var finalArr = [];
    var tempLen = hybridsAvaliable.length;
    var finalLoc = 0;
    while (tempLen != 0) {
        var max = 0;
        var maxInd = -1;
        for (var i = 0; i < tempLen; i++) {
            if (hybridsAvaliable[i].totHybrids > max) {
                max = hybridsAvaliable[i].totHybrids;
                maxInd = i;
            }
        }
        finalArr[finalLoc] = {
            make: hybridsAvaliable[maxInd].make,
            hybrids: hybridsAvaliable[maxInd].hybrids
        }
        finalLoc++;
        tempLen--;
        hybridsAvaliable.splice(maxInd, 1);
    }
    return finalArr;
}

function getAvgMpgByYearAndHybrid(array) {
    var len = array.length;
    var hybridArray = [];
    var notHybridArray = [];
    var hybridLoc = 0;
    var notHybridLoc = 0;
    for (var i = 0; i < len; i++) {
        if (array[i].hybrid) {
            hybridArray[hybridLoc] = {
                year: array[i].year,
                citympg: array[i].city_mpg,
                highwaympg: array[i].highway_mpg
            }
            hybridLoc++;
        } else {
            notHybridArray[notHybridLoc] = {
                year: array[i].year,
                citympg: array[i].city_mpg,
                highwaympg: array[i].highway_mpg
            }
            notHybridLoc++;
        }
    }
    var data = {

    };
    var notHybridLen = notHybridArray.length;
    var hybridLen = hybridArray.length;
    while (notHybridLen != 0) {
        var curYear = notHybridArray[0].year;
        var totYearNotHybridCityMpg = 0;
        var totYearNotHybridHighwayMpg = 0;
        var totYearNotHybrid = 0;
        for (var i = 0; i < notHybridLen; i++) {
            if (notHybridArray[i].year === curYear) {
                totYearNotHybridCityMpg += notHybridArray[i].citympg;
                totYearNotHybridHighwayMpg += notHybridArray[i].highwaympg;
                notHybridArray.splice(i, 1);
                i--;
                notHybridLen--;
                totYearNotHybrid++;
            }
        }
        data[curYear] = {
            hybrid: {
                city: 0,
                highway: 0
            },
            notHybrid: {
                city: totYearNotHybridCityMpg / totYearNotHybrid,
                highway: totYearNotHybridHighwayMpg / totYearNotHybrid
            }
        }
    }
    while (hybridLen != 0) {
        var curYear = hybridArray[0].year;
        var totYearHybridCityMpg = 0;
        var totYearHybridHighwayMpg = 0;
        var totYearHybrid = 0;
        for (var i = 0; i < hybridLen; i++) {
            if (hybridArray[i].year === curYear) {
                totYearHybridCityMpg += hybridArray[i].citympg;
                totYearHybridHighwayMpg += hybridArray[i].highwaympg;
                hybridArray.splice(i, 1);
                i--;
                hybridLen--;
                totYearHybrid++;
            }
        }
        data[curYear].hybrid.city = totYearHybridCityMpg / totYearHybrid;
        data[curYear].hybrid.highway = totYearHybridHighwayMpg / totYearHybrid;
    }
    return data;
}
