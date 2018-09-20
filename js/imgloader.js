
	var files = [];
	var isFilesUpdated = false;
	
	inner();
	
    async function inner() {
        if (!isFilesUpdated)
		{
			loadFileNameArray();
            console.log("Sleeping");
            await sleep(1000);
            console.log("Finished sleeping > check again");
            return inner();
        } else {
		console.log("Files Array => " + files);
			files.forEach(function(element)
				{
					console.log(element);
					var newImage = document.createElement("IMG");
					newImage.setAttribute("src", element);
					newImage.setAttribute("width", "304");
					newImage.setAttribute("height", "228");
					document.getElementById("image_container").appendChild(newImage);
				});
			}
	}
	
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
	
    function ajaxGetFileNames() {
        return $.when($.ajax({
                url: '/files.php',
                method: 'POST',
                data: 'get_file_json',
                dataType: 'json'
            }))
            .then(null, function(jqXHR, textStatus, errorThrown) {
			    console.log("XHR: ", jqXHR);
				console.log("Err textStatus: ", textStatus);
				console.log("Err thrown: ", errorThrown);
                alert("Error sending request: " + errorThrown);
            });
    }
	
    async function fetchJSONResponseData(ajax) {
        try {
            var myJSONReturn = await ajax;
            console.log('async myJSONReturn:', myJSONReturn);
            return myJSONReturn;
        } catch (error) {
            console.log('Error in fetchJSONResponseData:', error);
        }
    }
	
    function loadFileNameArray() {
        try {
            fetchJSONResponseData(ajaxGetFileNames()).then(function(data) {
                    console.log('loadedFileNames data:', data);
					isFilesUpdated = true;
                    files = data;
                },
                function(error) {
                    console.log('Error in loadFileNameArray:', error);
					isFilesUpdated = true;
					files = "Error Loading FileNames !";
                });
        } catch (error) {
            console.log('Error in loadPatients:', error);
        }
    }
