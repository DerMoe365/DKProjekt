
	var file = [];
	var isFileUpdated = false;
	
	inner();
	
    async function inner() {
        if (!isFileUpdated)
		{
			loadFileNameArray();
            console.log("Sleeping");
            await sleep(1000);
            console.log("Finished sleeping > check again");
            return inner();
        } else {
		console.log("Files Array => " + file);
			file.forEach(function(element)
				{
                    console.log(element);
                    var div = document.createElement("div");
                    div.setAttribute("class", "tat-gallery col-sm-6 col-md-3");
                   
                    var image = document.createElement("a");
                    image.setAttribute("href", element);
                    image.setAttribute("data-toggle", "lightbox");
                    image.setAttribute("data-gallery", "main-drawings-gallery");
                    
					var newImage = document.createElement("IMG");
					newImage.setAttribute("src", element);
                    newImage.setAttribute("class", "img-fluid");
                    newImage.setAttribute("alt", "Drawings");
                    image.appendChild(newImage);
                    div.appendChild(image);
					document.getElementById("draw_container").appendChild(div);
				});
			}
	}
     
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
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

    function ajaxGetFileNames() {
        return $.when($.ajax({
                url: '/php/draw.php',
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
    
    

	function loadFileNameArray() {
        try {
            fetchJSONResponseData(ajaxGetFileNames()).then(function(datas) {
                    console.log('loadedFileNames data:', datas);
					isFileUpdated = true;
                    file = datas;
                },
                function(error) {
                    console.log('Error in loadFileNameArray:', error);
					isFileUpdated = true;
					file = "Error Loading FileNames !";
                });
        } catch (error) {
            console.log('Error in loadPatients:', error);
        }
    }
    
    
    
	
   
