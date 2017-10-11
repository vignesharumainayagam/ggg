// Copyright (c) 2017, Valiant Systems and contributors
// For license information, please see license.txt

frappe.provide('frappe.request');
frappe.request.url = '/';
frappe.request.ajax_count = 0;
frappe.request.waiting_for_ajax = [];


frappe.ui.form.on('Rent Collection', {
	refresh: function(frm) {

	}
});
frappe.ui.form.on("Rent Collection", "onload", function(frm) {
      // frappe.msgprint(__("Select the tenant "+(localStorage.name)));
      cur_frm.set_value("month", localStorage.month);
      cur_frm.set_value("year", localStorage.year);
});
frappe.ui.form.on("Rent Collection", "read_only_15", function(frm) {
  var number = parseInt(frm.doc.read_only_15);
  var number1 = parseInt(frm.doc.rate_per_unit);
  cur_frm.set_value("eb_amount", (number * number1));
});
frappe.ui.form.on("Rent Collection", "eb_amount", function(frm) {
  var number3 = parseInt(frm.doc.eb_amount);
  var number4 = parseInt(frm.doc.rent);
  var number5 = parseInt(frm.doc.maintainance);
  cur_frm.set_value("rent_total", (number3 + number4 + number5));
});


frappe.ui.form.on("Rent Collection", "name1", function(frm) {
  frappe.call({
    method: "property_management.property_management.doctype.rent_collection.rent_collection.calculate",
    args:   {
                tenant_name: frm.doc.name1,
                year: frm.doc.year,
                month: frm.doc.month
            },
            callback: function (vicky1) {
              console.log(vicky1.message);
              if (vicky1.message){
          cur_frm.set_value("read_only_15", vicky1.message[0].eb_usage);
          cur_frm.set_value("previous_month_reading", vicky1.message[0].previous_month_reading);
          cur_frm.set_value("current_month_reading", vicky1.message[0].current_month_reading);
              }
              else{
          cur_frm.set_value("read_only_15"," ");
          cur_frm.set_value("previous_month_reading", " ");
          cur_frm.set_value("current_month_reading", " ");
              }

            }

  });
}); 

frappe.ui.form.on("Rent Collection", "month", function(frm) {
  frappe.call({
    method: "property_management.property_management.doctype.rent_collection.rent_collection.calculate",
    args:   {
                tenant_name: frm.doc.name1,
                year: frm.doc.year,
                month: frm.doc.month
            },
            callback: function (vicky1) {
              // console.log(vicky1);
              if (vicky1.message){
          cur_frm.set_value("read_only_15", vicky1.message[0].eb_usage);
          cur_frm.set_value("previous_month_reading", vicky1.message[0].previous_month_reading);
          cur_frm.set_value("current_month_reading", vicky1.message[0].current_month_reading);
              }
              else{
          cur_frm.set_value("read_only_15"," ");
          cur_frm.set_value("previous_month_reading", " ");
          cur_frm.set_value("current_month_reading", " ");
              }
            }

  });
});

frappe.ui.form.on("Rent Collection", "year", function(frm) {
  frappe.call({
    method: "property_management.property_management.doctype.rent_collection.rent_collection.calculate",
    args:   {
                tenant_name: frm.doc.name1,
                year: frm.doc.year,
                month: frm.doc.month
            },
            callback: function (vicky1) {
              // console.log(vicky1);
              if (vicky1.message){
          cur_frm.set_value("read_only_15", vicky1.message[0].eb_usage);
          cur_frm.set_value("previous_month_reading", vicky1.message[0].previous_month_reading);
          cur_frm.set_value("current_month_reading", vicky1.message[0].current_month_reading);
              }
              else{
          cur_frm.set_value("read_only_15"," ");
          cur_frm.set_value("previous_month_reading", " ");
          cur_frm.set_value("current_month_reading", " ");
              }
            }

  });
});


