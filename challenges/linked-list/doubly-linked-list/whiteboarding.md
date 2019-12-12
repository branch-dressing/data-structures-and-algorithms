#Whiteboarding

##Merging Linked Lists
Problem: given two linked list how do you merge them into one linked list?
Details: each item in the new linked list should alternate.
Input(): the list being merged. This is called by the original list.
Output: nothing. List should just be altered.

Issues: 
-for every node in both lists I will have to change the previous and the next
-I will need to remove the head from the one being merged.
-What happens when the lists aren't even?

mergeLists(secondList) {
  let listOneNode = this.head;
  let listTwoNode = secondList.head
  if(listTwoNode.head) listTwoNode.head = null;
  while(listOneNode && listTwoNode) {
    listOneNode.next = listTwoNode;
    listTwoNode.previous = listOneNode;

    
  }
}
