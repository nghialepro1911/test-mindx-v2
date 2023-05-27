function findMaxProduct(arr) {
    let maxProduct = arr[0] * arr[1];
    for (let i = 1; i < arr.length - 1; i++) {
        let product = arr[i] * arr[i+1];
        if (product > maxProduct) {
            maxProduct = product;
        }
    }
    return maxProduct;
}

// Ví dụ sử dụng hàm
let numbers =[2, 3, -5, -2, 4];
let maxProduct = findMaxProduct(numbers);
console.log(maxProduct); 
