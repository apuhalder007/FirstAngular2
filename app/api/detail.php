<?php
header("Access-Control-Allow-Origin:*");
header('Access-Control-Allow-Headers: X-Requested-With');
//header('Content-Type: application/json');
header('Access-Control-Allow-Methods: *');

require_once('dbCon.php');
$data = json_decode(file_get_contents('php://input'));
$id = $data->id;
$sql = "Select * from todotbl id=$id";
$res = mysql_query($sql , $con);
$result = mysql_fetch_assoc($res)
echo json_encode($result);


?>
