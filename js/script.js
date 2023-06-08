window.addEventListener('scroll', function() {
    var nav = document.querySelector('nav');
    if (window.scrollY > 0) {
      nav.classList.remove('show');
    } else {
      nav.classList.add('show');
    }
  });


function validate(){
  
    var username = document.getElementById("username").value
    var email = document.getElementById("email").value
    var age = document.getElementById("age").value
    var country=document.getElementById("country").value
    var member= document.getElementById("member")
    var guest= document.getElementById("guest")
    var message = document.getElementById("message")
    var agreement = document.getElementById("agreement").value

    if(username.length<5){
        document.getElementById("error_message").innerHTML="<br>Username must be at least 5 Character long<br>"
    }else if (!isNaN(username)) {
        document.getElementById("error_message").innerHTML = "<br>Name Cannot be a number<br>";
    }
    else if(email.endsWith("@gmail.com")==false){
        document.getElementById("error_message").innerHTML = "<br>Email must ends with @gmail.com<br>";
    }else if(username.length<1){
        document.getElementById("error_message").innerHTML="<br>Username must be at least 5 Character long<br>"
    }else if (isNaN(age)) {
        document.getElementById("error_message").innerHTML = "<br>Age must be valid number<br>";
    }else if (age<12) {
      document.getElementById("error_message").innerHTML = "<br>Age must be valid number<br>";
    }else if(country=="s"){
        document.getElementById("error_message").innerHTML = "<br>Please Select Country<br>";
    }else if(!member.checked && !guest.checked){
        document.getElementById("error_message").innerHTML = "<br>You must pick at least one status<br>";
    }else if(!agreement.checked){
        alert("You must agree with terms agreement and condition")
    }else if(username.length<10){
      document.getElementById("error_message").innerHTML="<br>Username must be at least 10 Character long<br>"
    }
}

function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    
    hours = addLeadingZero(hours);
    minutes = addLeadingZero(minutes);
    seconds = addLeadingZero(seconds);
    
    var time = hours + ":" + minutes + ":" + seconds;
    
    document.getElementById("clock").querySelector('.back').textContent = time;
    
    var flipCard = document.getElementById("clock").querySelector('.flip-card');
    flipCard.classList.add('flipped');
    setTimeout(function() {
      flipCard.classList.remove('flipped');
    }, 500);
  }
  
  function addLeadingZero(value) {
    if (value < 10) {
      value = "0" + value;
    }
    return value;
  }
  
  setInterval(updateClock, 1000);


  const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector("ul");

    hamburger.addEventListener("click", () => {
      navMenu.classList.toggle("show");
    });