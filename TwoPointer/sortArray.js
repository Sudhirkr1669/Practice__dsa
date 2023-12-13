function twoPointerSort(arr) {
    // let left = 0;
    // let right = arr.length - 1;

    // while (left < right) {
    //     if (arr[left] > arr[right]) {
    //         // Swap elements at left and right pointers
    //         [arr[left], arr[right]] = [arr[right], arr[left]];
    //     }

    //     // Move pointers towards each other
    //     left++;
    //     right--;
    // }
    let i=0;
    let j=arr.length-1;
    while(i<j){
        if(arr[i]>arr[j]){
          let temp=arr[j];
        arr[j]=arr[i];
        arr[i]=temp;
         j--;
      }
      if(arr[i]<arr[j]){
        i++
      }
    }
    
    console.log(arr);
}

// Example usage:
const arrayToSort = [1,2,3,4,5,1,2,3,4,5];
const result=twoPointerSort(arrayToSort);
