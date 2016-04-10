function LevelBrickRenderer() {
	this.BRICK_WIDTH = 10;
	this.BRICK_HEIGHT = 10;
	
	this.geometry = null;
	this.material = null;
	this.mesh = null;
	
	this.borderGeometry = null;
	this.borderMaterial = null;
	this.borderLine = null;
	
	
	this.initialize = function(game, row, col) {
		var that = this;
		that.geometry = new THREE.PlaneGeometry(that.BRICK_WIDTH, that.BRICK_HEIGHT);
		that.material = new THREE.MeshBasicMaterial({
			color: 0xFFFF00, side: THREE.DoubleSide	,
			map: ResourceFactory.getTextureGrass()
		});
		this.mesh = new THREE.Mesh(that.geometry, that.material);
		that.mesh.translateX((that.BRICK_WIDTH * col) + (that.BRICK_WIDTH / 2));
		that.mesh.translateY((that.BRICK_HEIGHT * row) + (that.BRICK_HEIGHT / 2));
		game.scene.add(that.mesh);
		
		if(game.isLevelEditor) {
			that.borderGeometry = new THREE.Geometry();
			that.borderGeometry.vertices.push(new THREE.Vector3(0.0, 0.0, 1.0));
			that.borderGeometry.vertices.push(new THREE.Vector3(0.0, that.BRICK_HEIGHT, 1.0));
			that.borderGeometry.vertices.push(new THREE.Vector3(that.BRICK_WIDTH, that.BRICK_HEIGHT, 1.0));
			that.borderGeometry.vertices.push(new THREE.Vector3(that.BRICK_WIDTH, 0.0, 1.0));
			that.borderGeometry.vertices.push(new THREE.Vector3(0.0, 0.0, 1.0));
			that.borderMaterial = new THREE.LineBasicMaterial({
				color: 0xFFFFFF
			});
			that.borderLine = new THREE.Line(that.borderGeometry, that.borderMaterial);
			that.borderLine.translateX(that.BRICK_WIDTH * col);
			that.borderLine.translateY(that.BRICK_HEIGHT * row);
			game.scene.add(that.borderLine);			
		}
	};
}
