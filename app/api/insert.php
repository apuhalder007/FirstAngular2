<?php
header("Access-Control-Allow-Origin:*");
header('Access-Control-Allow-Headers: X-Requested-With');
//header('Content-Type: application/json');
header('Access-Control-Allow-Methods: *');


require_once('dbCon.php');

$data = json_decode(file_get_contents('php://input'));
$handler = fopen('data.txt', 'w');
fwrite($handler, var_export($data));
die();
$text = $data->text;
//$text  = 'New Task';
$sql = "insert into todotbl(text) values('".$text."')";
echo $res = mysql_query($sql , $con);

?>