import type { PageLoad } from './$types';

export const load: PageLoad = () => {
	return {
		services: [
			{
				id: 0,
				name: 'Online services',
				description: 'Access to multiplayer games',
				price: 10
			},
			{
				id: 1,
				name: 'Larger Storage',
				description: 'Extra 1TB of cloud save',
				price: 20
			},
			{
				id: 2,
				name: 'Customizable profile',
				description: 'Custom theme on your profile',
				price: 20
			}
		]
	};
};
