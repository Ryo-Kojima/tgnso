  function check(){
var sei = document.getElementById("sei");
var mei = document.getElementById("mei");
var email = document.getElementById("email");
var email2 = document.getElementById("emailconfirm");
var tel = document.getElementById("tel");
var c1 = document.getElementById("checkbox1");
var c2 = document.getElementById("checkbox2");
var c3 = document.getElementById("checkbox3");
var c4 = document.getElementById("checkbox4");
var c5 = document.getElementById("checkbox5");
var c6 = document.getElementById("checkbox6");
var c7 = document.getElementById("checkbox7");
var c8 = document.getElementById("checkbox8");
var go = document.getElementById("go");
var pri = document.getElementById("pri");

if(sei.value=="" || mei.value==""){
  var contact = document.getElementById( "question" ) ;
  var contactrect = contact.getBoundingClientRect() ;
  var positionX = contactrect.left + window.pageXOffset ;	
  var positionY = contactrect.top + window.pageYOffset ;	// 要素のY座標
  window.scrollTo( positionX, positionY ) ;
  window.alert("氏名をご入力ください。");
  return false;
  }else if
  (tel.value==""){
  var tatemono = document.getElementById( "shozokubusho" ) ;
  var tatemonorect = tatemono.getBoundingClientRect() ;
  var positionX = tatemonorect.left + window.pageXOffset ;	
  var positionY = tatemonorect.top + window.pageYOffset ;	// 要素のY座標
  window.scrollTo( positionX, positionY ) ;
  window.alert("電話番号をご入力ください。");
  return false;
  }else if
  (!(tel.value).match(/^\d{8,13}$/)){
  var tatemono = document.getElementById( "shozokubusho" ) ;
  var tatemonorect = tatemono.getBoundingClientRect() ;
  var positionX = tatemonorect.left + window.pageXOffset ;	
  var positionY = tatemonorect.top + window.pageYOffset ;	// 要素のY座標
  window.scrollTo( positionX, positionY ) ;
  window.alert("電話番号はハイフンなしで、半角数字8-13桁でご記入ください。");
  return false;
  }

if(email.value=="" || email2.value==""){
  var tatemono = document.getElementById( "shozokubusho" ) ;
  var tatemonorect = tatemono.getBoundingClientRect() ;
  var positionX = tatemonorect.left + window.pageXOffset ;	
  var positionY = tatemonorect.top + window.pageYOffset ;	// 要素のY座標
  window.scrollTo( positionX, positionY ) ;
  window.alert("e-mailは確認用を含め、2箇所に記入をお願い致します。");
  return false;
  }else if
  (!(email.value).match(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/)){
  var tatemono = document.getElementById( "shozokubusho" ) ;
  var tatemonorect = tatemono.getBoundingClientRect() ;
  var positionX = tatemonorect.left + window.pageXOffset ;	
  var positionY = tatemonorect.top + window.pageYOffset ;	// 要素のY座標
  window.scrollTo( positionX, positionY ) ;
  window.alert("e-mailは「英数字_-.」「@」で構成されているものでお願い致します。");
  return false;
  }


if(email.value !== email2.value){
  var tatemono = document.getElementById( "shozokubusho" ) ;
  var tatemonorect = tatemono.getBoundingClientRect() ;
  var positionX = tatemonorect.left + window.pageXOffset ;	
  var positionY = tatemonorect.top + window.pageYOffset ;	// 要素のY座標
  window.scrollTo( positionX, positionY ) ;
 window.alert("e-mailが確認用と異なっています");
 return false;
 }else if
 (c1.checked==false && c2.checked==false && c3.checked==false && c4.checked==false && c5.checked==false && c6.checked==false && c7.checked==false && c8.checked==false){
  window.alert("ご相談事項は少なくとも１つお選びください。");
  return false;
  }else if
    (c8.checked==true && go.value==""){
      window.alert("その他を選ばれた場合、ご相談内容に記載をお願い致します。");
      return false;
    }else if
  (pri.checked==false){
  window.alert("弊社のプライバシーポリシーに同意をお願いいたします。");
  return false;}
}

