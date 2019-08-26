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

$sei=$_POST["sei"];
$mei=$_POST["mei"];
$hurisei=$_POST["hurisei"];
$hurimei=$_POST["hurimei"];
$onshamei=$_POST["onshamei"];
$shozokubusho=$_POST["shozokubusho"];
$yakushoku=$_POST["yakushoku"];
$yubin=$_POST["yubin"];
$todouhuken=$_POST["todouhuken"];
$juusho=$_POST["juusho"];
$tatemonomei=$_POST["tatemonomei"];
$tel=$_POST["tel"];
$email=$_POST["email"];
$emailconfirm=$_POST["emailconfirm"];
$nenshou=$_POST["nenshou"];
$gyoushu=$_POST["gyoushu"];
$gosoudannaiyou=$_POST["gosoudannaiyou"];
$char=mb_detect_encoding($sei);
$check=$_POST["check"];
$pri=$_POST["pri"];

#無効化
$sei=htmlentities($sei,ENT_QUOTES,"UTF-8");
$mei=htmlentities($mei,ENT_QUOTES,"utf-8");
$hurisei=htmlentities($hurisei,ENT_QUOTES,"utf-8");
$hurimei=htmlentities($hurimei,ENT_QUOTES,"utf-8");
$onshamei=htmlentities($onshamei,ENT_QUOTES,"utf-8");
$shozokubusho=htmlentities($shozokubusho,ENT_QUOTES,"utf-8");
$yakushoku=htmlentities($yakushoku,ENT_QUOTES,"utf-8");
$yubin=htmlentities($yubin,ENT_QUOTES,"UTF-8");
$todouhuken=htmlentities($todouhuken,ENT_QUOTES,"utf-8");
#------アイフォンのハイフン対策--------
$juusho = preg_replace("/\xe2\x88\x92/", "\xef\xbc\x8d",$juusho);
$juusho = preg_replace("/\xe3\x80\x9c/", "\xef\xbd\x9e",$juusho);
#------アイフォンのハイフン対策--------
$juusho=htmlentities($juusho,ENT_QUOTES,"utf-8");


$tatemonomei=htmlentities($tatemonomei,ENT_QUOTES,"utf-8");
$tel=htmlentities($tel,ENT_QUOTES,"utf-8");
$email=htmlentities($email,ENT_QUOTES,"utf-8");
$emailconfirm=htmlentities($emailconfirm,ENT_QUOTES,"utf-8");
$nenshou=htmlentities($nenshou,ENT_QUOTES,"UTF-8");
$gyoushu=htmlentities($gyoushu,ENT_QUOTES,"utf-8");
$gosoudannaiyou=htmlentities($gosoudannaiyou,ENT_QUOTES,"utf-8");


#改行処理
$sei=str_replace("\r\n","",$sei);
$mei=str_replace("\r\n","",$mei);
$hurisei=str_replace("\r\n","",$hurisei);
$hurimei=str_replace("\r\n","",$hurimei);
$onshamei=str_replace("\r\n","",$onshamei);
$shozokubusho=str_replace("\r\n","",$shozokubusho);
$yakushoku=str_replace("\r\n","",$yakushoku);
$yubin=str_replace("\r\n","",$yubin);
$todouhuken=str_replace("\r\n","",$todouhuken);
$juusho=str_replace("\r\n","",$juusho);
$tatemonomei=str_replace("\r\n","",$tatemonomei);
$tel=str_replace("\r\n","",$tel);
$email=str_replace("\r\n","",$email);
$emailconfirm=str_replace("\r\n","",$emailconfirm);
$nenshou=str_replace("\r\n","",$nenshou);
$gyoushu=str_replace("\r\n","",$gyoushu);
$gosoudannaiyou=str_replace("\r\n","\t",$gosoudannaiyou);
$gosoudannaiyou=str_replace("\r","\t",$gosoudannaiyou);
$gosoudannaiyou=str_replace("\n","\t",$gosoudannaiyou);
$gosoudannaiyou=htmlentities($gosoudannaiyou,ENT_QUOTES,"utf-8");

#必須事項チェック
if($sei=="" || $mei=="" || $tel=="" || $email=="" || $emailconfirm=="" ){
#  echo $_SERVER['HTTP_REFERER'];
  header("Location:./form/index.html");
  echo $sei.$mei.$tel.$email.$emailconfirm;
  exit;}
if($check==""){
#  echo $_SERVER['HTTP_REFERER'];
  header("Location:./form/index.html");
  echo $check;
  exit;}



if(!$pri=="on"){
  header("Location:./form/index.html");
  echo $pri;
  exit;
}


