import type { PageLoad } from './$types';

export const load: PageLoad = () => {
	return {
		services: [
			{
				name: 'Online services',
				description: 'Access to multiplayer games',
				price: 10
			},
			{
				name: 'Larger Storage',
				description: 'Extra 1TB of cloud save',
				price: 20
			},
			{
				name: 'Customizable profile',
				description: 'Custom theme on your profile',
				price: 20
			}
		]
	};
};
