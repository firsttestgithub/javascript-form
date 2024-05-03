const submitBtn = document.getElementById('submitBtn');
var form = document.getElementsByClassName('.form');
//var icon1 = document.querySelector('.icons1');
//var icon2 = document.querySelector('.icons2');
//var icon3 = document.querySelector('.icons3');
//var icon4 = document.querySelector('.icons4');
var correct = document.querySelector(".correct");
var wrong = document.querySelector(".wrong");
var correct1 = document.querySelector(".correct1");
var wrong1 = document.querySelector(".wrong1");
var correct2 = document.querySelector(".correct2");
var wrong2 = document.querySelector(".wrong2");
var correct3 = document.querySelector(".correct3");
var wrong3 = document.querySelector(".wrong3");


submitBtn.addEventListener('click', (e)=>{
    e.preventDefault();
        if(validate()){
           
        }
})

function validate(){
    var inp = document.getElementById('text').value;
    var email = document.getElementById('email').value;
    var error = document.getElementById('nameError');
    var emailError = document.getElementById('emailError');    
    var pass = document.getElementById('password').value;    
    var passError = document.getElementById('passError');  
    var confirmPass = document.getElementById('confirm').value;  
    var confirmError = document.getElementById('confirmError');
var eyeicon = document.querySelector('.eyeicon');

var passw =  /^[A-Za-z]\w{7,14}$/;
var letters = /^[A-Za-z]+$/;

   if(inp === ""){
      error.innerHTML = "Name is required"; 
       correct.style.display = "none";
       wrong.style.display = "block";
     
    }
else if(!inp.match(letters)){
    error.innerHTML = "just characters are allowed"; 
    correct.style.display = "none";
    wrong.style.display = "block";
}
  else if(inp.length < 5){
       error.innerHTML = "write full name";
       correct.style.display="none";
       wrong.style.display = "block";
  }
   
  else{
      error.innerHTML = "";
      correct.style.display="block";
       wrong.style.display = "none";
       
  }
  if(email === ""){
        emailError.innerHTML = "Email is required";
        correct1.style.display="none";
        wrong1.style.display = "block";
      
       
    }
 else if(!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        emailError.innerHTML = "please valid email id";
        correct1.style.display="none";
        wrong1.style.display = "block";
     
    }
    else{
        emailError.innerHTML = "";
        correct1.style.display="block";
        wrong1.style.display = "none";
    }
if(pass === ""){
    passError.innerHTML = "Password is required";
    correct2.style.display="none";
    wrong2.style.display = "block";
}

else if(!pass.match(passw)){
passError.innerHTML = "Password must be valid";
correct2.style.display="none";
wrong2.style.display = "block";
}
else{
    passError.innerHTML = "";
    correct2.style.display="block";
    wrong2.style.display = "none";
}
if(confirmPass === ""){
    confirmError.innerHTML = "confirm password is required";
    correct3.style.display="none";
    wrong3.style.display = "block";
}
else if(pass != confirmPass){
confirmError.innerHTML = "Password and Confirm password must be same";
correct3.style.display="none";
wrong3.style.display = "block";

}
else{
    confirmError.innerHTML = "";
    correct3.style.display="block";
    wrong3.style.display = "none";
}
}
