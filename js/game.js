function Game() {
	var VIEW_ANGLE = 45;
	var NEAR = 0.1;
	var FAR = 1000;
	
	var width = 0;
	var height = 0;
	var aspect = 0;
	 
	var scene = null;
	var renderer = null;
	var container = null;
	var camera = null;
	
	this.isLevelEditor = true;
	
	this.initialize = function() {
		var that = this;
		that.container = document.getElementById("container");
		if(that.container != null) {
			that.width = that.container.offsetWidth;
			that.height = that.container.offsetHeight;
			that.aspect = that.width / that.height;
			
			this.renderer = new THREE.WebGLRenderer();
			this.camera = new THREE.PerspectiveCamera(this.VIEW_ANGLE, this.aspect, this.NEAR, this.FAR);
			this.camera.position.z = 100;
			this.scene = new THREE.Scene();
			this.scene.add(this.camera);
			
			this.renderer.setSize(this.width, this.height);
			
			this.container.appendChild(this.renderer.domElement);
			
			var level = new Level(this);
		}
	};
	
	this.run = function() {
		var that = this;
		that.renderer.render(that.scene, that.camera);
	};
}

window.addEventListener("load", function() {
	var game = new Game();
	ResourceFactory.loadTextures(function() {
		game.initialize();
		game.run();		
	});
});
