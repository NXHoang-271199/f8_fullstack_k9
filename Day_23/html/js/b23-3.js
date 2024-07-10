var arr = [3,4,-1,1]

function findMissingPositiveNumber(nums) {
    var filterNum = nums.filter(function (num) {
        return num > 0;
    });

    var positiveNum = filterNum.reduce(function (prev, current) {
        if (!prev.includes(current)) {
            prev.push(current);
        }
        return prev;
    }, []);

    // return positiveNum;

    var missing = 1;
    if (positiveNum.includes(missing)) {
        missing++;
    }
    return missing;
}
console.log(findMissingPositiveNumber(arr));