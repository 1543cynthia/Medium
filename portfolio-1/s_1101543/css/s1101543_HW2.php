<?php

require_once('../TCPDF/tcpdf_import.php');
$name = $_POST['name'];
$phone = $_POST['phone'];
$studentID = $_POST['studentID'];
$email = $_POST['email'];
$expect = $_POST['expect'];
$date = $_POST['date'];

/*---------------- QRstart -----------------*/
include('phpqrcode/qrlib.php');
$tempDir = "file/qrcode/";                                                                         
$codeContents = 'http://140.138.77.70/~s1101543/public_html/HW2/file/pdf/'. $studentID .'.pdf';
$fileName = $studentID.'.png';
$filePath = $tempDir.$fileName;
/*---------------- QRend -----------------*/
/*---------------- Sent Mail Start -----------------*/
$charset = 'UTF-8';
$to="$email";
$subject="資己資彼活動報名成功";
$message="
活動時間:2021/11/11 1pm~6pm <br/>
地點:操場<br/>
姓名:$name<br/>手機:$phone<br/>學號:$studentID<br/>
信箱:$email<br/>期待:$expect<br/> 日期:$date<br/>
<img src='http://140.138.77.70/~s1101543/HW2/file/qrcode/".$studentID.".png' alt='qrcode'/>";
$headers = "From:s1101543@mail.yzu.edu.tw " . "\r\n";
mail($to,$subject,$message,$headers);
/*---------------- Sent Mail End -------------------*/

/*---------------- Print PDF Start -----------------*/
$pdf = new TCPDF(PDF_PAGE_ORIENTATION, PDF_UNIT, PDF_PAGE_FORMAT, true, 'UTF-8', false);
$pdf->setPrintHeader(false);
$pdf->setPrintFooter(false);
$pdf->SetFont('cid0jp','', 18); 
$pdf->AddPage();

$html = <<<EOF


   <p style="color:chocolate;font-size: 40px;">資己資彼報名表</p>
    <h1 style="color:MediumOrchid">介紹:</h1>
     <p style=color:chocolate;>四資:資管、資工、資傳、英專班</p>
	 <p>  主要目的是促進資訊學院的學生<em>多多交流</em>，也可以認識別院同學，
	 交個朋友，<em>拓展屬於你的視野。</em></p>
	 
	 	<h1 style="color:MediumOrchid">活動時間、地點:</h1>
       <h2 style="color:MediumOrchid">時間:</h2>  
	   <p class = "special">2021/11/11 1pm到6pm</p>
	   <h2 style="color:MediumOrchid">地點:</h2>  
	   <p class = "special">操場</p>
    <h1 style="color:MediumOrchid">聯繫我們:</h1>
       <p>歡迎有任何問題可以提問~</p>	
       
  <table border="1">
      <tr>
        <td colspan="1">姓名:</td>
         <td style="color:blue" colspan="3">$name</td>
    </tr>
    
    <tr>
        <td colspan="1">手機:</td>
        <td style="color:blue" colspan="3">$phone</td>
    </tr>
    
    <tr>
        <td colspan="1">學號:</td>
        <td style="color:blue" colspan="3">$studentID</td>
    </tr>
    
    <tr>
      <td colspan="1">信箱:</td>
      <td style="color:blue" colspan="3">$email</td>
    </tr>
    
    <tr>
      <td colspan="1">期望:</td>
      <td style="color:blue" colspan="1"> $expect</td>
      <td colspan="1">日期:</td>
      <td style="color:blue" colspan="1">$date</td>
    </tr>
  </table>
EOF;
/*---------------- Print PDF End -------------------*/

$pdf->writeHTML($html);
$pdf->lastPage();
$pdf->Output('order.pdf', 'I');
?>

