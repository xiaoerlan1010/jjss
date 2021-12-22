<?php
//网易  https://c.kada.163.com/
$html= yu('https://up.study.163.com/j/uploader-server/UploaderCenterManager/getEduUploaderToken.do?fileName=111.png&type=5&fileGmtModifiedTime=1591003750141&appKey=study');
$json=json_decode($html,true);
$id=$json['result'];
$html= yu('https://up.study.163.com/j/uploader-server/UploaderCenterManager/exchangeNosTokenByEduToken.do?eduUploaderToken='.$id.'&fileName=111.png');
$json=json_decode($html,true);
$id1=$json['result']['nosKey'];
$id2=$json['result']['xnosToken'];

//echo $id1.$id2;
//exit;

function yu($url,$data = null){

	$user_agent = 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36 SE 2.X MetaSr 1.0';

    $ref = 'https://c.kada.163.com';
    $curl = curl_init();
    curl_setopt($curl, CURLOPT_URL, $url);
    curl_setopt($curl, CURLOPT_USERAGENT, $user_agent);
	curl_setopt($curl,CURLOPT_COOKIE,'');
	
    curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, FALSE);
    curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, FALSE);
    if (!empty($data)){
        curl_setopt($curl, CURLOPT_POST, 1);
        curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
    }
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
	curl_setopt($curl, CURLOPT_TIMEOUT,20); //限制访问时间
    curl_setopt($curl, CURLOPT_REFERER, $ref);
    $output = curl_exec($curl);
    curl_close($curl);
    return $output;
}

if (isset($_FILES['file']) 
&& is_uploaded_file($_FILES['file']['tmp_name']))
{
$imgTmpFile = $_FILES['file']['tmp_name'];
    if (class_exists('CURLFile')) {     // php 5.5
      $post['file'] = new \CURLFile(realpath($imgTmpFile));
    } else {
      $post['file'] = '@'.realpath($imgTmpFile);
    }
$post['x-nos-token'] = $id2;
$post['Object'] = $id1;

$html= yu('https://nos.netease.com/edu-image',$post);
$json=json_decode($html,true);
$url=$json['NosKey'];


if($url){ 
	  $url='https://edu-image.nosdn.127.net/'.$url;
      echo 'url=\''.$url.'\'';
    }
    else
   {
    echo "获取接口地址错误！";
   }
}
else
{
echo "提交参数错误！";
}
