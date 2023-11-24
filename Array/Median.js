class median {
     
    findMedian(num1, num2) {
        let sum1 = 0;
        let length1 = 0;
        let array1 = num1.concat(num2);
        console.log(array1)

        for (let num of array1) {
            sum1 += num;
        }
        console.log(sum1);
        console.log(length1 = array1.length)
        const result = sum1 / length1; //the median of the two arrays.
        console.log(result)
    }
};
const num1 = [1, 2, 3];
const num2 = [2, 5, 3]
const result = new median();
const result1 = result.findMedian(num1, num2);