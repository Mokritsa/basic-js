const { NotImplementedError } = require('../extensions/index.js');
class DepthCalculator {
  calculateDepth(arr) {
    let count = 1;
    let maxCount = 1;
    let itog = coutDepth(arr, count, maxCount);
    count = itog[0];
    maxCount = itog[1];
    console.log(maxCount);
    return maxCount;
  }
}
function coutDepth(arr, count, maxCount){
  console.log(arr, count, maxCount);
  for(let item of arr){
    //console.log('item = ', item, count);
    if(Array.isArray(item)){
      count++;
      //console.log('item = ', item, count);
      //console.log('count = ', count);
      if(maxCount < count){
        maxCount = count;
      }
      let itog = coutDepth(item, count, maxCount);
      count = itog[0];
      maxCount = itog[1];
    }
    
  }
  count--;
  return [count, maxCount];
}

module.exports = {
  DepthCalculator
};
