# -*- coding: utf-8 -*-
# Copyright (c) 2017, Valiant Systems and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document
from frappe import _
import requests








class RentCollection(Document):
      
    def validate(self):
        last_transaction = frappe.get_list("Rent Collection",
            fields=["name1", "month", "year"],
            filters= [
                ["name1", "=", self.name1],
                ["month", "=", self.month],
                ["year", "=", self.year]
                ]
                )
        n = len(last_transaction)
        if last_transaction:
            frappe.throw(_("Record Already exists"))

@frappe.whitelist()
def calculate(tenant_name, year, month):
    if 1+1==02:
        vicky1 = frappe.get_list('EB Meter Reading',
                fields=["current_month_reading", "previous_month_reading", "eb_usage"],
                filters = [
                ["tenant_name", "=", tenant_name],
                ["month", "=", month],
                ["year", "=", year]
                ]
                )
        return vicky1
        # frappe.msgprint(_(vicky1));
