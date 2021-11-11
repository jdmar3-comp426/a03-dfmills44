import mpg_data from "./data/mpg_data.js";

/*
mpg_data is imported for you but that is for testing purposes only. All of the functions should use
a car_data param that is supplied as the first parameter.

As you write these functions notice how they could possibly be chained together to solve more complicated
queries.
 */

/**
 * @param {array} car_data - an instance of mpg_data that should be used for filtering.
 * @param minHorsepower {number}
 * @param minTorque {number}
 *
 * @return {array} An array of car objects with horsepower >= minHorsePower and torque >= minTorque
 * sorted by horsepower in descending order.
 *
 */
export function searchHighPower(car_data, minHorsepower, minTorque) {
    var len = car_data.length;
    var tempArr = [];
    var tempLoc = 0;
    for (var i = 0; i < len; i++) {
        if (car_data[i].horsepower >= minHorsepower && car_data[i].torque >= minTorque) {
            tempArr[tempLoc] = car_data[i];
            tempLoc++;
        }
    }
    var tempArrLen = tempArr.length;
    var loc = 0;
    var finalArr = [];
    while (tempArrLen != 0) {
        var max = 0;
        var maxInd = -1;
        for (var i = 0; i < tempArrLen; i++) {
            if (max < tempArr[i].horsepower) {
                max = tempArr[i].horsePower;
                maxInd = i;
            }
        }
        finalArr[loc] = tempArr[maxInd];
        tempArr.splice(maxInd, 1);
        tempArrLen--;
        loc++;
    }
    return finalArr;
}


/**
 * @param {array} car_data
 * @param minCity
 * @param minHighway
 *
 *
 * @return {array} An array of car objects with highway_mpg >= minHighway and city_mpg >= minCity
 * sorted by highway_mpg in descending order
 *
 */
export function searchMpg(car_data, minCity, minHighway) {
    var len = car_data.length;
    var tempArr = [];
    var tempLoc = 0;
    for (var i = 0; i < len; i++) {
        if (car_data[i].city_mpg >= minCity && car_data[i].highway_mpg >= minHighway) {
            tempArr[tempLoc] = car_data[i];
            tempLoc++;
        }
    }
    var tempArrLen = tempArr.length;
    var loc = 0;
    var finalArr = [];
    while (tempArrLen != 0) {
        var max = 0;
        var maxInd = -1;
        for (var i = 0; i < tempArrLen; i++) {
            if (max < tempArr[i].highway_mpg) {
                max = tempArr[i].highway_mpg;
                maxInd = i;
            }
        }
        finalArr[loc] = tempArr[maxInd];
        tempArr.splice(maxInd, 1);
        tempArrLen--;
        loc++;
    }
    return finalArr;
}


/**
 * Find all cars where 'id' contains the search term below.
 * Sort the results so that if the term appears earlier in the string
 * it will appear earlier in the list. Make sure searching and sorting ignores case.
 * @param car_data
 * @param searchTerm A string to that is used for searching
 * @returns {[]} array of cars
 */
export function searchName(car_data, searchTerm) {

}


/**
 * Find all cars made in the years asked for.
 * Sort the results by year in descending order.
 *
 * @param car_data
 * @param {number[]} years - array of years to be included in the results e.g. [2010, 2012]
 * @returns {[]} an array of car objects
 */
export function searchByYear(car_data, years) {

}