frappe.ui.form.on("Rent Collection", "month", function(frm) {
    if (frm.doc.month == "01 January.") {
    frappe.call({
    method: "property_management.property_management.doctype.eb_meter_reading.eb_meter_reading.January",
    args:   {
                tenant_name: frm.doc.name1,
                year: frm.doc.year,
                month: frm.doc.month
            },
            callback: function (vicky) {
              if (vicky.message[0].current_month_reading){
          cur_frm.set_value("previous_month_reading", vicky.message[0].current_month_reading);
              }
              else{
          cur_frm.set_value("read_only_15"," ");
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
                tenant_name: frm.doc.name1,
                year: frm.doc.year,
                month: frm.doc.month
            },
            callback: function (vicky) {
              if (vicky.message[0].current_month_reading){
          cur_frm.set_value("previous_month_reading", vicky.message[0].current_month_reading);
              }
              else{
          cur_frm.set_value("read_only_15"," ");
          cur_frm.set_value("previous_month_reading", " ");
          cur_frm.set_value("current_month_reading", " ");
              }
              // console.log(vicky);

            }
  });
    }
});



frappe.ui.form.on("Rent Collection", "year", function(frm) {
    if (frm.doc.month == "01 January.") {
    frappe.call({
    method: "property_management.property_management.doctype.eb_meter_reading.eb_meter_reading.January",
    args:   {
                tenant_name: frm.doc.name1,
                year: frm.doc.year,
                month: frm.doc.month
            },
            callback: function (vicky) {
              if (vicky.message[0].current_month_reading){
          cur_frm.set_value("previous_month_reading", vicky.message[0].current_month_reading);
              }
              else{
          cur_frm.set_value("read_only_15"," ");
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
                tenant_name: frm.doc.name1,
                year: frm.doc.year,
                month: frm.doc.month
            },
            callback: function (vicky) {
              if (vicky.message[0].current_month_reading){
          cur_frm.set_value("previous_month_reading", vicky.message[0].current_month_reading);
              }
              else{
          cur_frm.set_value("read_only_15"," ");
          cur_frm.set_value("previous_month_reading", " ");
          cur_frm.set_value("current_month_reading", " ");
              }
              // console.log(vicky);

            }
  });
    }
});

frappe.ui.form.on("Rent Collection", "name1", function(frm) {
    if (frm.doc.month == "01 January.") {
    frappe.call({
    method: "property_management.property_management.doctype.eb_meter_reading.eb_meter_reading.January",
    args:   {
                tenant_name: frm.doc.name1,
                year: frm.doc.year,
                month: frm.doc.month
            },
            callback: function (vicky) {
              if (vicky.message[0].current_month_reading){
          cur_frm.set_value("previous_month_reading", vicky.message[0].current_month_reading);
              }
              else{
          cur_frm.set_value("read_only_15"," ");
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
                tenant_name: frm.doc.name1,
                year: frm.doc.year,
                month: frm.doc.month
            },
            callback: function (vicky) {
              if (vicky.message[0].current_month_reading){
          cur_frm.set_value("previous_month_reading", vicky.message[0].current_month_reading);
              }
              else{
          cur_frm.set_value("read_only_15"," ");
          cur_frm.set_value("previous_month_reading", " ");
          cur_frm.set_value("current_month_reading", " ");
              }
              // console.log(vicky);

            }
  });
    }
});


frappe.ui.form.on("Rent Collection", "previous_month_reading", function(frm) {
  var number = parseFloat(frm.doc.current_month_reading);
  var number1 = parseFloat(frm.doc.previous_month_reading);
  cur_frm.set_value("read_only_15", (number - number1));
});
frappe.ui.form.on("Rent Collection", "current_month_reading", function(frm) {
  var number = parseFloat(frm.doc.current_month_reading);
  var number1 = parseFloat(frm.doc.previous_month_reading);
  if (number < number1){
      frappe.msgprint(__("Current month reading cannot be less than previous month reading"));
  }  
  else {
  cur_frm.set_value("read_only_15", (number - number1));
  }
});


frappe.ui.form.on("Rent Collection", "validate", function(frm) {
  $.ajax({
  url : "http://feathers.tridotstech.com/api/resource/EB Meter Reading",
  dataType: 'text',
  type: 'POST',
  contentType: 'application/json',
  data : JSON.stringify( {
  "tenant_name" : frm.doc.name1,
  "month" : frm.doc.month,
  "year" : frm.doc.year,
  "previous_month_reading" : frm.doc.previous_month_reading,
  "current_month_reading" : frm.doc.current_month_reading,
  "eb_usage" : frm.doc.read_only_15
  }
  ),
  beforeSend: function(xhr){
  xhr.setRequestHeader(
  'X-Frappe-CSRF-Token', frappe.csrf_token
  );
  },success: function(data){
  console.log(data);
  frappe.msgprint(__("Saved In EB Meter Reading"));  
  }, error: function(error){
  console.log(error);
  }
  });
});



frappe.ui.form.on("Rent Collection", "onload", function(frm) {
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

frappe.ui.form.on("Rent Collection", "onload", function(frm) {
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
frappe.ui.form.on("Rent Collection", "onload", function(frm) {
  cur_frm.fields_dict.read_only_15.$input.on("keypress", function(evt) {
{
         var charCode = (evt.which) ? evt.which : event.keyCode
            return false;
 
      }

  });

});
frappe.ui.form.on("Rent Collection", "onload", function(frm) {
  cur_frm.fields_dict.eb_amount.$input.on("keypress", function(evt) {
{
         var charCode = (evt.which) ? evt.which : event.keyCode
            return false;
 
      }

  });

});
frappe.ui.form.on("Rent Collection", "onload", function(frm) {
  cur_frm.fields_dict.rent_total.$input.on("keypress", function(evt) {
{
         var charCode = (evt.which) ? evt.which : event.keyCode
            return false;
 
      }

  });

});