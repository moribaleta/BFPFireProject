<?php
header("Access-Control-Allow-Origin: *");
error_reporting(0);
include 'access.php';


$sql = "SELECT * FROM post ORDER BY id DESC";

if ($_GET['userid']){
    $userid = $_GET['userid'];
    if ($userid == "GUEST" || $userid == "ADMIN") {
        $sql = "SELECT * FROM post ORDER BY ID DESC";
    } else {
        $sql = "SELECT * FROM post where userid = '".$userid."'";
    }
} 

if ($_GET['id']) {
    $id = $_GET['id'];
    $sql = "SELECT * FROM post where id = '".$id."'";
}

$conn = OpenCon();

$result = $conn->query($sql);

$rows = array();
while($r = mysqli_fetch_assoc($result)) {
    $rows[] = $r;
}
print json_encode($rows);
 
CloseCon($conn);
