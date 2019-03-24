<?php
header("Access-Control-Allow-Origin: *");
error_reporting(0);
include 'access.php';
$file   = $_GET['file'];
$id     = $_GET['id'];
if (!unlink($file)){
  echo ("Error deleting $file");
}
else{
  echo ("Deleted $file");
}
$conn = OpenCon();
$sql = "delete from fire_reports_file where id ='".$id."'";

if ($conn->query($sql) === TRUE) {
    echo "Record deleted successfully";
} else {
    echo "Error deleting record: " . $conn->error;
}
CloseCon();
