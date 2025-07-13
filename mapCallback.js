// create a map function that takes 2 inputs an array , and a transformation callback/fn  amd transforms the array into a new one using the transformation fn.

function customMap(array, transformFn){
    const result = [];

    for(let i=0; i<number.length; i++){
        result.push(transformFn(number[i], i, array));
    }

    return result;
}

const number = [1,2,3,4,5]  // Output : [2,4,6,8,10]

const double = (i) => {
    return i*2;
}


const ans = customMap(number,double)
console.log(ans)