var quill;

function addBottomTextbox(selector) {
	selector.append(
		'<div class="card-bottom-wysiwyg-wrapper">\
			<div class="card-bottom-wysiwyg">\
				<p>Enter some text here...</p>\
			</div>\
		</div>'
	);


	// Set the toolbar oprions for Quill.
	let toolbarOptions = [
		['bold', 'italic', 'underline', 'strike'],
		[{ 'list': 'ordered'}, { 'list': 'bullet' }],
		[{ 'indent': '-1'}, { 'indent': '+1' }],
		[{ 'align': [] }],
  		[{ 'script': 'sub'}, { 'script': 'super' }]
	];

	// Create the WYSIWYG with quill.
	quill = new Quill( selector.find('.card-bottom-wysiwyg').get(0), {
    	theme: 'snow',
    	modules: {
		    toolbar: toolbarOptions
		}
	});

	// If the user clicks in the wysiwyg, activate the interface.
	selector.find('.card-bottom-wysiwyg-wrapper .card-bottom-wysiwyg').click(function() {
		$(this).parent().addClass('wysiwyg-active');
	});

	// If the user clicks anywhere outside the wysiwyg, destroy the interface.
	$(document).click(function(e){

	    // Check if click was triggered on or within the wysiwyg, and if it wasn't, hide the interface.
	    if( $(e.target).closest(selector.find('.card-bottom-wysiwyg')).length > 0 ||
	    	$(e.target).closest(selector.find('.ql-toolbar')).length > 0
    	) {
	        return false;
	    }
	    else {
	    	selector.find('.card-bottom-wysiwyg-wrapper').removeClass('wysiwyg-active');
	    }
	});
}