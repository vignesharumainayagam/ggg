# -*- coding: utf-8 -*-
# Copyright (c) 2017, Valiant Systems and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document
from frappe import _
    

class EBMeterReading(Document):
      
    def validate(self):
        last_transaction = frappe.get_list("EB Meter Reading",
            fields=["tenant_name", "month", "year"],
            filters= [
                ["tenant_name", "=", self.tenant_name],
                ["month", "=", self.month],
                ["year", "=", self.year]
                ]
                )
        n = len(last_transaction)
        if last_transaction:
            frappe.throw(_("Record Already exists"))


@frappe.whitelist()
def January(tenant_name, year, month):
    if month=="01 January.":
        previous_year = int(year)-1
        vicky = frappe.get_list('EB Meter Reading',
                fields=["current_month_reading", "month", "year"],
                filters = [
                ["tenant_name", "=", tenant_name],
                ["month", "=", "12 December."],
                ["year", "=", previous_year]
                ]
                )
        n = len(vicky)        
        return vicky
        # frappe.msgprint(_(vicky[n-n]));


@frappe.whitelist()
def rest(tenant_name, year, month):
    d = {1: '01 January.', 2: '02 February.', 3: '03 March.', 4: '04 April.', 5: '05 May.', 6: '06 June.', 7: '07 July.', 8: '08 August.', 9: '09 September.', 10: '10 October.', 11: '11 November.', 12: '12 December.'}
    number = int(month[:2])
    month = d[number-1]
    if 1+1==02:
        vicky = frappe.get_list('EB Meter Reading',
                fields=["current_month_reading", "month", "year"],
                filters = [
                ["tenant_name", "=", tenant_name],
                ["month", "=", month],
                ["year", "=", year]
                ]
                )
        return vicky
        # frappe.msgprint(_(d[number-1]));
