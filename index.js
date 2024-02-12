// Problem : 1 

/* function calculateMoney(numOfSalingTickets) {
  // Vairables Declare :
  const ticketsPrice = 120;
  const guarddFee = 500;
  const staffLauchFee = 50;
  const numOfStaff = 8;
  const totalStaffLaunchCost = numOfStaff * staffLauchFee;

  // Expresion
  const totalCost = guarddFee + totalStaffLaunchCost;
  if (numOfSalingTickets <= 0 || isNaN(numOfSalingTickets)) {
    return "Baker Vai Plz Provide Valid Number";
  } else {
    const totalAmount = ticketsPrice * parseInt(numOfSalingTickets);
    const remainAmount = totalAmount - totalCost;
    return remainAmount;
  }
} */

// Problem : 2
/* 
  function checkName(name){
// Vairables Declaretion :
arr = [ 'a', 'y', 'i', 'e', 'o' , 'u' , 'w'];
let isName;
//Logic Build
if(typeof(name) === 'string' && name.length >= 3){
    nameArray = name.toLowerCase().split('');
    lastIndexOfNameArray = nameArray[nameArray.length-1];
    for(i=0; i< arr.length; i++){
        if(arr[i] === lastIndexOfNameArray){
          isName = true;
         break;
        }
       }
    
       if(isName) {
         return `Good Name: ${name}`;
       }else{
        return `Bad Name: ${name}`;
       }
}else{
    return 'invalid';
}
}  

console.log(checkName("rafee"))  */
//Problem : 3 

/*   function deleteInvalids(arr) {
    if(!Array.isArray(arr)){
        return "inavlid Array";
    }
    let newArray = [];
    let j = 0;
    for (let i = 0; i < arr.length; i++) {
        if (!isNaN(arr[i]) && typeof arr[i] === 'number') {
            // newArray[j++] = arr[i]
            newArray.push(arr[i]);
        }
    }

    return newArray;
}
console.log(deleteInvalids({num: [ 1 , 2 , 3 ]})) 
 */

// Problem : 4 

/* function password(obj) {
  
if (!obj || typeof obj !== 'object') {
    return 'invalid';
}

if (!('name' in obj) || !('birthYear' in obj) || !('siteName' in obj)) {
    return 'invalid';
}

if (typeof obj.birthYear !== 'number' || obj.birthYear.toString().split("").length < 4) {
    return 'invalid';
}

    const {name , birthYear, siteName} = obj
    const result = siteName.charAt(0).toUpperCase()+siteName.slice(1)+'#'+name+'@'+birthYear;
    return result;
 
}
 */
 

// Problem : 5 

/*  function monthlySavings(arr, livingCost) {
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
  } 

 */