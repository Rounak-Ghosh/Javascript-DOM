const signupLink = document.querySelector('.btn');
const msgDiv = document.querySelector('.hidden');
const navLinks = document.querySelectorAll('.nav-link');

function toggleMsg(){

    msgDiv.classList.toggle('hidden');
    if (signupLink.innerHTML == "Sign Up"){
        signupLink.innerHTML = "Clicked";
    }else {
        signupLink.innerHTML = "Sign Up";
    }
    
}

signupLink.onclick = toggleMsg;


function activate(){
    for (var i=0; i<navLinks.length;i++){
        navLinks[i].classList.remove('active');
    }
    this.classList.add('active')
}

for (var i=0 ; i<navLinks.length;i++){
    navLinks[i].onclick = activate;
}