#入力エラー
#------------------------------------------------
#if($text==""){error("お問い合わせ内容が未記入です。");}
#if($name==""){error("氏名が未記入です。");}
#if($mail==""){error("メールアドレスが未記入です。");}
#if(!preg_match('/\w+@\w+/',$mail)){error("メールアドレスに誤りがあります。");}
#if($mail !== $mail2){error("確認用メールアドレスが一致しません。");}
#------------------------------------------------

#確認
if($_POST["mode"]=="mode"){conf_form();}
if($_POST["mode"]=="send"){comp_form();}

function conf_form(){
  global $sei;
  global $mei;
  global $hurisei;
  global $hurimei;
  global $onshamei;
  global $shozokubusho;
  global $yakushoku;
  global $yubin;
  global $todouhuken;
  global $juusho;
  global $tatemonomei;
  global $tel;
  global $email;
  global $emailconfirm;
  global $nenshou;
  global $gyoushu;
  global $gosoudannaiyou;
  global $check;
  global $char;

  $conf=fopen("confirm/index.html","r") or die;
  $size=filesize("confirm/index.html");
  $data=fread($conf,$size);
  fclose($conf);

#万が一のための文字コード調査
if($char !== "UTF-8"){
  $sei=mb_convert_encoding($sei,$char);
  $mei=mb_convert_encoding($mei,$char);
  $hurisei=mb_convert_encoding($hurisei,$char);
  $hurimei=mb_convert_encoding($hurimei,$char);
  $onshamei=mb_convert_encoding($onshamei,$char);
  $shozokubusho=mb_convert_encoding($shozokubusho,$char);
  $yakushoku=mb_convert_encoding($yakushoku,$char);
  $yubin=mb_convert_encoding($yubin,$char);
  $todouhuken=mb_convert_encoding($todouhuken,$char);
  $juusho=mb_convert_encoding($juusho,$char);
  $tatemonomei=mb_convert_encoding($tatemonomei,$char);
  $tel=mb_convert_encoding($tel,$char);
  $email=mb_convert_encoding($email,$char);
  $add=mb_convert_encoding($add,$char);
  $tel=mb_convert_encoding($tel,$char);
  $email=mb_convert_encoding($email,$char);
  $emailconfirm=mb_convert_encoding($emailconfirm,$char);
  $nenshou=mb_convert_encoding($nenshou,$char);
  $gyoushu=mb_convert_encoding($gyoushu,$char);
  $gosoudannaiyou=mb_convert_encoding($gosoudannaiyou,$char);
}
  $data=str_replace("!sei!",$sei,$data);
  $data=str_replace("!mei!",$mei,$data);
  $data=str_replace("!hurisei!",$hurisei,$data);
  $data=str_replace("!hurimei!",$hurimei,$data);
  $data=str_replace("!onshamei!",$onshamei,$data);
  $data=str_replace("!shozokubusho!",$shozokubusho,$data);
  $data=str_replace("!yakushoku!",$yakushoku,$data);
  $data=str_replace("!yubin!",$yubin,$data);
  $data=str_replace("!todouhuken!",$todouhuken,$data);
  $data=str_replace("!juusho!",$juusho,$data);
  $data=str_replace("!tatemonomei!",$tatemonomei,$data);
  $data=str_replace("!tel!",$tel,$data);
  $data=str_replace("!email!",$email,$data);
  $data=str_replace("!emailconfirm!",$emailconfirm,$data);
  $data=str_replace("!nenshou!",$nenshou,$data);
  $data=str_replace("!gyoushu!",$gyoushu,$data);
  $data=str_replace("!gosoudannaiyou!",$gosoudannaiyou,$data);



//ここから吉原追記----------------------------------------------------------------------------------------------------------------------------------------------
  $com = array(
          "月次決算を早期化したい",
          "経営計画を策定したい",
          "部門別・事業別管理をやりたい",
          "マイナンバーの管理と運用が知りたい",
          "海外進出に関する相談がしたい",
          "相続税に関する相談（生前贈与も含む）をしたい",
          "事業承継に関する相談をしたい",
          "その他"
          );

#(※フリーコメント欄にご相談内容をご記載ください)

  $checklist=$_POST["check"];

//その他(※フリーコメント欄にご相談内容をご記載ください)には()が含まれるためコード追加----------------------
      if(array_search("その他",$checklist)){
        $num = count($checklist)-1;
        $checklist[$num] = $checklist[$num]."(※フリーコメント欄にご相談内容をご記載ください)";
#        echo print_r($checklist);
#        echo $num;
      }
#      else{
#        $checklist[0] = $checklist[0]."(※フリーコメント欄にご相談内容をご記載ください)";
#      }

//---------------------------------------------------------------------------------
  $connectstr = implode(",",$checklist);

      for($i = 0; $i <= 7; $i++){
         if (strstr($connectstr, $com[$i])) {
            $chk = '<input type="hidden" name="check[]" value='.$com[$i].' />
                   <input type="checkbox" value=$com[$i] disabled="disabled" checked />'.$com[$i];
            $data=str_replace($com[$i],$chk,$data);
         }else{
            $chk = '<input type="checkbox" name="check[]" value='.$com[$i].' disabled="disabled /">'.$com[$i];
            $data=str_replace($com[$i],$chk,$data);
         }
      }



//↑ここまで---------------------------------------------------------------------------------------------------------------------------------------------------

  $data=str_replace("!connectstr!",$connectstr,$data);
  echo $data;
  exit;
}


