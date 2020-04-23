var jsHelper = (function () {

	// JS Helper
	// Melih SAFRAN
	// Create: 23.04.2020
	// Update: 23.04.2020
	
	var core = {
		
		/// Format String
		format: function (format, args){

            if(Array.isArray(args)){
                for (var i = 0; i < args.length; i++){
                    format = format.replace(new RegExp("<" + i + ">", "g"), args[i]);
                }
            }
            else{
                format = format.replace(new RegExp("<0>", "g"), args);
            }
            return format;
        }
	};

	return core;
}());