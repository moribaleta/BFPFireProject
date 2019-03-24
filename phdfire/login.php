<?php
header("Access-Control-Allow-Origin: *");
//error_reporting(0);
include 'access.php';
//var_dump($_GET);
$user = $_POST['user'];
$username   = $user['username'];
$password   = $user['password'];

 $sql = "Select id,type from users where name = '$username' && password = '$password'";
 $conn = OpenCon();

 $result = $conn->query($sql);

$rows = mysqli_fetch_assoc($result);

if ($rows['id']){
    //echo "fuck";//json_encode($rows);
    //var_dump($rows);
    echo json_encode($rows);
} else {
    echo "error".mysqli_error($conn);
}

CloseCon($conn);
