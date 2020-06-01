const validParent = {
    "{": "}",
    "(" : ")",
    "[" :"]"
}

let BalanceParentheses = function(s) {
  if(s === ""){
      return true;
  }
  if(s.length <= 1){
     return false;
  }

    
  let stack = [];
  
  for(let i = 0; i < s.length; i++){
      console.log(stack);
      if(validParent[s[i]]){
          stack.push(validParent[s[i]])
      }
      else {  
          s[i] === stack[stack.length - 1] ? stack.pop()  : stack.push("$")
      }
  }
  return stack.length === 0;
};