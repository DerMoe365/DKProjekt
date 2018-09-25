<?php

if (isset($_POST['get_tattoos'])) {
	echo json_encode(getFileList('../img/tattoos/main/*.jpg'));
}
elseif (isset($_POST['get_drawings'])) {
	echo json_encode(getFileList('../img/drawings/main/*.jpg'));

}
elseif (isset($_POST['get_art'])) {
	echo json_encode(getFileList('../img/3D/main/*.jpg'));

}
elseif (isset($_POST['get_street'])) {
	echo json_encode(getFileList('../img/streetart/main/*.jpg'));

}
elseif (isset($_POST['get_graphic'])) {
	echo json_encode(getFileList('../img/gdesign/main/*.jpg'));

}
else {
	// The correct POST variables were not sent to this page.
	echo 'Invalid Request';
}

function getFileList($pics)
{
	$out = array();
	//$out = array();
	foreach (glob($pics) as $path)
	{
		//$p = pathinfo($path);
	    $out[] = $path;
	}
	return $out;
}
