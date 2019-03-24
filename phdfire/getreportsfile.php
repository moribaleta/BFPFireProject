<?php
header("Access-Control-Allow-Origin: *");
error_reporting(0);
include 'access.php';
$userid = $_GET['userid'];
$conn = OpenCon();

$sql = "SELECT * FROM fire_reports_file where userid = $userid";
$result = $conn->query($sql);

$rows = array();
while($r = mysqli_fetch_assoc($result)) {
    $rows[] = $r;
}
print json_encode($rows);
 
CloseCon($conn);
