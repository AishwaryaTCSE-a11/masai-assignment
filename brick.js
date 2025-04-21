
//function printBrickWall(H, W) {
  // for (let i = 0; i < H; i++) {
//       let row = '';
//       if (i % 2 === 1) {
//           row += ' ';
//       }
//       for (let j = 0; j < W; j++) {
//           row += '[] ';
//       }
//       console.log(row);
//   }
// }
// printBrickWall(4, 5);

//smallest and minium
// let min = A[0];
// let max = A[0];

// for (let i = 1; i < N; i++) {
//     if (A[i] < min) {
//         min = A[i];
//     }
//     if (A[i] > max) {
//         max = A[i];
//     }
// }

// console.log(min);
// console.log(max);


// average of all
// let sum = 0;

//     for (let i = 0; i < n; i++) {
//         sum += arr[i];
//     }

//     let avg = sum / n;
//     let ceilValue = Math.ceil(avg);

//     console.log(ceilValue);


// single and mixed output

// function checkBasket(N, B) {
//   // Check if all fruits are the same
//   let firstFruit = B[0];
//   let allSame = true;

//   for (let i = 1; i < N; i++) {
//       if (B[i] !== firstFruit) {
//           allSame = false;
//           break;
//       }
//   }

//   // Output based on the check
//   if (allSame) {
//       console.log("Single Type");
//   } else {
//       console.log("Mixed Basket");
//   }
// }





// function reverseOdds(N, A) {
//   // Array to store odd integers
//   let oddNumbers = [];

//   // Traverse through the array and collect odd numbers
//   for (let i = 0; i < N; i++) {
//       if (A[i] % 2 !== 0) {
//           oddNumbers.push(A[i]);
//       }
//   }

//   // Print the number of odd integers
//   console.log(oddNumbers.length);

//   // Print the odd integers in reverse order manually
//   if (oddNumbers.length > 0) {
//       let reversedOdds = [];
//       // Reverse manually by pushing from the last element to the first
//       for (let i = oddNumbers.length - 1; i >= 0; i--) {
//           reversedOdds.push(oddNumbers[i]);
//       }
      
//       // Print reversed odd numbers space-separated
//       let output = '';
//       for (let i = 0; i < reversedOdds.length; i++) {
//           output += reversedOdds[i] + ' ';
//       }
//       console.log(output.trim());
//   } else {
//       console.log('');
//   }
// }



// function reverseEvens(N, A) {
//   let evenNumbers = [];

//   for (let i = 0; i < N; i++) {
//       if (A[i] % 2 === 0) {
//           evenNumbers.push(A[i]);
//       }
//   }

//   console.log(evenNumbers.length);

//   if (evenNumbers.length > 0) {
//       evenNumbers.reverse();
//       console.log(evenNumbers.join(" "));
//   } else {
//       console.log('');
//   }
// }

// abstarct data structure
// primitive data structure
