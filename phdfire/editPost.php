<?php
header("Access-Control-Allow-Origin: *");
error_reporting(0);
include 'access.php';

$id = $_POST['id'];
$title = $_POST['title'];
$content = $_POST['content'];
$images = $_POST['images'];

$sql = "UPDATE POST set title='".$title."', content='".$content."',images='".$images."' where id =".$id;

$conn = OpenCon();

$result = $conn->query($sql);

$message->message = "error";
if($result){
    $message->message = 'success';
}
print json_encode($message);
 
CloseCon($conn);