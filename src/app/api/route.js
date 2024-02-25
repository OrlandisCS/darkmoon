import { NextResponse } from 'next/server';
const accountSid = process.env.TWILO_ACCOUNTS_ID;
const authToken = process.env.TWILO_AUTH_TOKEN;
import twilo from 'twilio';

export async function POST(request) {
	const client = twilo(accountSid, authToken);
	const data = await request.json();
	try {
		const message = await client.messages.create({
			body: data.message,
			from: `whatsapp:${process.env.TWILO_PHONE_NUMBER}`,
			to: `whatsapp:${process.env.TWILO_PHONE_TO_NUMBER}`,
		});
		return NextResponse.json(
			`Pedido enviado correctamente, id: ${message.sid}`
		);
	} catch (error) {
		console.log(error);
	}
}