#--------------------------------------------------
#送信完了画面
#--------------------------------------------------

function comp_form(){

  global $sei;
  global $mei;
  global $hurisei;
  global $hurimei;
  global $onshamei;
  global $shozokubusho;
  global $yakushoku;
  global $yubin;
  global $todouhuken;
  global $juusho;
  global $tatemonomei;
  global $tel;
  global $email;
  global $emailconfirm;
  global $nenshou;
  global $gyoushu;
  global $gosoudannaiyou;
  global $checkbox;
  global $connectstr;
  global $char;

#ファイルに書き込み要素ここから発展あり

  $fh=fopen("user.csv","r+");
  fwrite($fh,"{$sei}<>{$mei}<>{$tel}<>{$email}<>{$checkbox}<>{$gosoudannaiyou}\n");
  fclose($fh);


  send_mail();
  user_send_mail();

#テンプレート読み込み

  $conf=fopen("./thanks/index.html","r") or die;
  $size=filesize("./thanks/index.html");
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
  global $sei;
  global $mei;
  global $hurisei;
  global $hurimei;
  global $onshamei;
  global $shozokubusho;
  global $yakushoku;
  global $yubin;
  global $todouhuken;
  global $juusho;
  global $tatemonomei;
  global $tel;
  global $email;
  global $emailconfirm;
  global $nenshou;
  global $gyoushu;
  global $gosoudannaiyou;
  global $checkbox;
  global $connectstr;
  global $char;
  
  $connectstr=$_POST["connectstr"];

#本文


$body = <<<EOM
  以下の内容でお問い合わせがありました。
  {$date}
  氏名：{$sei}{$mei}
  ふりがな：{$hurisei}{$hurimei}
  御社名：{$onshamei}
  所属部署：{$shozokubusho}
  役職：{$yakushoku}
  郵便番号：{$yubin}
  都道府県：{$todouhuken}
  住所：{$juusho}
  建物名：{$tatemonomei}
  電話番号：{$tel}
  e-mail：{$email}
  年商：{$nenshou}
  業種：{$gyoushu}
  ご相談内容：{$connectstr}
  お問い合わせ内容：
  {$gosoudannaiyou}
EOM
;


#送信----受信メールアドレス----
  $mailto='hello@tgn-soleil.com';
  $subject="お問い合わせフォームより連絡があります。";
  mb_language("japanese");
  mb_internal_encoding("UTF-8");
#  $name="From:".mb_encode_mimeheader($name);
#  $mailFrom=$name."<".$mail.">";
  
  $names = mb_encode_mimeheader($sei);
  $namem = mb_encode_mimeheader($mei);
  $name = "From:".$names.$namem;

  $mailFrom = $name."<".$email.">";

  mb_send_mail($mailto,$subject,$body,$mailFrom);
   
}

