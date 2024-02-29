const Menu = document.querySelector(".menu");

const offScreenMenu = document.querySelector(".off-screen-menu");

Menu.addEventListener("click", () => {
Menu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});

let password = document.getElementById("password");
let checkbox = document.getElementById("checkbox");

checkbox.onclick = function(){
if(checkbox.checked){
password.type = 'text';

}else{
password.type = 'password';
}
}