//Console.log out elements in JSON file

var videoObject = { // Had to add it to an variable to not get an error for first "video":
	"video": [{
		"id": 12312412312,
		"name": "Ecuaciones Diferenciales",
		"url": "/video/math/edo/12312412312",
		"author": {
			"data": [{
				"name_author": "Alejandro Morales",
				"url": "/author/alejandro-morales",
				"type": "master"
			}]
		}
	}]
};

(function () {
    for (var i = 0; i < videoObject.video.length; i++) {

        for (key in videoObject.video[i]) {
            if (videoObject.video[i].hasOwnProperty(key)) {
                    console.log(key + ": " + videoObject.video[i][key]);
                }
            };

        };

    var authorArray = videoObject.video[0].author.data;

    for (var j = 0; j < authorArray.length; j++) {
        for (key in authorArray[j]) {
            if (authorArray[j].hasOwnProperty(key)) {
                console.log(key + ": " + authorArray[j][key]);
            };

        };

    };
})();

// Had some issues being able to solve this "puzzle" of the loops, and this was the best i could
// think of. I guess there is an easier way to do it, and i want to learn it but i did the best i could for this one.
