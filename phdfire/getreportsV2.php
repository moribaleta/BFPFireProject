<?php
header("Access-Control-Allow-Origin: *");
//error_reporting(0);
include 'access.php';
 
$conn = OpenCon();
$sql = "SELECT * FROM reports_readable_v2";

$result = $conn->query($sql);

$rows = array();

while($r = mysqli_fetch_assoc($result)) {
    $rows[] = $r;
}
print json_encode($rows);
 
CloseCon($conn);


?>