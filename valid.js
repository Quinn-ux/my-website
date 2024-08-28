function myfunction(){
    var x =document.getElementById("pass");

    if(x.type === "password"){
        x.type ="text"
    }
    else{
        x.type = "password"
    }
}

function validate(){
    var password = document.getElementById("pass")
    if(password.value.length >= 8){
        alert("Login Succesful");
        return false;
    }
    else{
        alert("Login Failed");
    }
}