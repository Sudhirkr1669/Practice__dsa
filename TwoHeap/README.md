# Two heap coding pattern :- Time complexity is O(log N)

To be able to solve these kinds of problems, we want to know the smallest element in one part and the biggest element in the other part. Two Heaps pattern uses two Heap data structure to solve these problems; a Min Heap to find the smallest element and a Max Heap to find the biggest element.

# When to use this:-

1. Find median from DataStream:- Find median from data stream. If data elements is even, then there is no middle value. So, median will be average of two middle number.
2. Find right interval
3. Sliding Window median
4. IPO (maximise capital)
5. minimum cost to hire k workers

# Here’s the time complexity of various operations performed on a heap with n elements:

Access the min/max value: O(1)
Inserting an element: O(log n)
Removing an element: O(log n)
