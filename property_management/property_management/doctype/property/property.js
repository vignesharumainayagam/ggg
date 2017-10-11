// Copyright (c) 2017, Valiant Systems and contributors
// For license information, please see license.txt

frappe.ui.form.on('Property', {
	refresh: function(frm) {

	}
});
frappe.ui.form.on("Property", "onload", function(frm) {
  cur_frm.fields_dict.area_in_sq_ft.$input.on("keypress", function(evt) {
       var charCode = (evt.which) ? evt.which : event.keyCode
         if (charCode > 31 && (charCode < 48 || charCode > 57))
            return false;
 		 else
         return true;
  });
});