/**
 * Created by tom on 19/12/14.
 */


var Simulation = Class.extend({
	init: function() {
		this.cubes = [];
		this.width = null;
		this.height = null;
	},
	setup: function(width, height, cubes) {
		this.width = width;
		this.height = height;
	},
	setCubes: function(cubes) {
		this.cubes = cubes;
	}
});
