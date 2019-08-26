<?php

#ヌルバイトアタック対策
function sanitizer($arr) {
    if (is_array($arr) ){
    return array_map('sanitizer', $arr);    
    }
    return str_replace("\0", "", $arr);
}


$_GET = sanitizer($_GET);
$_POST = sanitizer($_POST);
$_COOKIE = sanitizer($_COOKIE);
#ヌルバイトアタック対策ここまで

$name=$_POST["name"];
$company=$_POST["company"];
$address=$_POST["address"];
$tel=$_POST["tel"];
$email=$_POST["email"];
$repeatemail=$_POST["repeatemail"];
$comments=$_POST["comments"];
$char=mb_detect_encoding($name);


#無効化
$name=htmlentities($name,ENT_QUOTES,"UTF-8");
$company=htmlentities($company,ENT_QUOTES,"utf-8");
$address=htmlentities($address,ENT_QUOTES,"utf-8");
$tel=htmlentities($tel,ENT_QUOTES,"utf-8");
$email=htmlentities($email,ENT_QUOTES,"utf-8");
$repeatemail=htmlentities($repeatemail,ENT_QUOTES,"utf-8");
$comments=htmlentities($comments,ENT_QUOTES,"UTF-8");


#改行処理
$name=str_replace("\r\n","",$name);
$company=str_replace("\r\n","",$company);
$address=str_replace("\r\n","",$address);
$tel=str_replace("\r\n","",$tel);
$email=str_replace("\r\n","",$email);
$repeatemail=str_replace("\r\n","",$repeatemail);
$comments=str_replace("\r\n","\t",$comments);
$comments=str_replace("\r","\t",$comments);
$comments=str_replace("\n","\t",$comments);

#必須事項チェック
if($name=="" || $comments=="" || $tel=="" || $email=="" || $repeatemail=="" ){
  echo $_SERVER['HTTP_REFERER'];
  exit;}

#入力エラー
#------------------------------------------------
#if($text==""){error("お問い合わせ内容が未記入です。");}
#if($name==""){error("氏名が未記入です。");}
#if($mail==""){error("メールアドレスが未記入です。");}
#if(!preg_match('/\w+@\w+/',$mail)){error("メールアドレスに誤りがあります。");}
#if($mail !== $mail2){error("確認用メールアドレスが一致しません。");}
#------------------------------------------------

#確認
if($_POST["mode"]=="post"){conf_form();}
else if($_POST["mode"]=="send"){comp_form();}

function conf_form(){
  global $name;
  global $company;
  global $address;
  global $tel;
  global $email;
  global $repeatemail;
  global $comments;
  global $char;

  $conf=fopen("contact_pc_confirmen.html","r") or die;
  $size=filesize("contact_pc_confirmen.html");
  $data=fread($conf,$size);
  fclose($conf);

#万が一のための文字コード調査
if($char !== "UTF-8"){
  $name=mb_convert_encoding($name,$char);
  $company=mb_convert_encoding($company,$char);
  $address=mb_convert_encoding($address,$char);
  $tel=mb_convert_encoding($tel,$char);
  $email=mb_convert_encoding($email,$char);
  $repeatemail=mb_convert_encoding($repeatemail,$char);
  $comments=mb_convert_encoding($comments,$char);
}

  $data=str_replace("!name!",$name,$data);
  $data=str_replace("!company!",$company,$data);
  $data=str_replace("!address!",$address,$data);
  $data=str_replace("!tel!",$tel,$data);
  $data=str_replace("!email!",$email,$data);
  $data=str_replace("!repeatemail!",$repeatemail,$data);
  $data=str_replace("!comments!",$comments,$data);

  echo $data;
  exit;
}

#--------------------------------------------------
#送信完了画面
#--------------------------------------------------

function comp_form(){

  global $name;
  global $company;
  global $address;
  global $email;
  global $repeatemail;
  global $comments;
  global $char;

#ファイルに書き込み要素ここから発展あり

  $fh=fopen("user.csv","r+");
  fwrite($fh,"{$name}<>{$company}<>{$tel}<>{$email}<>{$comments}\n");
  fclose($fh);


  send_mail();
  user_send_mail();

#テンプレート読み込み

  $conf=fopen("thanksen.html","r") or die;
  $size=filesize("thanksen.html");
  $data=fread($conf,$size);
  fclose($conf);

  echo $data;
  exit;
}


#------------------------------------------------------
#メール送信
#------------------------------------------------------


function send_mail(){

  $date=date("Y/m/d H:i:s");
  global $name;
  global $company;
  global $address;
  global $tel;
  global $email;
  global $repeatemail;
  global $comments;
  global $char;

#本文

$body = <<<EOM
  以下の内容でお問い合わせがありました。
  {$date}
  氏名：{$name}
  御社名：{$company}
  住所：{$address}
  電話番号：{$tel}
  e-mail：{$email}
  お問い合わせ内容：
  {$comments}
EOM
;


#送信
  $mailto='hello@tgn-soleil.com';
  $subject="お問い合わせ(英語)フォームより連絡があります。";
  mb_language("japanese");
  mb_internal_encoding("UTF-8");
  $name="From:".mb_encode_mimeheader($name);
  $mailFrom=$name."$mail";
#  $mailFrom=$name."<".$mail.">";

  mb_send_mail($mailto,$subject,$body,$mailFrom);
   
}

function user_send_mail(){

  $date=date("Y/m/d H:i:s");
  global $name;
  global $company;
  global $address;
  global $tel;
  global $email;
  global $repeatemail;
  global $char;
  global $comments;

#本文

$body = <<<EOM
  Thank you for your inquiry.
  We have received the following contents.
  Soon we will contact you.

  {$date}
  name:{$name}
  company:{$company}
  address:{$address}
  telephone:{$tel}
  e-mail:{$email}
  comments:
  {$comments}

  It will be e-mail address of the transmission only.
  Please do not reply.
EOM
;


#送信
  $mailto=$email;
  $subject="[TGN soleil]Thank you for your inquiry.";
  mb_language("English");
  mb_internal_encoding("UTF-8");
##  $name="From:".mb_encode_mimeheader($name);
##  $mailFrom="TGNsoleil"."iaproject000@gmail.com";
  $mailFrom="TGNsoleil"."send-mail@tgn-soleil.com";



  mb_send_mail($mailto,$subject,$body);
   
}

?>