////////////////////// OBJ LOADER


			var manager = new THREE.LoadingManager();
				manager.onProgress = function ( item, loaded, total ) {
					console.log( item, loaded, total );
				};

					var onProgress = function ( xhr ) {
					if ( xhr.lengthComputable ) {
						var percentComplete = xhr.loaded / xhr.total * 100;
						console.log( Math.round(percentComplete, 2) + '% downloaded' );
					}
				};
				var onError = function ( xhr ) {
				};
//mesha modrega in oranžnega portala zlovdamo iz obj fajla

function loadButton(){
	var texture = new THREE.Texture();

		var loader = new THREE.ImageLoader( manager );
		loader.load( 'textures/Button.bmp', function ( image ) {
			texture.image = image;
			texture.needsUpdate = true;
				} );


	var loader = new THREE.OBJLoader( manager );
				loader.load( "models/portalbutton.obj", function ( object ) {

					object.traverse( function ( child ) {
						if ( child instanceof THREE.Mesh ) {
							child.material.map = texture;
						}
					} );

				buttonObj = object;
				buttonLoaded = true;
				}, onProgress, onError );
}
function loadPortalsObj(){
	var loader = new THREE.OBJLoader( manager );
				loader.load( "models/portalFin.obj", function ( object ) {
				bluePortalObj = object;
				orangePortalObj = bluePortalObj.clone();
				}, onProgress, onError );

}
function loadGunObj(){
	var texture = new THREE.Texture();

		var loader = new THREE.ImageLoader( manager );
		loader.load( 'textures/portalgun_col.jpg', function ( image ) {
			texture.image = image;
			texture.needsUpdate = true;
				} );


	var loader = new THREE.OBJLoader( manager );
				loader.load( "models/Portal Gun2.obj", function ( object ) {

					
					object.traverse( function ( child ) {
						if ( child instanceof THREE.Mesh ) {
							child.material.map = texture;
						}
					} );

				portalGunObj = object;
				gunLoaded = true;	
				}, onProgress, onError );
}

function loadPlayer(){

	var legs = new THREE.Texture();
	var upper = new THREE.Texture();
	var hair = new THREE.Texture();
	var face = new THREE.Texture();

	//legs texture
		var loader = new THREE.ImageLoader( manager );
		loader.load( 'textures/legs.jpg', function ( image ) {
			legs.image = image;
			legs.needsUpdate = true;
				} );
		//upper texture
		var loader = new THREE.ImageLoader( manager );
		loader.load( 'textures/upper.jpg', function ( image ) {
			upper.image = image;
			upper.needsUpdate = true;
				} );
		//hair texture
		var loader = new THREE.ImageLoader( manager );
		loader.load( 'textures/hair.jpg', function ( image ) {
			hair.image = image;
			hair.needsUpdate = true;
				} );
		//face texture
		var loader = new THREE.ImageLoader( manager );
		loader.load( 'textures/face.jpg', function ( image ) {
			face.image = image;
			face.needsUpdate = true;
				} );



	var loader = new THREE.OBJLoader( manager );
				loader.load( "models/player.obj", function ( object ) {

					object.traverse( function ( child ) {
						if ( child instanceof THREE.Mesh ) {

							var name = child.name;
							
							if(name == "DrawCall_0121")
								child.material.map = upper;
							else if(name == "DrawCall_0190")
								child.material.map = hair;							
							else if(name == "DrawCall_0117")
								child.material.map = face;
							else if(name == "DrawCall_0120")
								child.material.map = upper;
							else if(name == "DrawCall_0122")
								child.material.map = legs;

						}
					} );


				playerObj = object;
				playerLoaded = true;
				}, onProgress, onError );
}