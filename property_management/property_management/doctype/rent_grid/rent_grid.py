# -*- coding: utf-8 -*-
# Copyright (c) 2017, Valiant Systems and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document

class RentGrid(Document):
    pass
    # def on_update(self):
    #     vicky123(self)

# @frappe.whitelist()
# def vicky123(self):
#         if self.expense_type=="Rent":
#             last_transaction = frappe.get_list('Rent Collection',
#             fields=["name1"]
#             )
#             vicky = (_(last_transaction[0].name1))       
#             frappe.msgprint(_(last_transaction[0]));