function user_send_mail(){

  $date=date("Y/m/d H:i:s");
  global $sei;
  global $mei;
  global $hurisei;
  global $hurimei;
  global $onshamei;
  global $shozokubusho;
  global $yakushoku;
  global $yubin;
  global $todouhuken;
  global $juusho;
  global $tatemonomei;
  global $tel;
  global $email;
  global $emailconfirm;
  global $nenshou;
  global $gyoushu;
  global $gosoudannaiyou;
  global $checkbox;
  global $connectstr;
  global $char;
  global $result;
  
    $connectstr=$_POST["connectstr"];


#本文

$body = <<<EOM
  以下の内容でお問い合わせいただきました。
  今一度、ご確認ください。
  こちらから、近日中にご連絡させていただきます。
  
  {$date}
  氏名：{$sei}{$mei}
  ふりがな：{$hurisei}{$hurimei}
  御社名：{$onshamei}
  所属部署：{$shozokubusho}
  役職：{$yakushoku}
  郵便番号：{$yubin}
  都道府県：{$todouhuken}
  住所：{$juusho}
  建物名：{$tatemonomei}
  電話番号：{$tel}
  e-mail：{$email}
  年商：{$nenshou}
  業種：{$gyoushu}
  ご相談内容：{$connectstr}
  お問い合わせ内容：
  {$gosoudannaiyou}

  ※こちらは送信専用のメールアドレスになります。
    返信はご遠慮いただきますようお願い致します。
EOM
;



#送信
  $mailto=$email;
  $subject="【TGNそれいゆ】お問い合わせありがとうございました。";
  mb_language("japanese");
  mb_internal_encoding("UTF-8");
  $name="From:".mb_encode_mimeheader(TGNそれいゆ);
#  $mailFrom=mb_encode_mimeheader(mb_convert_encoding("TGNそれいゆ","JIS","UTF-8"))."send-mail@tgn-soleil.com";
  $mailFrom=$name."send-mail@tgn-soleil.com";

  mb_send_mail($mailto,$subject,$body,$mailFrom);

#  if(mb_send_mail($mailto,$subject,$body,$mailFrom)){
#      header("Location: thanks.html");
#  }else{
#      echo "送信失敗";
#  };
   
}



/*
#------------------------------------------------------
#メール送信 吉原ver.
#------------------------------------------------------
function send_form(){

  $date=date("Y/m/d H:i:s");
  global $sei;
  global $mei;
  global $hurisei;
  global $hurimei;
  global $onshamei;
  global $shozokubusho;
  global $yakushoku;
  global $yubin;
  global $todouhuken;
  global $juusho;
  global $tatemonomei;
  global $tel;
  global $email;
  global $emailconfirm;
  global $nenshou;
  global $gyoushu;
  global $gosoudannaiyou;
  global $char;
  global $connectstr;
  global $check;

  $connectstr = implode(",",$check);

  $body = <<<EOM
  以下の内容でお問い合わせがありました。
  $date
  氏名：{$sei}{$mei}
  ふりがな：{$hurisei}{$hurimei}
  御社名：{$onshamei}
  所属部署：{$shozokubusho}
  役職：{$yakushoku}
  郵便番号：{$yubin}
  都道府県：{$todouhuken}
  住所：{$juusho}
  建物名：{$tatemonomei}
  電話番号：{$tel}
  e-mail：{$email}
  年商：{$nenshou}
  業種：{$gyoushu}
  ご相談内容：{$connectstr}
  お問い合わせ内容：
  {$gosoudannaiyou}
EOM
;

  $mailto = 'iaproject000@gmail.com';
  $subject = "お問い合わせフォームより連絡があります。";
  mb_language("japanese");
  mb_internal_encoding("UTF-8");


  $names = mb_encode_mimeheader($sei);
  $namem = mb_encode_mimeheader($mei);
  $name = "From:".$names.$namem;

  $mailFrom = $name."<".$email.">";

  mb_send_mail($mailto,$subject,$body,$mailFrom);

  user_send_mail();

}


function user_send_mail(){

  $date=date("Y/m/d H:i:s");
  global $sei;
  global $mei;
  global $hurisei;
  global $hurimei;
  global $onshamei;
  global $shozokubusho;
  global $yakushoku;
  global $yubin;
  global $todouhuken;
  global $juusho;
  global $tatemonomei;
  global $tel;
  global $email;
  global $emailconfirm;
  global $nenshou;
  global $gyoushu;
  global $gosoudannaiyou;
  global $checkbox;
  global $char;
  global $result;

#本文

$body = <<<EOM
  以下の内容でお問い合わせいただきました。
  今一度、ご確認ください。
  こちらから、近日中にご連絡させていただきます。
  {$date}
  氏名：{$sei}{$mei}
  ふりがな：{$hurisei}{$hurimei}
  御社名：{$onshamei}
  所属部署：{$shozokubusho}
  役職：{$yakushoku}
  郵便番号：{$yuubin}
  都道府県：{$todouhuken}
  住所：{$juusho}
  建物名：{$tatemonomei}
  電話番号：{$tel}
  e-mail：{$email}
  年商：{$nenshou}
  業種：{$gyoushu}
  ご相談内容：{$connectstr}
  お問い合わせ内容：
  {$gosoudannaiyou}
EOM
;


#送信
  $mailto=$email;
  $subject="【TGNそれいゆ】お問い合わせありがとうございました。";
  mb_language("japanese");
  mb_internal_encoding("UTF-8");
  $name="From:".mb_encode_mimeheader(TGNそれいゆ);
  $mailFrom=$name."iaproject000@gmail.com";


  mb_send_mail($mailto,$subject,$body,$mailFrom);
   
}

*/

?>

