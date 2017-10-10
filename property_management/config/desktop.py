# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from frappe import _

def get_data():
	return [
		{
			"module_name": "Property Management",
			"color": "#f17d1a",
			"icon": "octicon octicon-location",
			"type": "module",
			"label": _("Property Management")
		},
		{
			"module_name": "Tenant",
			"_doctype": "Tenant",
			"color": "#f39c12",
			"icon": "octicon octicon-person",
			"type": "link",
			"link": "List/Tenant"
		},
		{
			"module_name": "EB Meter Reading",
			"_doctype": "EB Meter Reading",
			"color": "#c0392b",
			"icon": "octicon octicon-server",
			"type": "link",
			"link": "List/EB Meter Reading"
		},
		{
			"module_name": "Rent Collection",
			"_doctype": "Rent Collection",
			"color": "#3498db",
			"icon": "octicon octicon-repo-clone",
			"type": "link",
			"link": "List/Rent Collection"
		},
		{
			"module_name": "Property",
			"_doctype": "Property",
			"color": "#8e44ad",
			"icon": "octicon octicon-home",
			"type": "link",
			"link": "List/Property"
		}
	]
