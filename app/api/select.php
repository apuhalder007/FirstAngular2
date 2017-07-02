<?php
header('Access-Control-Allow-Origin:*');

require_once('dbCon.php');
$sql = "Select * from todotbl";
$res = mysql_query($sql , $con);
while($row = mysql_fetch_assoc($res)){
$result[] = $row;
}

echo json_encode($result);


?>
