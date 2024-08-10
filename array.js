const array = [2,4,6,8,10,12,14,16];
const specificvalue = 2;
let count =0;
for (let i=0;i<array.length;i++){
    if (array [i]% specificvalue === 0){
        count ++;
    }
}

console.log('the number of elements in the array that are multiples of ${specificValue}is: ${count}');
