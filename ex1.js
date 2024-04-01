
function transformArray(array) {
    const transformedArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 10) {
            transformedArray.push(array[i] * 2);
        } else {
            transformedArray.push(array[i] * 4);
        }
    }
    return transformedArray;
}

const array = [1, 5, 10, 11, 20, 34];
console.log(transformArray(array)); 
