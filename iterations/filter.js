// const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach((item) => {
//     console.log(item);// js ruby java python cpp
// })

// const value = coding.forEach((item) => {
//     // console.log(item);// js ruby java python cpp
//     return item
// })

// console.log(value); // undefined .. forEach doesnt return any value

//Filter

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums= nums.filter((val) => val> 5 ) // filter(callback_function() => condition
// console.log(newNums); // [ 6, 7, 8, 9, 10 ]
// const newNums = nums.filter((val) => {
//     return val > 5

// })
// console.log(newNums);// [] after using return val > 5 o/p = [ 6, 7, 8, 9, 10 ]

// using forEach
// const newNums = []
// nums.forEach((item) => {
//     if (item > 5) {
//         newNums.push(item)
//     }
// })

// console.log(newNums)

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userbooks = books.filter((bk) => bk.genre === 'History')

  userbooks = books.filter((bk) => {return bk.publish >= 1995})
  userbooks = books.filter((bk) => {return bk.publish >= 1995 && bk.genre === 'History'})


  console.log(userbooks);