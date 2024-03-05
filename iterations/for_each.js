const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach( function (val){
    // console.log(val); // js ruby java python cpp
}) // for each wants callback function so remove the name of function

//forEach function using arrow function

coding.forEach((item) => {
    // console.log(item);// js ruby java python cpp
})

function hello(item){
    // console.log(item);
}

coding.forEach(hello) // // js ruby java python cpp

coding.forEach( (item, index, arr)=> {
    // console.log(item, index, arr);
} )
/* js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ] */

const subject = [
    {
        sub: "eng",
        marks: 88
    },
    {
        sub: "history",
        marks: 98
    },
    {
        sub: "math",
        marks: 68
    }

]

subject.forEach((val) => {
    console.log(val.sub);
    console.log(val.marks);
})
/* eng
88
history
98
math
68 */