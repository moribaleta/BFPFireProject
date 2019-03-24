<?php
header("Access-Control-Allow-Origin: *");
error_reporting(0);
include 'access.php';
$user               = $_POST['user'];
$name               = $user['name'];
$type               = $user['type'];
$password           = $user['password'];
$conn = OpenCon();
//$date = date("Y/m/d");
//$sql = "SELECT * FROM classifier";

$sql = "INSERT INTO `users`( `name`, `type`, `password`) VALUES ('$name','$type','$password')";

if ($conn->query($sql) === TRUE) {
    echo 'success';
} else {
    print "Error: " . $sql . "<br>" . $conn->error;
}
CloseCon($conn);
?>