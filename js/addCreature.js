function addCreature(selector) {
	selector.append(
		'<div class="creature-container">\
			<div class="creature">\
				<div class="creature-vertical-container">\
					<div class="creature-size-container">\
						<img class="creature-image" src="https://images.magicdeck.app/arena/406684.jpg" alt="creature-image">\
					</div>\
				</div>\
			</div>\
		</div>\
		<div class="creature-controls-container">\
			<div class="creature-controls">\
				<div class="rotate-creature"></div>\
				<div class="slidecontainer">\
					<div class="bottom-slider horizontal">\
						<div class="slider-header horizontal-position-header">\
							<div class="slider-title horizontal-position-title">Horizontal</div>\
							<input type="number" class="slider-tooltip slider-horizontal-tooltip" min="-100" max="100" value="0">\
						</div>\
					  	<input type="range" min="-100" max="100" value="0" class="slider horizontal-position">\
					</div>\
					<div class="bottom-slider size">\
						<div class="slider-header size-position-header">\
							<div class="slider-title size-position-title">Size</div>\
							<input type="number" class="slider-tooltip slider-size-tooltip" min="0" max="200" value="100">\
						</div>\
					  	<input type="range" min="0" max="200" value="100" class="slider size-position">\
					</div>\
					<div class="bottom-slider vertical">\
						<div class="slider-header vertical-position-header">\
							<div class="slider-title vertical-position-title">Vertical</div>\
							<input type="number" class="slider-tooltip slider-vertical-tooltip" min="-100" max="100" value="100">\
						</div>\
					  	<input type="range" min="-100" max="100" value="0" class="slider vertical-position">\
					</div>\
				</div>\
			</div>\
		</div>\
		'
	);

	$('#image-url').on('input', function() {
		selector.find('.creature-image').attr('src', stripHTML($(this).val()));
	});

	// Creates the circle slider and it's behavior for the rotation of the creature image.
	let circleSlider = selector.find('.rotate-creature');
	circleSlider.roundSlider({
	    min: 0,
	    max: 360,
	    step: 1,
	    radius: 90,
	    width: 4,
	    value: 0,
	    handleSize: "+14",
	    drag: function (e) {
	        rotateCreatureImage(selector, e.value)
	    },
	    change: function (e) {
	        rotateCreatureImage(selector, e.value)
	    }
	});

	// Creates the horizontal position slider behavior for the creature image.
	selector.find('.horizontal-position').on('input', function() {
		horzontalCreatureImagePosition(selector, $(this).val());
	});
	selector.find('.slider-horizontal-tooltip').on('input', function() {
		horzontalCreatureImagePosition(selector, $(this).val());
	});

	// Creates the size slider behavior for the creature image.
	selector.find('.size-position').on('input', function() {
		sizeCreatureImage(selector, $(this).val());
	});
	selector.find('.slider-size-tooltip').on('input', function() {
		sizeCreatureImage(selector, $(this).val());
	});

		// Creates the vertical position slider behavior for the creature image.
	selector.find('.vertical-position').on('input', function() {
		verticalCreatureImagePosition(selector, $(this).val());
	});
	selector.find('.slider-vertical-tooltip').on('input', function() {
		verticalCreatureImagePosition(selector, $(this).val());
	});
}
