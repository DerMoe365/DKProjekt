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
	$outs = drawArray();
	//$out = array("Nissan", "Toyota", "Yamaha");
	foreach (glob('../img/drawings/main/*.jpg') as $paths)
	{
		//$p = pathinfo($path);
	    $outs[] = $paths;
	}
	return $outs;
}
