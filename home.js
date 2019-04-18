var words = ['the', 'a', 'and', 'to', 'he', 'was', 'of', 'his', 'in', 'He', 'that', '--', 'on', 'as', 'had', 'Dursley', 'it', 'have', 'at', 'Mr.', 'I', 'be', 'said', 'Professor', 'all', 'were', 'Mrs.', 'you', "didn't", 'but', 'out', 'It', 'been', 'she', 'for', 'her', 'they', 'Dumbledore', 'very', 'people', 'over', 'into', 'cat', 'McGonagall', 'not', 'Harry', 'with', 'The', 'up', 'back', 'him', 'if', 'this', 'so', 'it.', 'about', "couldn't", 'down', 'their', 'would', 'could', 'what', 'never', 'even', 'them', '', '']

var dictX = {'the': 0.0368, 'a': 0.015524596, 'and': 0.023384454, 'to': 0.026889591, 'he': 0.031469506, 'was': 0.012212931, 'of': 0.003858626, 'his': 0.010748081, 'in': 0.017793765, 'He': 0.005725101, 'that': -0.000590799, '--': 0.01200492, 'on': -0.001475393, 'as': 0.013635457, 'had': 0.013343525, 'Dursley': -0.00067025, 'it': 0.004296135, 'have': -0.00276755, 'at': 0.002064972, 'Mr.': 0.001568443, 'I': 0.000706212, 'be': -6.44e-05, 'said': 0.001165745, 'Professor': -0.00725786, 'all': 0.007843377, 'were': 0.003064389, 'Mrs.': -0.003019557, 'you': -0.005213258, "didn't": 0.002246413, 'but': 0.005122186, 'out': -0.004270607, 'It': -0.005626236, 'been': 0.007941058, 'she': -0.003696502, 'for': -0.001400387, 'her': -0.002118532, 'they': -0.00175195, 'Dumbledore': -0.009824938, 'very': -0.00964945, 'people': -0.012467922, 'over': -0.001795577, 'into': -0.009653484, 'cat': -0.006457644, 'McGonagall': -0.00939135, 'not': -0.007103548, 'Harry': -0.01434121, 'with': -0.00539692, 'The': -0.006613328, 'up': -0.00498047, 'back': -0.002112093, 'him': -0.006163622, 'if': -0.000816477, 'this': -0.007277562, 'so': -0.007944278, 'it.': -0.009578176, 'about': -0.012605552, "couldn't": -0.008753345, 'down': -0.002905297, 'their': -0.010976626, 'would': -0.003682666, 'could': -0.010145803, 'what': -0.005130538, 'never': -0.014591398, 'even': -0.009234762, 'them': -0.009873174}

var dictY = {'the': 0.000596, 'a': -0.0058457, 'and': -0.001062689, 'to': -0.005753916, 'he': -0.003969845, 'was': -8.68e-05, 'of': 0.004810591, 'his': 0.005249444, 'in': -0.00102414, 'He': -0.000925238, 'that': 0.005278551, '--': 0.000128676, 'on': 0.001744516, 'as': 0.002683003, 'had': 0.003957428, 'Dursley': 0.000899778, 'it': 0.006624336, 'have': 0.001127077, 'at': -0.003761116, 'Mr.': -0.002387347, 'I': -0.00257054, 'be': 0.004244349, 'said': 0.000564243, 'Professor': -0.000559392, 'all': 0.003399072, 'were': -0.00054775, 'Mrs.': 0.000763509, 'you': 0.002460533, "didn't": 0.002168859, 'but': 0.001164062, 'out': -0.002938673, 'It': 0.002244475, 'been': 0.002347052, 'she': 0.000116356, 'for': -0.001396514, 'her': -0.002026057, 'they': -0.000586877, 'Dumbledore': -0.002333013, 'very': -0.000444303, 'people': -0.00337211, 'over': 0.003730248, 'into': 0.000505745, 'cat': -0.001407207, 'McGonagall': -0.006190419, 'not': -0.002375425, 'Harry': 0.001459977, 'with': -0.004787347, 'The': 0.000826665, 'up': -0.00156281, 'back': -0.001252397, 'him': -0.003161473, 'if': 0.007331562, 'this': -0.003071618, 'so': -0.002234807, 'it.': 0.00096603, 'about': 0.001567125, "couldn't": -0.001851783, 'down': -0.000887725, 'their': -0.000519181, 'would': -0.00366884, 'could': 0.002473025, 'what': -0.000409786, 'never': -0.003657266, 'even': 0.003478219, 'them': 0.003720039}

var dictZ = {'the': 0.00416, 'a': -0.003541731, 'and': 0.00210964, 'to': -0.000193004, 'he': -0.000881531, 'was': -0.001949914, 'of': -0.002944002, 'his': -0.003697472, 'in': -0.005251133, 'He': -0.002049407, 'that': 0.002573964, '--': 0.004325169, 'on': 0.001471328, 'as': 0.003965077, 'had': 0.000212429, 'Dursley': 0.002545179, 'it': -0.004619717, 'have': -0.000262265, 'at': 0.001549398, 'Mr.': 0.000829124, 'I': -0.001765788, 'be': 0.001634682, 'said': 0.004967472, 'Professor': -0.003828306, 'all': 0.001316748, 'were': -0.005880527, 'Mrs.': -0.001838716, 'you': -0.002584983, "didn't": 0.001770102, 'but': -0.006609503, 'out': 0.002520792, 'It': -0.001747678, 'been': -0.001361016, 'she': 0.003158704, 'for': 0.002946087, 'her': 0.002156832, 'they': 0.002253093, 'Dumbledore': 0.001587571, 'very': 0.002150701, 'people': -0.003851277, 'over': 0.001010274, 'into': -0.004086439, 'cat': 0.002005473, 'McGonagall': 0.000332299, 'not': -0.003457683, 'Harry': -0.003034856, 'with': 0.003838228, 'The': 0.001014332, 'up': 0.002461607, 'back': -0.000885978, 'him': 0.001646949, 'if': 0.002188061, 'this': 0.002960937, 'so': -0.002566123, 'it.': -0.002482304, 'about': 0.003230376, "couldn't": 0.001003007, 'down': -0.003231551, 'their': -0.00198318, 'would': 0.000399691, 'could': 0.00851905, 'what': -0.00288925, 'never': -0.000526784, 'even': 0.001050038, 'them': -0.001864439}

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
		renderer.setSize(document.body.offsetWidth/2, document.body.offsetHeight/2);
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

function find_nn(word, number) {
	console.log("Find", number, "nearest neighbors for", word);
}

function find_path(from_word, to_word) {
	console.log("Find path from ", from_word, "to", to_word);
}

Util.events(document, {
	// Final initalization entry point: the Javascript code inside this block
	// runs at the end of start-up when the DOM is ready

	"DOMContentLoaded": function(e) {
		// want to load sections and classes list
		showVizualization();
		}

});