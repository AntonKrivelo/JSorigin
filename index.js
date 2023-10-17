// console.log('abc');

// //задачи на циклы 1
// // Место для первой задачи
// function firstTask() {
//     for (let i = 5; i <= 10; i++) {
//         console.log(i);
//     }
// }
// console.log(firstTask());

// // задача 2
// function secondTask() {
//     for (let i = 20; i >= 10; i--) {
//          if (i === 13) return;
//          console.log(i);
      
//      }
//  }
 
//  // Место для третьей задачи
//  function thirdTask() {
//      for (let i = 2; i <= 10; i++) {
//          if (i % 2 === 0) {
//              console.log(i);
//          }
//      }
//  }
 

//массивы и псевдомассивы 
 const arr = [7, 1, 5, 6, 8];
//псевдомассивы
// они без методов 



//  arr.sort(compareNum);      //  выведет в порядке возрастания

//  console.log(arr);
// function compareNum(a, b) { // сортировка 
//     return a - b;
// }


//  arr.pop();  //удаляет последний элемент массива
//  arr.push(10); // добавляет в конец элемент

//  console.log(arr);

// for(let i = 0; i < arr.length; i++) {  // перебор массива через цикл
//     console.log(arr[i]);
// }

// for (let value of arr) {        // через метод for of перебор массива
//     console.log(value)
// }

// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// }) ;          //перебор элементов через этот метод внутри массива
// // //выведет  0: 1 внутри массива 1,2,3,6,8

// const str = prompt("", "");
// const products = str.split(", ");  // сформировываем массив на основании строк
// products.sort(); // сортирует элементы по алфавиту
//                 // 
// console.log(products.join('; ')); // выведет элементы через точку с запятой
