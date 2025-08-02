const eyeicon = document.getElementById('eyeicon');
const password = document.getElementById('password');

eyeicon.addEventListener("click",function(){
  if (password.type === "password") {
      password.type = "text";
      eyeicon.src = "Assets/eye-open.png";

  }else{
    password.type = "password";
    eyeicon.src = "Assets/eye-close.png";
  }
});