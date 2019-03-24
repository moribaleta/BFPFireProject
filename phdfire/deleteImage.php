<?php
header("Access-Control-Allow-Origin: *");
error_reporting(0);
$image = $_GET['image'];

if (!unlink("uploads/".$image))
  {
  echo ("Error deleting $image");
  }
else
  {
  echo ("Deleted $image");
  }
?>
