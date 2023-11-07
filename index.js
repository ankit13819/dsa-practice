//Task-find the missing number from the first N integers
//Note-: There are no duplicates in the list

//Question-: arr[], size=N-1, range=[1,N]

//Example-> input arr[]={1,2,4,6,3,7,8}, output=5,

//Explanation- Here the size=7, range=[1,8] missing number =5

//Aproach-Hashing-> range(1,N), size=N

//-> Create a temp array=temp[] size=n+1, initial values=0
//-> Traverse the input array arr[] and do following for each arr[i]
//* if(temp[arr[i]]==0) temp[arr[i]=1]
//Traverse temp[] and output the array element value as 0 (This is the missing number)

console.log("find the missing Number solution is");

function findTheMissingNumber(arr, N) {
  let i = 0;
  let temp = [];
  for (i = 0; i <= N; i++) {
    temp[i] = 0;
  }
  for (i = 0; i < N; i++) {
    temp[arr[i] - 1] = 1;
    // console.log(temp[arr[i] - 1]);
  }
  let ans = 0;
  for (i = 0; i <= N; i++) {
    // console.log(temp[i]);
    if (temp[i] == 0) {
      ans = i + 1;
      console.log(ans);
    }
  }
}
let arr = [1, 3, 7, 5, 6, 2, 4, 9];
let n = arr.length;
findTheMissingNumber(arr, n);
