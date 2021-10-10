<?php
    $response = "";
    $data = $_POST["data"];
    //var_dump($data);

    // No further processing, because for this simple app, the logic is mostly in the frontend.
    // For actual use, however, the data should be stored in a database.
    
    if (is_null($data)) {
    	return -1;
    }
    return 0;
?>