<?php
header("Access-Control-Allow-Origin: *");
error_reporting(0);
include 'access.php';
 
$conn = OpenCon();
$isReadable = $_GET['readable'];
$userid    = $_GET['userid'];

$sql = "SELECT * FROM reports";
if ($isReadable == "true") {
    $sql = "SELECT * FROM reports_readable";
} else {
    $sql = "SELECT * FROM reports";
}

if ($userid != null){
    $sql = $sql . " where userid=$userid";
}

$result = $conn->query($sql);

$rows = array();
while($r = mysqli_fetch_assoc($result)) {
    $rows[] = $r;
}
print json_encode($rows);
 
CloseCon($conn);


?>