const email = document.getElementById('email')
const btn = document.getElementById('btn')
const emailsection = document.getElementById('emailsection')
const errormsg = document.getElementById('error')
const newsletterTemplate = document.getElementById('newsletterTemplate')
const success = document.getElementById('successbox')
const dissmissbtn = document.getElementById('dissmissbtn')
const emailinput = document.getElementById('emailinput')

const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


btn.addEventListener('click',function(){
    if(email.value.match(validRegex)){
        newsletterTemplate.style.display = "none";
        success.style.display = "block"
        emailinput.innerText = email.value;
        dissmissbtn.addEventListener('click',function(){
            newsletterTemplate.style.display = "flex";
            success.style.display = "none"
            email.value = "";
        })

    }
    else{
        email.style.backgroundColor = "hsla(4, 100%, 67%, 0.268)";
        email.style.border = "hsl(4, 100%, 67%);"
        error.style.display = "block";
        email.value = "";
    }

})