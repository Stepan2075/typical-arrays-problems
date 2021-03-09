
exports.min = function min (array) {
  if (array === undefined || array === null || array.length <= 0) {return 0;}
else {return Math.min.apply(null, array);}
}

exports.max = function max (array) {
  if (array === undefined || array === null || array.length <= 0) {return 0;}
else {return Math.max.apply(null, array);}
}

exports.avg = function avg (array) {
  if (array === undefined || array === null || array.length <= 0) {return 0;}
  else {
    let result = 0;
    for (let i = 0; i < array.length; i++) {
    result += array[i]; 
  }
  return result/array.length;
}
}
