<?php
$dbHost = 'localhost';
$dbUser = 'root';
$dbPass = '';
$dbName = 'tododb';

$con = mysql_connect($dbHost, $dbUser, $dbPass) or die('Database Connection Error');
mysql_select_db($dbName, $con) or die('Database not found');
?>