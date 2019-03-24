<?php
header("Access-Control-Allow-Origin: *");
error_reporting(0);
include 'access.php';
$userid = $_GET['userid'];
$conn = OpenCon();

$sql = "SELECT * FROM documents where userid = $userid";
if($userid == "GUEST"){
    $sql = "SELECT * FROM documents order by id desc";
}

$result = $conn->query($sql);

$rows = array();
while($r = mysqli_fetch_assoc($result)) {
    $rows[] = $r;
}
print json_encode($rows);
 
CloseCon($conn);
