var total = 0;
var circ_count;
var stage, layer;
var level = 0;
var score = 0;
var level_colors = [['gray', 'Gray'],
										['purple', 'Purple'],
										['green', 'Green'],
										['yellow', 'Yellow'],
										['pink', 'Pink']]
var encouragements = ['Great!', 'Wow!', 'Stellar!', 'I can\'t believe it!', 'YOU DID IT!!!', 'I\'m Crying right now!', 'Amazing!'];
var score_val;
$(function() {
	score_val = $('#score-val');
	$('#diff-select').on('change', function() {
		$('#difficulty').hide();
		circ_count = parseInt($(this).val())
		drawSomethingPretty(level_colors[level][0]);
	})
	
});

function drawSomethingPretty(level_color) {
	var WIDTH = window.innerWidth,
			HEIGHT = window.innerHeight;
	stage = new Kinetic.Stage({
		container: 'main-container',
		height: HEIGHT,
		width: WIDTH
	});

	layer = new Kinetic.Layer();

	function makeCircle(n, radius) {
		if (n == 0) {
			layer.draw();
		} else {
			var circle = new Kinetic.Circle({
				radius: radius,
				x: Math.random() * WIDTH,
				y: Math.random() * HEIGHT,
				stroke: '#'+Math.floor(Math.random()*16777215).toString(16),
				strokeWidth: 2
			});
			layer.add(circle);

			circle.on('mouseover touchstart', function() {
				if (!this.tween) {
					score += 1;
					score_val.text(score);
					this.tween = new Kinetic.Tween({
						node: this,
						radius: this.getRadius() + 300,
						duration: .4,
						easing: Kinetic.Easings.EaseInOut,
						onFinish: function() {
							var the_circle = this.node;
							the_circle.tween.reverse();
							the_circle.setStroke('black');
							the_circle.setFill(level_color);
							the_circle.setOpacity(.5);
							total += 1;
							if (total == circ_count) {
								setTimeout(function() {
									total = 0;
									level = (level + 1) % 5;
									circ_count += 1;
									var greatText = new Kinetic.Text({
						        x: 0,
						        y: HEIGHT/4,
						        text: encouragements[Math.floor(Math.random() * encouragements.length)],
						        fontSize: 1,
						        fontFamily: 'Calibri',
						        fill: level_color
						      });

									layer.add(greatText);
									layer.draw();
									var greatTween = new Kinetic.Tween({
										node: greatText,
										duration: 1,
										fontSize: 200,
										x: WIDTH / 5,
										easing: Kinetic.Easings.ElasticEaseOut(),
										onFinish: function() {
											$('#level-color').text(level_colors[level][1]);
											stage.destroy();
											$('#main-container').html('');
											drawSomethingPretty(level_colors[level][0]);
										}
									});

									greatTween.play();
									
								}, 500)
							}
							
						}
					});
					this.tween.play();
				}
			})

			var amplitude = 150;
      var period = 2500 + n * 2;
      // in ms
      var centerX = circle.getX();
      var centerY = circle.getY();
      var anim = new Kinetic.Animation(function(frame) {
        circle.setX(amplitude * Math.sin(frame.time * 2 * Math.PI / period) + centerX );
        circle.setY(amplitude * Math.sin(frame.time * 2 * Math.PI / period * .5) + (Math.random() + centerY) );
      }, layer);

      anim.start();
			makeCircle(n-1,radius);
		}	
	}

	stage.add(layer);
	makeCircle(circ_count, 40);
}