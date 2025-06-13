import { NextRequest, NextResponse } from 'next/server';

const WEBHOOK_URL = process.env.WEBHOOK_URL;

export async function POST(req: NextRequest) {
  try {
    const { userAgent, time, page, geolocation, geolocationError } = await req.json();
    console.log(req);

    const forwardedFor = req.headers.get('x-forwarded-for');
    const ip = forwardedFor ? forwardedFor.split(',')[0].trim() : null;

    const fields = [
      { name: 'User Agent', value: userAgent, inline: false },
      { name: 'Horário', value: time, inline: true },
      { name: 'Página', value: page, inline: true },
      { name: 'IP do Usuário', value: ip || 'Não disponível', inline: true },
    ];

    if (geolocation) {
      fields.push(
        { name: 'Latitude', value: geolocation.latitude.toString(), inline: true },
        { name: 'Longitude', value: geolocation.longitude.toString(), inline: true }
      );
    } else if (geolocationError) {
      fields.push({ name: 'Geolocation Error', value: geolocationError, inline: false });
    } else {
      fields.push({
        name: 'Geolocation Status',
        value: 'Fetching or not available',
        inline: false,
      });
    }

    await fetch(WEBHOOK_URL!, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        content: `👀 Alguém entrou na homepage do lmacedo.site!`,
        embeds: [
          {
            title: 'Detalhes do visitante',
            fields: fields,
            color: 7506394,
          },
        ],
      }),
    });

    return NextResponse.json({ message: 'Webhook sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending webhook via API route:', error);
    return NextResponse.json({ error: 'Failed to send webhook' }, { status: 500 });
  }
}
