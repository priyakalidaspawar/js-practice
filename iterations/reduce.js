const nums = [1, 2, 3]

// const total = nums.reduce(function(accl,curr_val ) {
//     console.log(`accl: ${accl} and currVal: ${curr_val}`);
//     return accl + curr_val
// }, 0 )

const total = nums.reduce((accl,curr_val) => accl+curr_val, 0) // 6

// console.log(total);// 6

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const total_Price = shoppingCart.reduce((accl, item) => accl + item.price, 0 )
console.log(total_Price);