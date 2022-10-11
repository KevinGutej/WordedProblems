const first = readline().split(" ");//Takes the first line of input and splits it into an array of 2 strings
 
const n = first[0] - 0;//From this array, the 0th element is converted to int and called n
const k = first[1] - 1;//The first element is converted to int , shifted 1 unit to the left and called k
// We need to shift k because they start counting indices of arrays from 1 and js starts counting from 0
const scores = readline().split(" ");//Takes the second line of input and splits it into an array of n strings
 
const kthElement = scores[k];//Its the value of k-th element in scores
print(scores.filter(element => element - 0 >= kthElement && element > 0).length);//We filter out positive scores that are bigger or equal to the k-th element and count the amount we are left with