<?php
header("Access-Control-Allow-Origin: *");
error_reporting(0);
include 'access.php';

$id                 = $_POST['userid'];
$reports            = $_POST['reports'];
$readable           = $_POST['readable'];

$conn = OpenCon();

if ($reports) {
    $values = "";

    foreach($reports as $report){
       /*  $time               = $report['time'];
        $day                = $report['day'];
        $month              = $report['month'];
        $year               = $report['year'];
        $cause              = $report['cause'];
        $temperature        = $report['temp'];
        $alarm              = $report['alarm'];
        $establishment_type = $report['type'];
        $district           = $report['district'];

        $values = $values."($id,'$time',$day,'$month',$year,'$cause','$alarm','$temperature','$establishment_type','$district'),"; */

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
        $complete_address   = $report['COMPLETE_ADDRESS'];
        $fatality           = $report['FATALITY'];
        $injured                = $report['INJURED'];
        $id                 = $_POST['userid'];
        
        $values = $values . "($id,'$time','$day','$date','$month',$year,'$cause','$alarm','$establishment_type','$district','$latitude','$longitude','$amount_damage','$complete_address','$fatality','$injured'),";

    }

    $values = substr($values, 0, -1);

    //$sql = "INSERT INTO `reports_readable`( `userid`,`time`, `day`, `month`,`year`, `cause`, `alarm_level`, `temperature`, `establishment_type`, `district`) VALUES $values";
    $sql = "INSERT INTO `reports_readable_v2`(`USERID`,`TIME`, `DAY`,`DATE`, `MONTH`,`YEAR`, `CAUSE`, `ALERT_LEVEL`,  `ESTABLISHMENT`, `DISTRICT`,`LATITUDE`,`LONGITUDE`,`AMOUNT_OF_DAMAGE`,`COMPLETE_ADDRESS`,`FATALITY`,`INJURED`) VALUES $values";

    if ($conn->query($sql) === TRUE) {
        print "New record created successfully";
    } else {
        print "Error: " . $sql . "<br>" . $conn->error;
    }
}
CloseCon($conn);
?>