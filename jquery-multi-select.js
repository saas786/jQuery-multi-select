$.fn.multiSelect = function() {
	$('body').delegate('.remove-option', 'click', function(e) { 
        var id = $(this).closest('.option').attr("id");
        $(this).closest('.formrow').find('.multiselect option[value="' + id + '"]').attr('disabled', false);
        $(this).closest('.option').remove();
        e.preventDefault();
    });
	
	$(this).change(function(e) {
    	var option = '<div class="option" id="' +  $(this).find('option:selected').val() +'">' +
    			'<input type="hidden" name="' + $(this).attr("id") + '_options[]" value="' + $(this).find('option:selected').val() + '" />' +
	    		'<span>' + $(this).find('option:selected').text() + '</span>' + 
	    		'<a href="#" class="remove-option icon icon-remove">X</a>' +
    		'</div>';
       
    	$(this).closest('.formrow').find('.form-options').append($(option));
    	$(this).find('option:selected').attr('disabled', true);
	    e.preventDefault();
    });
}