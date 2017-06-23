<?php

	// 'info@phoenixmortgagegroup.com'
	$to =  'nbr1ninrsan@gmail.com';
    $subject = 'Phoenix Mortgage Group Calculator';

	if(isset($_POST['c_name']) && isset($_POST['c_email']) && isset($_POST['c_message'])){
   		$name    = $_POST['c_name'];
    	$from    = $_POST['c_email'];
    	$message = $_POST['c_message'];

		if (mail($to, $subject, $message, $from)) { 
			$result = array(
				'message' => '<h1>Successfully Sent to Phoenix Mortgage Group.</h1><br>'
				    .'<h4>Explore Phoenix Mortgage Group Online.</h4>'
				    .'<a href="http://www.phoenixmortgagegroup.com/Calculators/Menu.aspx"><img src="http://phoenixmortgagegroup.julius3d.com/img/logo-light.png" width="260px"></a>',
				'sendstatus' => 1
				);
			echo json_encode($result);
		} else { 
			$result = array(
				'message' => 'Sorry, something is wrong',
				'sendstatus' => 1
				);
			echo json_encode($result);
		} 
	}
?>