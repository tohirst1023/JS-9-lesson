let idnumber = document.querySelector(".id");
let password = document.querySelector(".password");
let btn = document.querySelector("button");

btn.addEventListener("click", function(event){
    event.preventDefault();

    if (idnumber.value === "12345"  && password.value === "12345"){
        alert("Siz Mars space ga muvafiqayatliy krdingiz")
    }else {
        alert("Id yoki parol xato")
    }
    
});