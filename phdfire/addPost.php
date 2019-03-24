<?php
header("Access-Control-Allow-Origin: *");
error_reporting(0);
include 'access.php';

$title = $_POST['title'];
$content = $_POST['content'];
$userid = $_POST['userid'];
//$sql = "UPDATE POST set title='".$title."', content='".$content."',images='".$images."' where id =".$id;

extract($_POST);
$error = array();
$extension = array("jpeg", "jpg", "png", "gif","PNG");
$images_path = array();
foreach ($_FILES["files"]["tmp_name"] as $key => $tmp_name) {
    $file_name = $_FILES["files"]["name"][$key];
    $file_tmp = $_FILES["files"]["tmp_name"][$key];
    $ext = pathinfo($file_name, PATHINFO_EXTENSION);
    if (in_array($ext, $extension)) {
        if (!file_exists("uploads/" . $file_name)) {
            move_uploaded_file($file_tmp = $_FILES["files"]["tmp_name"][$key], "uploads/" . $file_name);
        } else {
            $filename = basename($file_name, $ext);
            $newFileName = $filename . time() . "." . $ext;
            move_uploaded_file($file_tmp = $_FILES["files"]["tmp_name"][$key], "uploads/" . $newFileName);
        }
    } else {
        array_push($error, "$file_name, ");
    }
    array_push($images_path,$file_name);
}

$images_path = json_encode($images_path);

$title = str_replace("'","''",$title);
$content = str_replace("'","''",$content);


$sql = "INSERT INTO `post` (`title`,`content`,`images`,`userid`) values( '".$title."','".$content."','".$images_path."',".$userid.")";

$conn = OpenCon();

$result = $conn->query($sql);

$message->message   = "error".mysqli_error($conn);
$message->sql       = $sql; 

if ($result) {
    $message->message = 'success';
}
print json_encode($message);

CloseCon($conn);
