var words = ['the', 'a', 'and', 'to', 'he', 'was', 'of', 'his', 'in', 'He', 'that', '--', 'on', 'as', 'had', 'Dursley', 'it', 'have', 'at', 'Mr.', 'I', 'be', 'said', 'Professor', 'all', 'were', 'Mrs.', 'you', "didn't", 'but', 'out', 'It', 'been', 'she', 'for', 'her', 'they', 'Dumbledore', 'very', 'people', 'over', 'into', 'cat', 'McGonagall', 'not', 'Harry', 'with', 'The', 'up', 'back', 'him', 'if', 'this', 'so', 'it.', 'about', "couldn't", 'down', 'their', 'would', 'could', 'what', 'never', 'even', 'them', '', '']

var dictX = {'the': 0.0368, 'a': 0.015524596, 'and': 0.023384454, 'to': 0.026889591, 'he': 0.031469506, 'was': 0.012212931, 'of': 0.003858626, 'his': 0.010748081, 'in': 0.017793765, 'He': 0.005725101, 'that': -0.000590799, '--': 0.01200492, 'on': -0.001475393, 'as': 0.013635457, 'had': 0.013343525, 'Dursley': -0.00067025, 'it': 0.004296135, 'have': -0.00276755, 'at': 0.002064972, 'Mr.': 0.001568443, 'I': 0.000706212, 'be': -6.44e-05, 'said': 0.001165745, 'Professor': -0.00725786, 'all': 0.007843377, 'were': 0.003064389, 'Mrs.': -0.003019557, 'you': -0.005213258, "didn't": 0.002246413, 'but': 0.005122186, 'out': -0.004270607, 'It': -0.005626236, 'been': 0.007941058, 'she': -0.003696502, 'for': -0.001400387, 'her': -0.002118532, 'they': -0.00175195, 'Dumbledore': -0.009824938, 'very': -0.00964945, 'people': -0.012467922, 'over': -0.001795577, 'into': -0.009653484, 'cat': -0.006457644, 'McGonagall': -0.00939135, 'not': -0.007103548, 'Harry': -0.01434121, 'with': -0.00539692, 'The': -0.006613328, 'up': -0.00498047, 'back': -0.002112093, 'him': -0.006163622, 'if': -0.000816477, 'this': -0.007277562, 'so': -0.007944278, 'it.': -0.009578176, 'about': -0.012605552, "couldn't": -0.008753345, 'down': -0.002905297, 'their': -0.010976626, 'would': -0.003682666, 'could': -0.010145803, 'what': -0.005130538, 'never': -0.014591398, 'even': -0.009234762, 'them': -0.009873174}

var dictY = {'the': 0.000596, 'a': -0.0058457, 'and': -0.001062689, 'to': -0.005753916, 'he': -0.003969845, 'was': -8.68e-05, 'of': 0.004810591, 'his': 0.005249444, 'in': -0.00102414, 'He': -0.000925238, 'that': 0.005278551, '--': 0.000128676, 'on': 0.001744516, 'as': 0.002683003, 'had': 0.003957428, 'Dursley': 0.000899778, 'it': 0.006624336, 'have': 0.001127077, 'at': -0.003761116, 'Mr.': -0.002387347, 'I': -0.00257054, 'be': 0.004244349, 'said': 0.000564243, 'Professor': -0.000559392, 'all': 0.003399072, 'were': -0.00054775, 'Mrs.': 0.000763509, 'you': 0.002460533, "didn't": 0.002168859, 'but': 0.001164062, 'out': -0.002938673, 'It': 0.002244475, 'been': 0.002347052, 'she': 0.000116356, 'for': -0.001396514, 'her': -0.002026057, 'they': -0.000586877, 'Dumbledore': -0.002333013, 'very': -0.000444303, 'people': -0.00337211, 'over': 0.003730248, 'into': 0.000505745, 'cat': -0.001407207, 'McGonagall': -0.006190419, 'not': -0.002375425, 'Harry': 0.001459977, 'with': -0.004787347, 'The': 0.000826665, 'up': -0.00156281, 'back': -0.001252397, 'him': -0.003161473, 'if': 0.007331562, 'this': -0.003071618, 'so': -0.002234807, 'it.': 0.00096603, 'about': 0.001567125, "couldn't": -0.001851783, 'down': -0.000887725, 'their': -0.000519181, 'would': -0.00366884, 'could': 0.002473025, 'what': -0.000409786, 'never': -0.003657266, 'even': 0.003478219, 'them': 0.003720039}

