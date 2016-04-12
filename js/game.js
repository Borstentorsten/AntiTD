function Game() {
	this.VIEW_ANGLE = 45;
	this.NEAR = 0.1;
	this.FAR = 1000;
	
	this.width = 0;
	this.height = 0;
	this.aspect = 0;
	 
	this.scene = null;
	this.renderer = null;
	this.container = null;
	this.camera = null;
	
	this.rayCaster = new THREE.Raycaster();
	
	this.isLevelEditor = true;
	
	this.renderObjects = new Array();
	
	this.addObject = function(obj, owner) {
		this.renderObjects[obj.id] = owner;
		this.scene.add(obj);
	};
	
	this.getObject = function(id) {
		return this.renderObjects[id];
	};
	
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
		var last = null;
		function step(timestamp) {			
			var diff = 0;
			if(last != null) {
				diff = timestamp - last;				
			}
			last = timestamp;
			that.renderer.render(that.scene, that.camera);
			window.requestAnimationFrame(step);
		}
		window.requestAnimationFrame(step);
	};
	
	this.onMouseDown = function(x, y) {
		var that = this;
		var mouse = new THREE.Vector2((x / this.container.clientWidth ) * 2 - 1, (-( y / this.container.clientHeight )) * 2 + 1);
		this.rayCaster.setFromCamera(mouse, this.camera);
		var objects = this.rayCaster.intersectObjects(this.scene.children);
		if(objects.length > 0) {
			var obj = that.getObject(objects[0].object.id);
			if(obj != null) {
				obj.onClick(this);
			}
		}
	};
}

var game = null;

window.addEventListener("load", function() {
	game = new Game();
	ResourceFactory.loadTextures(function() {
		game.initialize();
		game.run();		
	});
});

window.addEventListener("mousedown", function(e) {
	game.onMouseDown(e.clientX, e.clientY);
});
