export async function SendMessage(formData) {
	const sendData = await fetch('/api', {
		method: 'POST',
		body: JSON.stringify(formData),
		headers: {
			'Content-Type': 'aplication/json',
		},
	});
	const data = await sendData.json();

	return data;
}