var dictZ = {'the': 0.00416, 'a': -0.003541731, 'and': 0.00210964, 'to': -0.000193004, 'he': -0.000881531, 'was': -0.001949914, 'of': -0.002944002, 'his': -0.003697472, 'in': -0.005251133, 'He': -0.002049407, 'that': 0.002573964, '--': 0.004325169, 'on': 0.001471328, 'as': 0.003965077, 'had': 0.000212429, 'Dursley': 0.002545179, 'it': -0.004619717, 'have': -0.000262265, 'at': 0.001549398, 'Mr.': 0.000829124, 'I': -0.001765788, 'be': 0.001634682, 'said': 0.004967472, 'Professor': -0.003828306, 'all': 0.001316748, 'were': -0.005880527, 'Mrs.': -0.001838716, 'you': -0.002584983, "didn't": 0.001770102, 'but': -0.006609503, 'out': 0.002520792, 'It': -0.001747678, 'been': -0.001361016, 'she': 0.003158704, 'for': 0.002946087, 'her': 0.002156832, 'they': 0.002253093, 'Dumbledore': 0.001587571, 'very': 0.002150701, 'people': -0.003851277, 'over': 0.001010274, 'into': -0.004086439, 'cat': 0.002005473, 'McGonagall': 0.000332299, 'not': -0.003457683, 'Harry': -0.003034856, 'with': 0.003838228, 'The': 0.001014332, 'up': 0.002461607, 'back': -0.000885978, 'him': 0.001646949, 'if': 0.002188061, 'this': 0.002960937, 'so': -0.002566123, 'it.': -0.002482304, 'about': 0.003230376, "couldn't": 0.001003007, 'down': -0.003231551, 'their': -0.00198318, 'would': 0.000399691, 'could': 0.00851905, 'what': -0.00288925, 'never': -0.000526784, 'even': 0.001050038, 'them': -0.001864439}

function getPositionX(word){
	return dictX[word];
}

function getPositionY(word){
	return dictY[word];
}

function getPositionZ(word){
	return dictZ[word];
}

function getWord(index){
	return words[index];
}

