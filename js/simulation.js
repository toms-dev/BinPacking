/**
 * Created by tom on 19/12/14.
 */

// seems useless. might be removed soon

var Simulation = Class.extend({
	init: function() {
		this.boxes = [];
		this.width = null;
		this.height = null;
	},
	setup: function(width, height) {
		this.width = width;
		this.height = height;
	},
	setBoxes: function(boxes) {
		this.boxes = boxes;
	}
});

