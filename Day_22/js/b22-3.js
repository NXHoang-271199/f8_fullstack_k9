var arr = [["a", 1, true], ["b", 2, false]];

function separateByType(arr) {
  var stringArray = [];
  var numberArray = [];
  var booleanArray = [];

  arr.forEach(subArray => {
    subArray.forEach(element => {
      if (typeof element === "string") {
        stringArray.push(element);
      } else if (typeof element === "number") {
        numberArray.push(element);
      } else if (typeof element === "boolean") {
        booleanArray.push(element);
      }
    });
  });

  return [stringArray, numberArray, booleanArray];
}

var result = separateByType(arr);

console.log(result);
