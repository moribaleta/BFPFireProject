    <?php
    header("Access-Control-Allow-Origin: *");
    error_reporting(0);
include 'access.php';
$conn = OpenCon();
$id = $_GET['id'];

$sql = "select * post where id=".$id;

$result = $conn->query($sql);
$row = null;
while($r = mysqli_fetch_assoc($result)) {
    $row = $r;
}

$images = json_decode($row['images']);

foreach ($images as $image){
    if(file_exists("uploads/".$image)){
        unlink($image);
    }
}

$sql = "delete from post where id =".$id;

if ($conn->query($sql) === TRUE) {
    echo "Record deleted successfully";
} else {
    echo "Error deleting record: " . $conn->error;
}
CloseCon();
