Heap identifcation:-
1.) k keyword and   2.) smallest and largest keyword
k+smallest= max heap
k+largest=min heap
tc= n*log*n --> n*log*k  for sorting.  
find_min and delete_min using min heap is efficient because it take only o(1) and o(log n) tc.


TREE CONCEPT:- A tree can be represented in the form of array;
parent:- i (i starts from 0)
In the example show below, we’re still dealing with the same max heap as before; it’s grown a bit, and now we have 9 nodes in total, including the root node. When deleting or removing an element, most heaps are usually concerned with removing the root node, since the root will always be either the largest value element or the smallest value element, depending upon whether the heap is a max heap or min heap.
parents node index= (n-1/2)