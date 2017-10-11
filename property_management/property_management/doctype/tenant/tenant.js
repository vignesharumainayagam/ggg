// Copyright (c) 2017, Valiant Systems and contributors
// For license information, please see license.txt

frappe.ui.form.on('Tenant', {
	refresh: function(frm) {

	}
});
frappe.ui.form.on("Tenant", "refresh", function(frm) {	
    cur_frm.set_query("flat_occupied", function() {
        return {
            "filters": {
                "property": (frm.doc.rented_property)
            }
        };
    });   
});


frappe.ui.form.on("Tenant", "validate", function(frm) {	 
	if (frm.doc.mobile_number.length != 10){
		frappe.msgprint(__("Mobile number should be exactly 10 digits"));}
		else 
			{
				return true
			}

});

frappe.ui.form.on("Tenant", "onload", function(frm) {
  cur_frm.fields_dict.mobile_number.$input.on("keypress", function(evt) {
		var charCode = (evt.which) ? evt.which : event.keyCode
         if (charCode > 31 && (charCode < 48 || charCode > 57))
            return false;
 		 else
         return true;
  });

});