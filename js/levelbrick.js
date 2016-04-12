var BrickType = {
	Grass: 1,
	Road:  2	
};

function LevelBrick(game, row, col) {
	this.row = row;
	this.col = col;
	this.type = BrickType.Grass;
	this.renderer = null;
	
	this.initialize = function(game) {
		var that = this;
		that.renderer = new LevelBrickRenderer(this);
		that.renderer.initialize(game, that);		
	};
	
	this.onClick = function(game) {
		var that = this;
		if(game.isLevelEditor) {			
			this.type = BrickType.Road;
			this.renderer.update(this);
		}
	};
	
	this.initialize(game);	
};