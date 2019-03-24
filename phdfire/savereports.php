<?php
header("Access-Control-Allow-Origin: *");
error_reporting(0);
include 'access.php';

$report             = $_POST['report'];
$time               = $report['TIME'];
$day                = $report['DAY'];
$date               = $report['DATE'];
$month              = $report['MONTH'];
$year               = $report['YEAR'];
$cause              = $report['CAUSE'];
$alarm              = $report['ALERT_LEVEL'];
$establishment_type = $report['ESTABLISHMENT'];
$district           = $report['DISTRICT'];
$latitude           = $report['LATITUDE'];
$longitude          = $report['LONGITUDE'];
$amount_damage      = $report['AMOUNT_OF_DAMAGE'];
$fatality           = $report['FATALITY'];
$injured            = $report['INJURED'];
$complete_address   = $report['COMPLETE_ADDRESS'];
$id                 = $_POST['userid'];
$conn = OpenCon();
//$date = date("Y/m/d");
//$sql = "SELECT * FROM classifier";

//$sql = "INSERT INTO `reports_readable`(`userid`,`time`, `day`, `month`,`year`, `cause`, `alarm_level`, `temperature`, `establishment_type`, `district`,`complete_address`) VALUES ($id,'$time',$day,'$month',$year,'$cause','$alarm','$temperature','$establishment_type','$district','$complete_address')";
$sql = "INSERT INTO `reports_readable_v2`(`USERID`,`TIME`, `DAY`,`DATE`, `MONTH`,`YEAR`, `CAUSE`, `ALERT_LEVEL`,  `ESTABLISHMENT`, `DISTRICT`,`LATITUDE`,`LONGITUDE`,`AMOUNT_OF_DAMAGE`,`COMPLETE_ADDRESS`,`FATALITY`,`INJURED`) VALUES ($id,'$time','$day','$date','$month',$year,'$cause','$alarm','$establishment_type','$district','$latitude','$longitude','$amount_damage','$complete_address','$fatality','$injured')";

if ($conn->query($sql) === TRUE) {
    print "New record created successfully";
} else {
    print "Error: " . $sql . "<br>" . $conn->error;
}
CloseCon($conn);
?>
