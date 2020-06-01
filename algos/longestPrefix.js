var longestCommonPrefix = function(strs) {
    
    //create a array that tracks eachh letter
    // letter only get pushed only if it occurs as many times as the lenght of the strs
  let word = strs[0];
  let i = 1; 
  
    while( i < word.length){
         if(word[i] !== strs[i][i]){
             return i === 1 ? "" : word.slice(0, i); 
         }
         i++;     
    }
    
};

console.log(`answer 1: ${longestCommonPrefix(["dog","racecar","car"])}`)
console.log(`answer 2: ${longestCommonPrefix(["flower","flow","flight"])}`)