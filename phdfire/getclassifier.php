<?php
header("Access-Control-Allow-Origin: *");
error_reporting(0);
include 'access.php';
 
$conn = OpenCon();

$sql = "SELECT * FROM classifier";
$result = $conn->query($sql);

$rows = array();
while($r = mysqli_fetch_assoc($result)) {
    $rows[] = $r;
}
print json_encode($rows);
 
CloseCon($conn);


?>