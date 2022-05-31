<?php

error_reporting(0);
session_start();

# Host and Database Connectivity
# -------------------------------
$conn 	= mysqli_connect("localhost","root","","farmershome") or die("Database not connected:");

extract($_POST);


$sql    = 	"SELECT * FROM `regusers` WHERE email='$email' AND password='$password'";
$query 	=	mysqli_query($conn ,$sql);
$num   	=	mysqli_num_rows($query);


if ($num ==1){
	echo 2;
}
else{
        echo 1;
    }
    


?>