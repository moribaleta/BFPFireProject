    <?php
    header("Access-Control-Allow-Origin: *");
    error_reporting(0);
include 'access.php';
$conn = OpenCon();
$id = $_POST['id'];
$sql = "delete from reports_readable where id=$id";
if ($conn->query($sql) === TRUE) {
    echo "Record deleted successfully";
} else {
    echo "Error deleting record: " . $conn->error;
}
CloseCon();
