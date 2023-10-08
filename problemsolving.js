// function FindIndex(arr , num){
//    for(let i=0; i<arr.length;i++){
//     if (arr[i] === num) {
//         return i;
//          }}
// return -1; 
// console.log(numbertofind +" "+this.index);   
// }

// const rafat =[1,2,3,4,5,6];
// const numbertofind= 3;
// const inde =FindIndex(rafat,numbertofind);
// console.log(numbertofind +" "+inde );
function findIndexInArray(arr, num) { //Q1
    const index = arr.indexOf(num);

    if (index === -1) {
        return -1;
    } else {
        return index;
    }
}

const myArray = [1, 2, 3, 4, 5];
const numberToFind = 3;
const index = findIndexInArray(myArray, numberToFind);
console.log(`Index of ${numberToFind} is ${index}`);

