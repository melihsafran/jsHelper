var jqueryAjaxCore = (function () {

	// Jquery AJAX Core Helper
	// Melih SAFRAN
	// Create: 16.10.2015
	// Update: 29.12.2015

	// Requires jQuery.
	
	var core = {

		/// Sends Ajax request.
		ajax: function (type, url, dataType, cache, fnSuccessHandler, fnErrorHandler) {
			$.ajax({
				type: type,
				url: url,
				dataType: dataType,
				cache: cache,
				success: fnSuccessHandler,
				error: fnErrorHandler,
			});
		},
		
		/// Sends Ajax request, returns promise.
		ajaxPromise: function (type, url, dataType, cache) {
			return $.ajax({
				type: type,
				url: url,
				dataType: dataType,
				cache: cache
			});
		}

	};

	return core;

}());

