// Copyright (c) 2017, Valiant Systems and contributors
// For license information, please see license.txt


frappe.ui.form.on('EB Meter Reading', {
	refresh: function(frm) {	

  }
});






frappe.ui.form.on("EB Meter Reading", "onload", function(frm) {
  cur_frm.fields_dict.previous_month_reading.$input.on("keypress", function(evt) {
      var theEvent = evt || window.event;
      var key = theEvent.keyCode || theEvent.which;
      key = String.fromCharCode( key );
      var regex = /[0-9]|\./;
      if( !regex.test(key) ) {
        theEvent.returnValue = false;
        if(theEvent.preventDefault) theEvent.preventDefault();
      }

  });

});

frappe.ui.form.on("EB Meter Reading", "onload", function(frm) {
  cur_frm.fields_dict.current_month_reading.$input.on("keypress", function(evt) {
      var theEvent = evt || window.event;
      var key = theEvent.keyCode || theEvent.which;
      key = String.fromCharCode( key );
      var regex = /[0-9]|\./;
      if( !regex.test(key) ) {
        theEvent.returnValue = false;
        if(theEvent.preventDefault) theEvent.preventDefault();
      }

  });

});

frappe.ui.form.on("EB Meter Reading", "onload", function(frm) {
  cur_frm.fields_dict.eb_usage.$input.on("keypress", function(evt) {
{
         var charCode = (evt.which) ? evt.which : event.keyCode
            return false;
 
      }

  });

});





frappe.ui.form.on("EB Meter Reading", "previous_month_reading", function(frm) {
	var number = parseFloat(frm.doc.current_month_reading);
	var number1 = parseFloat(frm.doc.previous_month_reading);
  cur_frm.set_value("eb_usage", (number - number1));
});
frappe.ui.form.on("EB Meter Reading", "current_month_reading", function(frm) {
  var number = parseFloat(frm.doc.current_month_reading);
  var number1 = parseFloat(frm.doc.previous_month_reading);
  if (number < number1){
      frappe.msgprint(__("Current month reading cannot be less than previous month reading"));
  }  
  else {
  cur_frm.set_value("eb_usage", (number - number1));
  }
});
frappe.ui.form.on("EB Meter Reading", "collect_rent", function(frm) {
    	localStorage.month = frm.doc.month;
    	localStorage.year = frm.doc.year;
    	localStorage.name = frm.doc.tenant_name;
    	localStorage.eb_usage = frm.doc.eb_usage;
		window.location.replace(window.location.origin+"/desk#Form/Rent Collection/New Rent Collection");
});
  	
frappe.ui.form.on("EB Meter Reading", "month", function(frm) {
    if (frm.doc.month == "01 January.") {
    frappe.call({
    method: "property_management.property_management.doctype.eb_meter_reading.eb_meter_reading.January",
    args:   {
                tenant_name: frm.doc.tenant_name,
                year: frm.doc.year,
                month: frm.doc.month
            },
            callback: function (vicky) {
              if (vicky.message){
          cur_frm.set_value("previous_month_reading", vicky.message[0].current_month_reading);
              }
              else{
          cur_frm.set_value("eb_usage"," ");
          cur_frm.set_value("previous_month_reading", " ");
          cur_frm.set_value("current_month_reading", " ");

              }
              // console.log(vicky);

            }

  });
    }
    else{
    frappe.call({
    method: "property_management.property_management.doctype.eb_meter_reading.eb_meter_reading.rest",
    args: {
                tenant_name: frm.doc.tenant_name,
                year: frm.doc.year,
                month: frm.doc.month
            },
            callback: function (vicky) {
              if (vicky.message){
          cur_frm.set_value("previous_month_reading", vicky.message[0].current_month_reading);
              }
              else{
          cur_frm.set_value("eb_usage"," ");
          cur_frm.set_value("previous_month_reading", " ");
          cur_frm.set_value("current_month_reading", " ");
              }
              // console.log(vicky);

            }
  });
    }
});



frappe.ui.form.on("EB Meter Reading", "year", function(frm) {
    if (frm.doc.month == "01 January.") {
    frappe.call({
    method: "property_management.property_management.doctype.eb_meter_reading.eb_meter_reading.January",
    args:   {
                tenant_name: frm.doc.tenant_name,
                year: frm.doc.year,
                month: frm.doc.month
            },
            callback: function (vicky) {
              if (vicky.message){
          cur_frm.set_value("previous_month_reading", vicky.message[0].current_month_reading);
              }
              else{
          cur_frm.set_value("eb_usage"," ");
          cur_frm.set_value("previous_month_reading", " ");
          cur_frm.set_value("current_month_reading", " ");

              }
              // console.log(vicky);

            }

  });
    }
    else{
    frappe.call({
    method: "property_management.property_management.doctype.eb_meter_reading.eb_meter_reading.rest",
    args: {
                tenant_name: frm.doc.tenant_name,
                year: frm.doc.year,
                month: frm.doc.month
            },
            callback: function (vicky) {
              if (vicky.message){
          cur_frm.set_value("previous_month_reading", vicky.message[0].current_month_reading);
              }
              else{
          cur_frm.set_value("eb_usage"," ");
          cur_frm.set_value("previous_month_reading", " ");
          cur_frm.set_value("current_month_reading", " ");
              }
              // console.log(vicky);

            }
  });
    }
});




frappe.ui.form.on("EB Meter Reading", "tenant_name", function(frm) {
    if (frm.doc.month == "01 January.") {
    frappe.call({
    method: "property_management.property_management.doctype.eb_meter_reading.eb_meter_reading.January",
    args:   {
                tenant_name: frm.doc.tenant_name,
                year: frm.doc.year,
                month: frm.doc.month
            },
            callback: function (vicky) {
              if (vicky.message){
          cur_frm.set_value("previous_month_reading", vicky.message[0].current_month_reading);
              }
              else{
          cur_frm.set_value("eb_usage"," ");
          cur_frm.set_value("previous_month_reading", " ");
          cur_frm.set_value("current_month_reading", " ");

              }
              // console.log(vicky);

            }

  });
    }
    else{
    frappe.call({
    method: "property_management.property_management.doctype.eb_meter_reading.eb_meter_reading.rest",
    args: {
                tenant_name: frm.doc.tenant_name,
                year: frm.doc.year,
                month: frm.doc.month
            },
            callback: function (vicky) {
              if (vicky.message){
          cur_frm.set_value("previous_month_reading", vicky.message[0].current_month_reading);
              }
              else{
          cur_frm.set_value("eb_usage"," ");
          cur_frm.set_value("previous_month_reading", " ");
          cur_frm.set_value("current_month_reading", " ");
              }
              // console.log(vicky);

            }
  });
    }
});
