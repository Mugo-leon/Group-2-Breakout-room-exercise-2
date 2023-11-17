function solution(A) {
    let mapObject={}
    for(let i=0;i<A.length;i++){
       if(mapObject[A[i]])
       {
         delete mapObject[A[i]]
       }else{
         mapObject[A[i]]=A[i];
       }
     }
   return Object.values(mapObject)[0];
  }
// Example usage:
const A = [9, 3, 9, 3, 9, 6, 9];
console.log(solution(A)); // Output: 7