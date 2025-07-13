// Without Filter Function.

const arr = [1,2,3,4,5]  // Output : [2,4] (print even number)
const arr2 = []

for(let i = 0; i < arr.length; i++){
    if (arr[i] % 2 == 0){
        arr2.push(arr[i])
    }
}

console.log(arr2);

// WIth Filter Function.

const array = [1,2,3,4,5]

function logic(n){
    if(n % 2 == 0){
        return true;
    } else {
        return false;
    }
}

const result = array.filter(logic)
console.log(result)