//* Given two prime numbers m,n   if both numbers are prime print true else print false;





function checkPrimeNumbers(a,b){


    const checkPrime = (s)=>{
         if(s<=1){
            return false;
         }else{
           let count=0;
            for(let i=2; i<=s; i++){
                if(a%i==0){
                    count++;
                }
            }
            if(count<2){
                return true;

            }else {
                return false;
            }
         }
    }


  let numberA= checkPrime(a)
  let numberB=checkPrime(b)
  
  if(numberA==true && numberB==true){
    return true;
  }else{
    return false;
  }
    


}



//* testcases
let result1=checkPrimeNumbers(2,3) // output will be true
let result2 = checkPrimeNumbers(11,13) // output will be true
let result3 = checkPrimeNumbers(4,4)// output will be false;


console.log(result1, result2, result3)
