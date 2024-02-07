/* Problem : 1 */
/*  function calculateMoney (numOfSalingTickets) {
// Vairables Declare :
const ticketsPrice = 120;
const guarddFee = 500;
const staffLauchFee = 50;
const numOfStaff = 8;
const totalStaffLaunchCost = numOfStaff * staffLauchFee;

// Expresion 
const totalCost = guarddFee + totalStaffLaunchCost ; 
if ( numOfSalingTickets <= 0 || isNaN(numOfSalingTickets)){ 
    console.log("Baker Vai Plz Provide Valid Number");
    return;
}else{
    const totalAmount = ticketsPrice * numOfSalingTickets ;
    const remainAmount = totalAmount - totalCost ;
    return remainAmount;
}
}
 */

/* Problem : 2 */
/* 
 function checkName(name){
// Vairables Declaretion :
arr = [ 'a', 'y', 'i', 'e', 'o' , 'u' , 'w'];
nameArray = name.toLowerCase().split('');
lastIndexOfNameArray = nameArray[nameArray.length-1]
let isName;
//Logic Build
if(typeof(name) === 'string' && name.length >= 3){
    for(i=0; i< arr.length; i++){
        if(arr[i] === lastIndexOfNameArray){
          isName = true;
         break;
        }
       }
    
       if(isName) {
        console.log(`Good Name: ${name}`) 
       }else{
        console.log(`Bad Name: ${name}`) 
       }
}else{
    console.log('invalid')
}

return name;
} 

*/




/* Problem : 3 */
/* function deleteInvalids(arr) {
    if(!Array.isArray(arr)){
        console.error("inavlid")
        return [];
    }
    let newArray = [];
    let j = 0;
    for (let i = 0; i < arr.length; i++) {
        if (!isNaN(arr[i]) && typeof arr[i] === 'number') {
            // newArray[j++] = arr[i]
            result.push(arr[i]);
        }
    }

    return newArray;
}
 */



 /* Problem : 4 */
/* function password(obj) {

   if (!obj || typeof obj !== 'object' || !('name' in obj) || !('birthYear' in obj)) {
    return 'invalid';
}else if(obj.birthYear <= 4){
    return 'invalid';
}else{
    const {name , birthYear, siteName} = obj
    const result = siteName.charAt(0).toUpperCase()+siteName.slice(1)+'#'+name+'@'+birthYear;
    return result;
  }
 
}

*/





/* Problem : 5 */
/* 
function monthlySavings(arr,cost){
   let totalIncome = 0;
   
 for(i = 0 ; i<arr.length; i++){
    if(arr[i] >= 3000){
        arr[i] = (arr[i] * 0.2);
    }
    totalIncome = totalIncome + arr[1];
 } 
 const totalSavings = totalIncome - cost;
    return totalSavings;
} 

console.log(monthlySavings([ 1000 , 2000 , 3000 ] , 5400)) */


/* function monthlySavings(arr, livingCost) {
    if(!Array.isArray(arr) && typeof livingCost !== 'number' || isNaN(livingCost)){
        return 'ivalid Input';
    }
    let totalIncome = 0;
  
    let tax= 0;
    const taxPerMoney = 20 / 100 ; 
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] >= 3000) {
        tax += arr[i] * taxPerMoney;
      }
      totalIncome += arr[i];
    }
  
    let totalSavings = totalIncome - livingCost - tax;

    if (totalIncome < livingCost) {
        return "earn more";
      }

    return totalSavings;
  } */

