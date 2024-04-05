

//1.Write a program that takes in an array of numbers and consoles the first four items multiplied by itself  and the last two added by 10. Return the array with the new values

function modifyArray(nums) {
    
  
    for (let i = 0; i < nums.length; i++) {
      if (i < 4) {
      
        nums[i] = nums[i] * nums[i];
      } else if (i >= nums.length - 2) {
       
        nums[i] = nums[i] + 10;
      }
    }
    return nums;
  }
  
  const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  console.log(modifyArray(myArray));
  

 
  
  
 // 2.Write a program that takes in the following array and use a while loop to iterate and break when the item is equal to the fourth index :let arrNum = [1,2,3,4,5,6,7,8,9];
  
  let arrNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let i = 0;
  while (i < arrNum.length) {
    if (arrNum[i] === arrNum[4]) {
      break;
    }
    console.log(arrNum[i]);
    i++;
  }
  
  
//3.Write a function that takes in a an array of strings and use a continue statement when the item is at the second index:  let fruits= ['apple','plum','banana','strawberries','kiwi']
  
  
  function processFruits(fruits) {
    for (let i = 0; i < fruits.length; i++) {
      if (i === 2) continue; 
      console.log(fruits[i]);
    }
  }
  
  let fruits = ['apple', 'plum', 'banana', 'strawberries', 'kiwi'];
  processFruits(fruits);
  
  
//4.Write a function that accepts an array of strings and console.logs each element using a for loop.
  
  function takeStrings(strings) {
    for (let i = 0; i < strings.length; i++) {
      console.log(strings[i]);
    }
  }
  
  let myStrings = ['hi', 'mother', 'you', 'are', 'loved'];
  takeStrings(myStrings);
  
  
 //5.Write a JavaScript function that takes a string as input and reverses it using a while loop. The function should return the reversed string.

  
  function reverseString(str) {
    let reversed = '';
    let index = str.length - 1;
    while (index >= 0) {
      reversed += str[index];
      index--;
    }
    return reversed;
  }
  
  console.log(reverseString("blue")); 