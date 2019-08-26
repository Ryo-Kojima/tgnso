  function check(){
var email = document.getElementById("email");
var email2 = document.getElementById("repeatemail");
var name = document.getElementById("name");
var tel = document.getElementById("tel");

var comments = document.forms["formbox"].elements["comments"];

if(name.value==""){
  window.alert("Please fill in the name");
  return false;
  }else if
    (tel.value==""){
    window.alert("Please fill in the telephone");
    return false;
    }else if(!(tel.value).match(/^\d{8,13}$/)){
    window.alert("Only numbers,8-13digit.");
    return false;
    }else if(email.value=="" || email2.value==""){
    window.alert("Please fill in the E-mail,repeat E-mail");
    return false;
    }else if
    (!(email.value).match(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/)){
    window.alert("E-mail format is different");
    return false;
    }else if
      (email.value !== email2.value){
      window.alert("e-mail is different from 'repeat e-mail'.");
      return false;
        }else if
        (comments.value==""){
        window.alert("Please fill in the consultation content.");
        return false;}

}
