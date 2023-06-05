export default function reportData(data) {
	const webhookUrls = {
		Feedback:
			'https://discord.com/api/webhooks/1111683954626535424/UFQIKBcJlLlrNQI0PSBApzQraM0Ac0WJiRZOrzhOt7H5-w4p5FOsvZC2ZwLh59_LN_CW',
		Question:
			'https://discord.com/api/webhooks/1111683835705446410/RFtAiPkw-ogpFXKlaN5IOzelSJ-zM-qJvxMuXHNXN2EQhSYzRQVkNse9ozhCs7qB52aF',
		FeatureRequest:
			'https://discord.com/api/webhooks/1111684216409821274/90pAklB_Ci4AScYNqBMookyXpiMINsHE7vKyBNr0qObO_SmQi9NwEz-qAnuYvvLuhOnZ',
		Bug: 'https://discord.com/api/webhooks/1111684031109677127/tlM90D7FPpNcxlBuG82q3SLrjEHJ951NUY-fez01Vd3mfIebs3imeyFtxcUJVlzqfvhQ',
		Review:
			'https://discord.com/api/webhooks/1111684108419084349/lGGlsa2U0tAV8fBYIctUg2pxzsP9FMTz10OQfBGSrkZo43pw0sBwkz98CVVqIIM7TGIZ',
		General:
			'https://discord.com/api/webhooks/1111650927712161973/KqiPdzGEjyx-rmx4DCCrgoVbCv4MuicGVwLM1xYq4tk3IDtF7Dbq0ZPgmfZ_5NJQ4SO4'
	};

	let webhookUrl = webhookUrls[data.type];

	if (webhookUrl) {
		fetch(webhookUrl, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ content: data.report })
		})
			.then((response) => {
				if (response.ok) {
					console.log('Message sent successfully!');
				} else {
					console.error('Failed to send message:', response.statusText);
				}
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	}
}
