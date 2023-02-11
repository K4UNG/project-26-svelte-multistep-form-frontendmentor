export function required(value: string): string | null {
	if (!value) {
		return 'This field is required';
	}
	return null;
}

export function isEmail(value: string): string | null {
	const re =
		/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

	if (!value) {
		return 'This field is required';
	} else if (!re.test(value)) {
		return 'Invalid Email';
	}
	return null;
}

export function isPh(value: string): string | null {
	const re = /^\d{3,}$/;
	if (!value) {
		return 'This field is required';
	} else if (!re.test(value)) {
		return 'Invalid Phone Number';
	}
	return null;
}
