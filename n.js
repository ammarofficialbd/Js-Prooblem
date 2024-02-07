for (var i = 0; i < 5; i++) {
    setTimeout(function () {
     console.log(i);
  }, 100);
}  



/* function deleteInvalids(arr) {
let count = 0;
for(i=0; i<arr.length; i++){
    for(j=i; j<arr.length-1; j++){
       if(!arr[j] || isNaN(arr[j]) || typeof arr[j] === "Number" || arr[j] === 'null'){
        arr[j] = arr[j+1];
        arr[j+1] = undefined ;
       }
    }
    if(arr[i] === undefined){
        count++;
    }
}
arr.length -= count;
return arr;
}

console.log(deleteInvalids([1 , null, undefined, true, 18, -19, NaN, "12", [1, 2], { ob: "lala" }]))   */


/* function filterNumberValues(arr) {
    return arr.filter(element => typeof element === 'number' && !isNaN(element));
}

let mixedArray = ['1' , {num:2} , NaN ];
var numberArray = filterNumberValues(mixedArray);

console.log(numberArray); */