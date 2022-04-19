import React, { useState } from "react";
const JavaScript = () => {
    // palindrome using string
    const str="madam"
    const reverse =str.split("").reverse().join("");
    console.log("pelindrome>>>>", reverse===str)

    // palindrome checking using array

    let palindromeArray = (arr) => {
        let isPalindrome = true;   
        for(let i = 0; i < arr.length / 2; i++) {
            if(arr[i] !== arr[arr.length - i - 1]){
              isPalindrome = false; 
              break;
            }
        }  
        return isPalindrome ;
     }
     let variable = 121
     console.log(palindromeArray(variable.toString()))
// prime number
   function checkPrime(number) {
    if (number <= 1) {
      return false;
    } else {
      for (let i = 2; i < number; i++) {
        if (number % i == 0) {
          return false;
        }
      }
      return true;
    }
  }
  console.log("prime number", checkPrime(8))
    //   const [number, setNumber] = useState("");
//   const [arr, setArr] = useState([]);
//   const onChange = (e) => {
//     setNumber((e.target.name =(e.target.value)));
   
//   };
//   const CheckPalindrome = () => {
//     setArr((el) => [...el, number]);
//     let NewArr = arr.split("");
//     console.log("newArr>>>",(NewArr));
//   };
//   console.log(arr)
  return (
    <div>

      {/* <label className="">Enter a Number</label>
      <br />
      <input type="number" value={number} name={number} onChange={onChange} />
      <br />
      <button className="btn btn-primary" onClick={CheckPalindrome}>
        check
      </button> */}
    </div>
  );
};
export default JavaScript;
