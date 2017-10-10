// Copyright (c) 2017, Valiant Systems and contributors
// For license information, please see license.txt

frappe.ui.form.on('EB Meter Reading', {
	refresh: function(frm) {

	}
});


frappe.ui.form.on("EB Meter Reading", "previous_month_reading", function(frm) {
	var number = parseInt(frm.doc.current_month_reading);
	var number1 = parseInt(frm.doc.previous_month_reading);
	cur_frm.set_value("eb_usage", (number - number1));
});
frappe.ui.form.on("EB Meter Reading", "current_month_reading", function(frm) {
	var number = parseInt(frm.doc.current_month_reading);
	var number1 = parseInt(frm.doc.previous_month_reading);
	cur_frm.set_value("eb_usage", (number - number1));
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