function showVizualization() {

	var getRandomColor = function() {
		return chance.color({format: 'hex'});
	};
	var getRandomFontFamily = function() {
		return chance.pickone([
			'Georgia, serif',
			'"Palatino Linotype", "Book Antiqua", Palatino, serif',
			'"Times New Roman", Times, serif',
			'Arial, Helvetica, sans-serif',
			'"Arial Black", Gadget, sans-serif',
			'"Comic Sans MS", cursive, sans-serif',
			'Impact, Charcoal, sans-serif',
			'"Lucida Sans Unicode", "Lucida Grande", sans-serif',
			'Tahoma, Geneva, sans-serif',
			'"Trebuchet MS", Helvetica, sans-serif',
			'Verdana, Geneva, sans-serif',
			'"Courier New", Courier, monospace',
			'"Lucida Console", Monaco, monospace',
		]);
	};

	var ltext = "Label\nthe\na\nand\nto\nhe\nwas\nof\nhis\nin\nHe\nthat\n--\non\nas\nhad\nDursley\nit\nhave\nat\nMr.\nI\nbe\nsaid\nProfessor\nall\nwere\nMrs.\nyou\ndidn't\nbut\nout\nIt\nbeen\nshe\nfor\nher\nthey\nDumbledore\nvery\npeople\nover\ninto\ncat\nMcGonagall\nnot\nHarry\nwith\nThe\nup\nback\nhim\nif\nthis\nso\nit.\nabout\ncouldn't\ndown\ntheir\nwould\ncould\nwhat\nnever\neven\nthem\n\n";

	function getRandomInt(max) {
	  return Math.floor(Math.random() * Math.floor(max));
	}


	var getRandomText = function() {
		
		return Array
			.from({length: 1})
			.map(function(){
				return Array
				.from({length: 1})
				.map(function() {
					var i = getRandomInt(words.length);
					return words[i];
				})
				.join(' ');
			})
			.join('\n');
			

		
		//return parsed_labels;
		/*
		return Array
			.from({length: chance.weighted([1, 2, 3], [2, 3, 1])})
			.map(function() {
				return Array
					.from({length: chance.weighted([1, 2, 3], [2, 3, 1])})
					.map(function() {
						return chance.word();
					})
					.join(' ');
			})
			.join('\n');
			*/
			
	};
	var getRandomTextSize = function() {
		return chance.floating({min: 1, max: Math.pow(2, 8)});
	};

	console.log("RANDOM TEXT");
	console.log(getRandomText);
	var renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
	renderer.setPixelRatio(devicePixelRatio);
	renderer.setClearColor( 0xffffff, 0 );
	vizTag = document.getElementById("viz")
	vizTag.appendChild(renderer.domElement);
	var scene = new THREE.Scene();
	var camera = new THREE.PerspectiveCamera(45, 1, 1, Math.pow(2, 17));
	camera.position.set(0, 0, Math.pow(2, 14));
	var redrawInterval = 1;
	var index = 0;
	var sprites = Array
		.from({length: words.length})
		.map(function() {

			var textValue = getWord(index);//getRandomText(); 
			var sprite = new THREE.TextSprite({
				textSize: 1000,//parsed_labels, //ltext,// getRandomTextSize(),
				redrawInterval: redrawInterval,
				material: {
					color: getRandomColor(),
				},
				texture: {
					text: textValue, //getRandomText(),//'Be happy',//getRandomText(),//'Be happy', //['Label', 'the', 'a', 'and', 'to', 'he', 'was', 'of', 'his', 'in', 'He', 'that', '--', 'on', 'as', 'had', 'Dursley', 'it', 'have', 'at', 'Mr.', 'I', 'be', 'said', 'Professor', 'all', 'were', 'Mrs.', 'you', "didn't", 'but', 'out', 'It', 'been', 'she', 'for', 'her', 'they', 'Dumbledore', 'very', 'people', 'over', 'into', 'cat', 'McGonagall', 'not', 'Harry', 'with', 'The', 'up', 'back', 'him', 'if', 'this', 'so', 'it.', 'about', "couldn't", 'down', 'their', 'would', 'could', 'what', 'never', 'even', 'them', '', ''],
					fontFamily: 'Georgia, serif',//getRandomFontFamily(),
				},
			}); index++;
			(function() {

				var x = getPositionX(textValue);
				var y = getPositionY(textValue);
				var z = getPositionZ(textValue);
				
				sprite.position
						.setX(x)
						.setY(y)
						.setZ(z)
						.setLength(chance.floating({min: Math.pow(2, 11), max: Math.pow(2, 13)}));
				
			})();
			scene.add(sprite);
			return sprite;
		});
	var controls = new THREE.OrbitControls(camera, renderer.domElement);
	controls.maxDistance = camera.far/2;
	controls.enableDamping = true;
	controls.dampingFactor = 1/8;
	controls.rotateSpeed = 1/4;
	controls.zoomSpeed = 1;
	controls.keyPanSpeed = 1/2;
	var renderScene = function() {
		renderer.setSize(document.body.offsetWidth/1.5, document.body.offsetHeight/1.5);
		camera.aspect = renderer.domElement.width / renderer.domElement.height;
		camera.updateProjectionMatrix();
		controls.update();
		renderer.render(scene, camera);
	};
	window.addEventListener('resize', renderScene, false);
	(function() {
		var run = function() {
			requestAnimationFrame(function() {
				setTimeout(run, 1000/60);
			});
			renderScene();
		};
		run();
	})();

	// Uncomment for control box on top right:
	// var gui = new dat.GUI();
	// (function() {
	// 	var guiFolder = gui.addFolder('texture');
	// 	guiFolder.add({
	// 		text: function() {
	// 			sprites.forEach(function(sprite) {
	// 				sprite.material.map.text = getRandomText();
	// 			});
	// 		},
	// 	}, 'text');
	// 	guiFolder.add({
	// 		fontFamily: function() {
	// 			sprites.forEach(function(sprite) {
	// 				sprite.material.map.fontFamily = getRandomFontFamily();
	// 			});
	// 		},
	// 	}, 'fontFamily');
	// 	guiFolder.open();
	// })();
	// (function() {
	// 	var guiFolder = gui.addFolder('sprite');
	// 	guiFolder.add({
	// 		textSize: function() {
	// 			sprites.forEach(function(sprite) {
	// 				sprite.textSize = getRandomTextSize();
	// 			});
	// 		},
	// 	}, 'textSize');
	// 	guiFolder.add(Object.defineProperty({}, 'redrawInterval', {
	// 		get: function() {
	// 			return redrawInterval;
	// 		},
	// 		set: function(value) {
	// 			redrawInterval = value;
	// 			sprites.forEach(function(sprite) {
	// 				sprite.redrawInterval = redrawInterval;
	// 			});
	// 		},
	// 	}), 'redrawInterval', 0, 2000, 1);
	// 	guiFolder.open();
	// })();

}


