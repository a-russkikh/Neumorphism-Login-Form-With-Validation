let email = document.getElementById("txtEmail");
let password = document.getElementById("txtPass");
let msg = document.getElementById("message");
let mainmsg = document.getElementById("msg-div");

let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
let filter2 = /^(?=(.*[a-zA-Z]){1,})(.*[0-9]){2,}).{8,}$/;

function Validate() {
  if (filter.test(email.value) && filter2.test(password.value)) {
    mainmsg.style.display = "block";
    msg.innerHTML = "Login Success!";
    mainmsg.style.cssText += "background:#9c41a8;border-left:5px solid #fff";
  } else {
    mainmsg.style.display = "block";
    msg.innerHTML = "Username or Password is not correct";
    mainmsg.style.cssText += "background:#ff0d72;border-left:5px solid #fff";
  }
}
