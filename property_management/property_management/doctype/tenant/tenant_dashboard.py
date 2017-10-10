from frappe import _

def get_data():
	return {
		'transactions': [
			{
				'label': _('Create An EB Reading'),
				'items': ['EB Meter Reading']
			},
			{
				'label': _('Collect Rent'),
				'items': ['Rent Collection']
			}

		]
	}