import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Na Railway, você deve configurar a variável BACKEND_URL com a URL do seu backend python
    // Ex: https://inspectify-backend.up.railway.app
    const BACKEND_SERVICE_URL = process.env.BACKEND_URL || 'http://localhost:8000';
    const targetUrl = `${BACKEND_SERVICE_URL}/vistoria/sync`;

    const res = await fetch(targetUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch (error) {
    return NextResponse.json({ detail: "Erro na ponte de rede entre frontend e backend" }, { status: 500 });
  }
}
