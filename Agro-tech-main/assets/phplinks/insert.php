<?php
    error_reporting(0);
    session_start();

	# Host and Database Connectivity
	# -------------------------------
	$conn 	= mysqli_connect("localhost","root","","farmershome") or die("Database not connected:");
	
	extract($_POST);
	
	# Search if Specified email Exists
	# ----------------------------------------
	$sqlstr = "SELECT * FROM regusers WHERE email ='$email'";
	$result = mysqli_query($conn,$sqlstr) or die ("Error Encountered: ".mysqli_error($conn));
	$rowcount = mysqli_num_rows($result);
	if ($rowcount==0){
		# Record Insertion 
		# ----------------
		$sqlstr = "INSERT INTO regusers (fullname,address,phonenumber,email,password)VALUES('$FullName','$address','$phonenum','$email','$password')";
		$result = mysqli_query($conn,$sqlstr) or die ("Record not Inserted: ".mysqli_error($conn));
		echo 1;		
	}else{
		echo 2;	
	}	
	


?>