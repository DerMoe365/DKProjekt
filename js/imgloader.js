
	var file = [];
    var isFileUpdated = false; 


    async function inner(post_data, gallery, alt, container) {
        console.log(post_data, gallery, alt, container);
        
            if (!isFileUpdated)
		    {
			    loadFileNameArray(post_data);
                console.log("Sleeping");
                await sleep(1000);
                console.log("Finished sleeping > check again");
                return inner(post_data, gallery, alt, container);
            } else {
                console.log("Files Array => " + file);
                if(document.getElementById(container).children.length > 0){
                        console.log("Has Childs");
                        console.log(document.getElementById(container).children.length);
                }else{
			        file.forEach(function(element)
				    {
                        console.log(element);
                        var div = document.createElement("div");
                        div.setAttribute("class", "tat-gallery col-sm-6 col-md-3");
                   
                        var image = document.createElement("a");
                        image.setAttribute("href", element);
                        image.setAttribute("data-toggle", "lightbox");
                        image.setAttribute("data-gallery", gallery);
                    
					    var newImage = document.createElement("IMG");
					    newImage.setAttribute("src", element);
                        newImage.setAttribute("class", "img-fluid");
                        newImage.setAttribute("alt", alt);

                        image.appendChild(newImage);
                        div.appendChild(image);
					    document.getElementById(container).appendChild(div);
                    });
                    file = [];
                    isFileUpdated = false;
                }
                file = [];
                isFileUpdated = false;
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

    function ajaxGetFileNames(post_data) {
        console.log(post_data);
        return $.when($.ajax({
                url: '/php/file.php',
                method: 'POST',
                data: post_data,
                dataType: 'json'
            }))
            .then(null, function(jqXHR, textStatus, errorThrown) {
			    console.log("XHR: ", jqXHR);
				console.log("Err textStatus: ", textStatus);
				console.log("Err thrown: ", errorThrown);
                alert("Error sending request: " + errorThrown);
            });
    }
    
    

	function loadFileNameArray(post_data) {
        try {
            fetchJSONResponseData(ajaxGetFileNames(post_data)).then(function(data) {
                    console.log('loadedFileNames data:', data);
					isFileUpdated = true;
                    file = data
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

    
    
	
   
