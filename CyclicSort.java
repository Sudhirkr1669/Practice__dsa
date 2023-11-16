public class CyclicSort {
    public static void main(String[] args) {
        int[] array = {3, 5, 2, 1, 4};
        cyclicSort(array);

        // Print the sorted array
        for (int num : array) {
            System.out.print(num + " ");
        }
    }

    public static void cyclicSort(int[] nums) {
        int i = 0;
        while (i < nums.length) {
            if (nums[i] != i + 1) {
                
                int temp = nums[i];
                nums[i] = nums[temp - 1];
                nums[temp - 1] = temp;
            } else {
            
                i++;
            }
        }
    }
}
