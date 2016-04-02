function LevelBrickRenderer() {
	
	var geometry = null;
	var material = null;
	var mesh = null;
	
	
	this.initialize = function(scene) {
		var that = this;
		that.geometry = new THREE.PlaneGeometry(10, 10);
		that.material = new THREE.MeshBasicMaterial({
			color: 0xFFFF00, side: THREE.DoubleSide	
		});
		this.mesh = new THREE.Mesh(that.geometry, that.material);
		scene.add(that.mesh);
	};
}
