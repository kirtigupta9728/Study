// A fancy number is one which when rotated 180 degrees is the same. Given a number, find whether it is fancy or not.
// 180 degree rotations of 6, 9, 1, 0 and 8 are 9, 6, 1, 0 and 8 respectively
// Examples: 
 

// Input:  num =  96
// Output: Yes
// If we rotate given number by 180, we get same number

// Input:  num =  916
// Output: Yes
// If we rotate given number by 180, we get same number

// Input:  num =  996
// Output: No

function isFancyNumber(num) {
    const rotateMap = {
        '0': '0',
        '1': '1',
        '6': '9',
        '8': '8',
        '9': '6'
    };

    const originalStr = num.toString();
    let rotatedStr = '';

    for (let i = originalStr.length - 1; i >= 0; i--) {
        const digit = originalStr[i];
        if (rotateMap[digit] === undefined) {
            return false; // Non-rotatable digit
        }
        console.log('originalStr:', digit);

        rotatedStr += rotateMap[digit];
    }

    console.log('originalStr:', originalStr);
    console.log('rotatedStr:', rotatedStr);
    
    if (originalStr === rotatedStr) {
        return true; // Fancy number when the rotated number is the same as the original
    }
    
    return false;
}

console.log(isFancyNumber(96)); // true
