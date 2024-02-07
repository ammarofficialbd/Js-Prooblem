/* Function 1 is more than efficient than other function */
function FindLargeWord(str){ 
    const arr = str.split(' ')
    let x = arr[0]; //Dhore nisi Array er moddhe First Element ta boro
    for(i = 0 ; i < arr.length; i++){
        if(x.length < arr[i].length){
            x = arr[i];
        }
    }
       return x                                                                                                                                                                                                                                                                                                                                  
}

largestWord = FindLargeWord('Peach Be Upon You');
console.log(largestWord)
let t1 = performance.now();
console.log('time 1: ', t1)

/* Funtion 2 */
function findLongText(str){
    let arr = str.split(' ')
    let value = []
    for(i = 0 ; i<arr.length; i++){
           let x = arr[i].length;
           value.push(x)
      }
    
    let x = Math.max(...value)
    let position = value.indexOf(x);
    return `The Largest word is ${arr[position]}` 
}

largestWord = findLongText('Peach Be Upon You');
console.log(largestWord)

let t2 = performance.now();
console.log('time 2:',t2)

/* Function 3 */
function findLargestWord2(str) {
    let arr = str.split(' ');
  return arr.reduce((largestWord, currentWord) =>
    currentWord.length > largestWord.length ? currentWord : largestWord
  );
}

largestWord = findLargestWord2('Peach Be Upon You');
console.log(largestWord)

let t3 = performance.now();
console.log('time 3:',t3)