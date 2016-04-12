ResourceFactory = {
	textureLoader: new THREE.TextureLoader(),
	textureGrass: null,
	textureRoad: null,
	
	loadTextures: function(doneCallback) {
		this.loadGrass(doneCallback);
	},
	
	loadGrass: function(doneCallback) {
		var that = this;
		that.textureLoader.load("http://127.0.0.1:8020/AntiTD/res/img/png/grass.png", function(texture) {
				that.textureGrass = texture;
				that.loadRoad(doneCallback);
			}, this.textureLoadProgress, this.textureLoadError);
	},
	loadRoad: function(doneCallback) {
		var that = this;
		that.textureLoader.load("http://127.0.0.1:8020/AntiTD/res/img/png/road.png", function(texture) {
				that.textureRoad = texture;
				doneCallback();
			}, this.textureLoadProgress, this.textureLoadError);
	},
	
	textureLoadProgress: function(progress) {
			
	},
	
	textureLoadError: function(error) {
		var x = 0;
		alert(error);
	},
	
	getTextureGrass: function() {		
		return this.textureGrass;
	},
	
	getTextureRoad: function() {		
		return this.textureRoad;
	}
};