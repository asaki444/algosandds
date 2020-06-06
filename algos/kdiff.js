var findPairs = function(nums, k) {
    if(nums.length === 0) return 0;
    nums.sort();
    let firstSet = new Set();
    let secondSet = new Set();
    let i = 0;
    let j = nums.length - 1;
    console.log(nums)
    while( i < nums.length){
        let target = Math.abs(nums[j] - nums[i]);
         if(target === k){
           if(i !== j){
             firstSet.add(i);
             secondSet.add(j);  
           }
             i++;
             j = nums.length - 1;
         }
         else if(target > k){
             j--;
         }
        else{
             i++;
            j = nums.length - 1;
        }      
    }
 
   return secondSet.size > firstSet.size ? firstSet.size : secondSet.size;
 };