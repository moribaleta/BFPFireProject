<?php
header("Access-Control-Allow-Origin: *");
error_reporting(0);
include 'access.php';
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
   
    if (isset($_FILES['files'])) {
        $errors = [];
        $id = $_POST['userid'];
        $path = 'uploads/';
        $extensions = ['jpg', 'jpeg', 'png', 'gif','xls','csv','docx','xlsx'];

        $all_files = count($_FILES['files']['tmp_name']);
        $conn = OpenCon();
        for ($i = 0; $i < $all_files; $i++) {  
            $file_name = $_FILES['files']['name'][$i];
            $file_tmp = $_FILES['files']['tmp_name'][$i];
            $file_type = $_FILES['files']['type'][$i];
            $file_size = $_FILES['files']['size'][$i];
            $file_ext = strtolower(end(explode('.', $_FILES['files']['name'][$i])));
            $file_name_only = (explode('.', $_FILES['files']['name'][$i]))[0];

            $file = $path . $file_name;
            
            if (!in_array($file_ext, $extensions)) {
                $errors[] = 'Extension not allowed: ' . $file_name . ' ' . $file_type;
            }


            if ($file_size > 2097152) {
                $errors[] = 'File size exceeds limit: ' . $file_name . ' ' . $file_type;
            }

            if (empty($errors)) {
                if (file_exists($file)){
                    $exist = FALSE;
                    $i = 1;
                    while(!$exist){
                        $file = $path.$file_name_only.'_'.$i.'.'.$file_ext;
                        $file_name = $file_name_only.'_'.$i.'.'.$file_ext;
                         if(!file_exists($file))
                            $exist = TRUE;
                        $i++;
                    }
                    move_uploaded_file( $file_tmp, $file );

                    $sql = "INSERT INTO `fire_reports_file`( `filename`, `filepath`,`userid`) ";
                    $sql = $sql . "VALUES ('".$file_name."','".$file."','$id')";
                    if ($conn->query($sql) === TRUE) {
                        print "New record created successfully";
                    } else {
                        print "Error: " . $sql . "<br>" . $conn->error;
                    }                        
                    print "__".$file_name;
                } else {
                    move_uploaded_file($file_tmp, $file);
                    $sql = "INSERT INTO `fire_reports_file`( `filename`, `filepath`,`userid`) ";
                    $sql = $sql . "VALUES ('".$file_name."','".$file."','$id')";
                    if ($conn->query($sql) === TRUE) {
                        print "New record created successfully";
                    } else {
                        print "Error: " . $sql . "<br>" . $conn->error;
                    }
                    print "__".$file_name;
                }
            }
        }
        CloseCon($conn);
        //if ($errors) print_r($errors);
    }
}
?>