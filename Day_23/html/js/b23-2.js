nums1 = [1, 3], nums2 = [2,7]

function findMiddlePosition(nums1, nums2) { 
   let newArr = nums1.concat(nums2)

    newArr.sort(function (a, b) {
        return a - b;
    });
    
    let position = newArr.length;
    let mid = position / 2;
    
    if (position % 2 === 0) {
        return (newArr[mid - 1] + newArr[mid]) / 2;
    } else {
        return newArr[mid - 0.5];
    }
    
}

console.log(findMiddlePosition(nums1, nums2));
