<?php

if (isset($_POST['get_file_json'])) {
	echo json_encode(getFileList());
}
else {
	// The correct POST variables were not sent to this page.
	echo 'Invalid Request';
}

function getFileList()
{
	$out = array();
	//$out = array("Nissan", "Toyota", "Yamaha");
	foreach (glob('pictures/*.jpg') as $path)
	{
		//$p = pathinfo($path);
	    $out[] = $path;
	}
	return $out;
}
