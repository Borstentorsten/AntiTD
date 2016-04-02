function LevelBrick(scene) {
	var renderer = null;
	
	this.initialize = function(scene) {
		var that = this;
		that.renderer = new LevelBrickRenderer();
		that.renderer.initialize(scene);		
	}
	
	this.initialize(scene);
	
	
}