function voteResult(){
   let x = prompt("Please,enter your age.");
   let age = Number(x);
   if(x>=18){
      document.getElementById('test-result').innerHTML = "You are eligible to vote."
      
   } else {
     document.getElementById('test-result').innerHTML = "You are not eligible to vote."
   }
   
}
