var arr = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];
function flattenArray(arr) {
    var result = [];
    
    arr.forEach(function(element) {
      if (Array.isArray(element)) {
        result = result.concat(flattenArray(element));
      } else {
        result.push(element);
      }
    });
    
    return result;
  }
  
  var flatArray = flattenArray(arr);
  
  console.log(flatArray);