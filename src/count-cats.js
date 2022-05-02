const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(arrCat) {
  let count = 0;
  return coutCatsInArr(arrCat, count);
}
function coutCatsInArr(arrCat, count){
  for(let item of arrCat){
    if(Array.isArray(item))
      count = coutCatsInArr(item, count);
    else if(item === '^^')
      count++;
  }
  return count;
}
module.exports = {
  countCats
};
