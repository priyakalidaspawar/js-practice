const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = nums.map((val) => val + 10)
// const newNums = nums.map((val) => {return val + 10})

// map chaining
const newNums = nums
        .map((val) => val * 10) // 10...100
        .map((val) => val + 1) // 11... 101
        .filter((val) => val > 50) // 51... 101
        
console.log(newNums);

