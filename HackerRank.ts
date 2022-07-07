let arr = [1,2,3,4,5]
let testArr:number[] = [];


function miniMaxSum(test:number[]){
    let newArr:number[] = [];
    for(let i=0; i<test.length; i++){
        newArr = [...test]
        newArr.splice(i,1)
        // console.log(newArr)
        testArr.push(newArr.reduce((prev, next) => prev + next));
        // console.log(`${newArr} : `,sum)
        // testArr.push()
    }
    console.log(Math.min(...testArr), Math.max(...testArr))
}

miniMaxSum(arr)
