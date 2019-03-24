<?php
header("Access-Control-Allow-Origin: *");
error_reporting(0);
include 'access.php';
$model = $_GET['model'];

$conn = OpenCon();
//$sql = "SELECT * FROM classifier";
$sql = "insert into classifier (model) values('".$model."')";

if ($conn->query($sql) === TRUE) {
    print "New record created successfully";
} else {
    print "Error: " . $sql . "<br>" . $conn->error;
}
CloseCon($conn);
?>