function getTextInput(){
	text = document.getElementById("textinput").value;
	if(text == ""){
		return null;
	}
    text_no_punc = text.match(/[^_\W]+/g).join(' ');
	words_array = text_no_punc.split(" ");
	return words_array;

}

function getEmbeddings(){
	words_array = getTextInput();
	if(words_array == null){
		return 
	}
	final_embeddings = null;
	pca_embeddings = null;

	var opt = {}
	opt.dim = 3; // dimensionality of the embedding (2 = default)
	opt.epsilon = 10; // epsilon is learning rate (10 = default)
	opt.perplexity = 30; // roughly how many neighbors each point influences (30 = default)
	var tsne = new tsnejs.tSNE(opt); // create a tSNE instance

	// Load the model.
	use.load().then(model => {
	  // Embed an array of sentences.
	  const words = words_array;
	  model.embed(words).then(embeddings => {
	    // `embeddings` is a 2D tensor consisting of the 512-dimensional embeddings for each sentence.
	    // So in this example `embeddings` has the shape [2, 512].
	    embeddings.print(/* verbose */);

		// flatten array
		let arr = embeddings.dataSync()

		//convert to multiple dimensional array
		shape = embeddings.shape
		shape.reverse().map(a => {
		  arr = arr.reduce((b, c) => {
		  latest = b[b.length - 1]
		  latest.length < a ? latest.push(c) : b.push([c])
		  return b
		}, [[]])
		})
	   

	    tsne.initDataRaw(arr[0]);
	    for(var k = 0; k < 500; k++) {
		  tsne.step(); // every time you call this, solution gets better
		}
		pca_embeddings = tsne.getSolution(); // Y is an array of 3-D points that you can plot
		
	  
	  });
	});

	// Remove old visualization if it exists
	vizTag = document.getElementById("viz")
	if (vizTag.hasChildNodes()) {
		vizTag.removeChild(vizTag.childNodes[0]);  
	}

	// showVizualization(words_array, pca_embeddings)

}

function getEuclideanDistance(word1, word2) {
	var sum = Math.pow(getPositionX(word1) - getPositionX(word2), 2) + Math.pow(getPositionY(word1) - getPositionY(word2), 2) + Math.pow(getPositionZ(word1) - getPositionZ(word2), 2)
	return Math.sqrt(sum)
}

