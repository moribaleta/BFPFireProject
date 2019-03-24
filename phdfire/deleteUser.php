<?php
header("Access-Control-Allow-Origin: *");
error_reporting(0);
include 'access.php';

$id                 = $_POST['id'];
$conn = OpenCon();
//$date = date("Y/m/d");
//$sql = "SELECT * FROM classifier";

$sql = "delete from `users` where id = $id";

if ($conn->query($sql) === TRUE) {
    echo 'success';
} else {
    print "Error: " . $sql . "<br>" . $conn->error;
}
CloseCon($conn);
?>