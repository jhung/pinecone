module.exports = {
	title: 'Checkboxes',
	status: 'wip',
	order: 4,
	context: {
		standAlone: false,
		checkboxes: [
			{
				name: 'unchecked',
				label: 'Initially unchecked',
				standAlone: false
			},
			{
				name: 'checked',
				label: 'Initially checked',
				checked: true,
				standAlone: false
			},
			{
				name: 'indeterminate',
				label: 'Indeterminate checkbox',
				value: 'indeterminate',
				standAlone: false
			},
			{
				name: 'disabled',
				label: 'Disabled checkbox',
				disabled: true,
				standAlone: false
			}
		]
	},
	variants: [
		{
			name: 'Default Inverse',
			label: 'Default (Inverse)',
			context: {
				bodyClass: 'has-blue-500-background-color',
				inverse: true
			}
		}
	]
};
