// Without Map Function

const input = [1,2,3,4,5]  // output : [2,4,6,8,10]
const arr = []

for(let i = 0; i < input.length; i++){
    arr.push(input[i] * 2)
}

console.log(arr)

// With Map Function

const input1 = [1,2,3,4,5] // Output : [1,2,3,4,5]

function transform(n){
    return n * 2;
}

const ans = input1.map(transform)
console.log(ans)

