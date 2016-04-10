var Level = function(game) {
	this.BRICKS_X = 100;
	this.BRICKS_Y = 100;
	this.levelBricks = null;
	
	this.initialize = function(game) {
		levelBricks = new Array();
		
		for(var row = 0; row < this.BRICKS_Y; row++) {
			for(var col = 0; col < this.BRICKS_X; col++) {
				var brick = new LevelBrick(game, row, col);
				levelBricks.push(brick);
			}
		}
	};
	this.initialize(game);
	
};