function findNN(word, number) {
	var neighbors_result;

	// Check word exists in embeddings
	if (!words.includes(word)) {
		neighbors_result = word + " does not exist in the graph. Please try another word."
	} else {
		// Get distances from 'word' to every other word (neighbor) in 'words' list
		var distances = {};
		for (var i = 0; i < words.length; i++) {
			if (words[i] != word && words[i] != "") {  // disregard 'word' itself and '' (empty string)
				distances[words[i]] = getEuclideanDistance(word, words[i]);
			}
		}

		// Sort neighbors by distance from 'word'
		var neighbors = Object.keys(distances).map(function(key) {
		  return [key, distances[key]];
		});
		neighbors.sort(function(first, second) {
		  return second[1] - first[1];
		});
		neighbors.reverse(); // sorted from least to most distance from 'word'

		// Display 'number'-nearest neighbors
		if (number == 1) {
			neighbors_result = "The " + number + " nearest neighbor to " + word  + " is: "
		} else {
			neighbors_result = "The " + number + " nearest neighbors to " + word  + " are: "
		}
		for (var i = 0; i < number; i++) {
			if (i == neighbors.length) { break; }
			console.log("Neighbor", i + 1, "is", neighbors[i][0]);
			if (i == number - 1) {
				neighbors_result += neighbors[i][0] + ".";
				break;
			}
			neighbors_result += neighbors[i][0] + ", ";
		}
	}
	
	document.getElementById("neighbors_result").innerHTML = neighbors_result;
	document.getElementById("find_nn_result").style.display = "inline";
}

function findPath(from_word, to_word) {

	var path_result;

	// Check words exists in embeddings
	if (!words.includes(from_word) || !words.includes(to_word)) {
		path_result = from_word + " and/or " + to_word + " do not exist in the graph. Please try another word."
	} else {
		// Initialize path
		var path = [];
		path.push(from_word);
		path_result = "The path from " + from_word + " to " + to_word + " is: "
		while (from_word != to_word) {
			var from_to_distance = getEuclideanDistance(from_word, to_word);
			// get all distances from all points to to_word
			var distances_to = {}
			for (var i = 0; i < words.length; i++) {
				if (words[i] != from_word && words[i] != to_word && words[i] != "") {  // disregard 'from_word', 'to_word', and '' (empty string)
					distances_to[words[i]] = getEuclideanDistance(to_word, words[i]);
				}
			}
			if (distances_to.length == 0) { break; }

			// Sort neighbors by distance from 'to_word'
			var neighbors_to = Object.keys(distances_to).map(function(key) {
			  return [key, distances_to[key]];
			});
			neighbors_to.sort(function(first, second) {
			  return second[1] - first[1];
			});
			neighbors_to.reverse(); // sorted from least to most distance from 'to_word'

			// throw out values greater than from_to_distance
			var filtered = []
			for (var i = 0; i < neighbors_to.length; i++) {
				if (neighbors_to[i][1] <= from_to_distance) {
					filtered.push(neighbors_to[i])
				}
			}
			if (filtered.length == 0) {  // no closer points, so terminate
				if (path[-1] != to_word) {
					path.push(to_word);
				}
				break;
			}

			// from filtered neighbors, pick the one closest to from_word, and set it as new from_word
			// get all distances from filtered points to from_word
			var distances_from = {}
			for (var i = 0; i < filtered.length; i++) {
				distances_from[filtered[i][0]] = getEuclideanDistance(from_word, filtered[i][0]);
			}

			if (distances_from.length == 0) { break; }

			// Sort neighbors by distance from 'from_word'
			var neighbors_from = Object.keys(distances_from).map(function(key) {
			  return [key, distances_from[key]];
			});
			neighbors_from.sort(function(first, second) {
			  return second[1] - first[1];
			});
			neighbors_from.reverse(); // sorted from least to most distance from 'from_word'

			// update from_word, and push to path
			from_word = neighbors_from[0][0];
			path.push(from_word);
		}

		console.log(path);

		for (var i = 0; i < path.length; i++) {
			if (i == path.length - 1) {
				path_result += path[i];
				break;
			}
			path_result += path[i] + " ----> "
		}
	}

	
	document.getElementById("path_result").innerHTML = path_result;
	document.getElementById("find_path_result").style.display = "inline";
}

Util.events(document, {
	// Final initalization entry point: the Javascript code inside this block
	// runs at the end of start-up when the DOM is ready

	"DOMContentLoaded": function(e) {
		// want to load sections and classes list
		showVizualization();

		// hide the nearest neighbor and path results sections on loading
		document.getElementById("find_nn_result").style.display = "none";
		document.getElementById("find_path_result").style.display = "none";
	}

});