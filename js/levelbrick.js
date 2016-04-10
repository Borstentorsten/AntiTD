function LevelBrick(game, row, col) {
	var renderer = null;
	this.row = row;
	this.col = col;
	
	this.initialize = function(game) {
		var that = this;
		that.renderer = new LevelBrickRenderer();
		that.renderer.initialize(game, that.row, that.col);		
	}
	
	this.initialize(game);
	
	
}