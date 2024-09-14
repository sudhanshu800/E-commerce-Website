var MenuItems = document.getElementById("MenuItems");

MenuItems.style.maxHeight = "0px";

function menutoggle(){
    if(MenuItems.style.maxHeight == "0px")
    {
        MenuItems.style.maxHeight = "200px";
    }
    else{
        MenuItems.style.maxHeight = "0px";
    }
}
// ---------Js for toggle form------


var LoginForm = document.getElementById("LoginForm");
var RegForm = document.getElementById("RegForm");
var Indicator = document.getElementById("Indicator");

function register(){
    RegForm.style.transform = "translate(0px)";
    LoginForm.style.transform = "translate(0px)";
    Indicator.style.transform = "translate(100px)";
}
function login(){
    RegForm.style.transform = "translate(300px)";
    LoginForm.style.transform = "translate(300px)";
    Indicator.style.transform = "translate(0px)";
}