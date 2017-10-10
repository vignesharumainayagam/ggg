from __future__ import unicode_literals
from frappe import _

def get_data():
	return [
		{
			"label": _("Section 1"),
			"items": [
				{
					"type": "doctype",
					"name": "Property"
				},
				{
					"type": "doctype",
					"name": "Flats"
				},
				{
					"type": "doctype",
					"name": "Tenant"
				},
				{
					"type": "doctype",
					"name": "EB Meter Reading"
				},
				{
					"type": "doctype",
					"name": "Rent Collection"
				}
			]
		},
		{
			"label": _("Section 2"),
			"items": [
				{
					"type": "doctype",
					"name": "Owner"
				},
				{
					"type": "doctype",
					"name": "Location"
				},
				{
					"type": "doctype",
					"name": "Property Type"
				},
				{
					"type": "doctype",
					"name": "Expense Type"
				}
			]
		}

	]
