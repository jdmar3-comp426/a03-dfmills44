import {allCarStats} from './src/medium/medium_2.js'
import {moreStats} from './src/medium/medium_2.js'
import mpg_data from './src/medium/data/mpg_data.js'
import {searchHighPower} from './src/medium/medium_3.js'

console.log(allCarStats.avgMpg);
console.log(allCarStats.allYearStats);
console.log(allCarStats.ratioHybrids);

console.log(moreStats.makerHybrids);
console.log(moreStats.avgMpgByYearAndHybrid);

console.log(searchHighPower(mpg_data, 300, 200));